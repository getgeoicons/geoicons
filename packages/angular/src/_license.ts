// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import {
  APP_INITIALIZER,
  EnvironmentProviders,
  Injectable,
  PLATFORM_ID,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  verifyLicenseKey,
  GPL_DECLARATION,
  markProviderPresent,
  warnUnlicensed,
  type LicenseStatus,
} from '@geoicons/core';

/**
 * Angular license layer for GeoIcons. The actual verification (offline ES256, native Web
 * Crypto) lives in the framework-agnostic @geoicons/core; this is only the Angular wrapper.
 *
 * - NOT a lock: enforcement is legal (GPLv3 + commercial). An unverified state only emits a
 *   one-time console warning — icons always render normally, no watermark.
 * - Icons do NOT depend on this provider, so tree-shaking is unaffected.
 * - See docs/business-architecture.md for the full model.
 */

// Re-export the core license API so consumers keep importing it from '@geoicons/angular'.
export { verifyLicenseKey, GPL_DECLARATION, type LicenseStatus } from '@geoicons/core';

/** Resolve the license state from a provided key (or lack thereof). */
async function resolveStatus(licenseKey?: string): Promise<LicenseStatus> {
  if (!licenseKey) return 'unverified';
  if (licenseKey === GPL_DECLARATION) return 'gpl';
  return verifyLicenseKey(licenseKey);
}

/**
 * Holds the current license status. Inject it to reflect licensing in your own UI
 * (e.g. a "licensed" badge). Returns `unverified` until the provider resolves a key.
 * The Angular analogue of React's `useLicense()` / Vue's `useGeoiconsLicense()`.
 */
@Injectable({ providedIn: 'root' })
export class GeoiconsLicenseService {
  private readonly _status = new BehaviorSubject<LicenseStatus>('unverified');
  /** Emits the status now and on every change. */
  readonly status$: Observable<LicenseStatus> = this._status.asObservable();
  /** The current status, read synchronously. */
  get status(): LicenseStatus {
    return this._status.value;
  }
  /** @internal — set by the provider once verification resolves. */
  _set(status: LicenseStatus): void {
    this._status.next(status);
  }
}

/**
 * Register GeoIcons licensing in a standalone app. Add to `app.config.ts` (or `main.ts`):
 *
 * ```ts
 * import { provideGeoiconsLicense } from '@geoicons/angular';
 *
 * export const appConfig: ApplicationConfig = {
 *   providers: [provideGeoiconsLicense('YOUR_KEY')],
 * };
 * ```
 *
 * Verifies the key offline and emits a one-time console notice if unlicensed. Verification
 * runs client-side only (native Web Crypto) — it is skipped during SSR so Angular Universal
 * never throws. Never blocks bootstrap. Does NOT change how icons render; icons do not
 * depend on this provider, so tree-shaking is unaffected.
 *
 * @param licenseKey Your commercial license key, or the GPL declaration string. Omit for
 *                   open-source/eval use.
 */
export function provideGeoiconsLicense(licenseKey?: string): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const platformId = inject(PLATFORM_ID);
        const service = inject(GeoiconsLicenseService);
        // Register synchronously (bootstrap runs before any icon renders) so the icon-level
        // nudge knows a provider exists and stays quiet, even while verify is in flight.
        markProviderPresent();
        return () => {
          // Fire-and-forget: never block bootstrap on verification. Client-only — Web Crypto
          // is skipped during SSR so Angular Universal never throws.
          if (!isPlatformBrowser(platformId)) return;
          resolveStatus(licenseKey)
            .then((status) => {
              service._set(status);
              if (status !== 'commercial' && status !== 'gpl') warnUnlicensed();
            })
            .catch(() => {
              // verifyLicenseKey is fully guarded and never rejects today, but stay
              // defensive: an unexpected failure resolves to unlicensed, not a crash.
              warnUnlicensed();
            });
        };
      },
    },
  ]);
}
