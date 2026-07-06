// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import {
  type App,
  type InjectionKey,
  type Ref,
  inject,
  ref,
} from 'vue';
import {
  verifyLicenseKey,
  GPL_DECLARATION,
  markProviderPresent,
  warnUnlicensed,
  type LicenseStatus,
} from '@geoicons/core';

/**
 * Vue license layer for GeoIcons. The actual verification (offline ES256, native Web
 * Crypto) lives in the framework-agnostic @geoicons/core; this is just the Vue wrapper.
 *
 * - NOT a lock: enforcement is legal (GPLv3 + commercial). An unverified state only emits a
 *   one-time console warning — icons always render normally, no watermark.
 * - Icons do NOT depend on this plugin, so tree-shaking is unaffected.
 * - See docs/business-architecture.md for the full model.
 */

// Re-export the core license API so consumers keep importing it from '@geoicons/vue'.
export { verifyLicenseKey, GPL_DECLARATION, type LicenseStatus } from '@geoicons/core';

const LICENSE_KEY: InjectionKey<Ref<LicenseStatus>> = Symbol('geoicons-license');

/** Resolve the license state from a provided key (or lack thereof). */
async function resolveStatus(licenseKey?: string): Promise<LicenseStatus> {
  if (!licenseKey) return 'unverified';
  if (licenseKey === GPL_DECLARATION) return 'gpl';
  return verifyLicenseKey(licenseKey);
}

// ─── plugin + composable ─────────────────────────────────────────────────────

export interface GeoiconsPluginOptions {
  /** Your commercial license key, or the GPL declaration string. Omit for open-source/eval. */
  licenseKey?: string;
}

/**
 * Install once with `app.use(GeoiconsLicense, { licenseKey })`. Verifies the license offline
 * and emits a one-time console notice if unlicensed. Does NOT affect how icons render. Icons
 * do not depend on this plugin, so tree-shaking is unaffected.
 */
export const GeoiconsLicense = {
  install(app: App, options: GeoiconsPluginOptions = {}) {
    // Register synchronously (install runs before any icon renders) so the icon-level
    // notice knows a provider exists and stays quiet, even while verify is in flight.
    markProviderPresent();
    const status = ref<LicenseStatus>('unverified');
    resolveStatus(options.licenseKey)
      .then((s) => {
        status.value = s;
        if (s !== 'commercial' && s !== 'gpl') warnUnlicensed();
      })
      .catch(() => {
        // Verification never rejects today (verifyLicenseKey is fully guarded),
        // but stay defensive: an unexpected failure resolves to unlicensed, not a
        // crash — icons render regardless of license state.
        warnUnlicensed();
      });
    app.provide(LICENSE_KEY, status);
  },
};

/**
 * Read the current license status as a reactive ref (e.g. to show a "licensed" badge in
 * your own UI). Returns `unverified` when the plugin is not installed.
 */
export function useGeoiconsLicense(): Ref<LicenseStatus> {
  return inject(LICENSE_KEY, ref<LicenseStatus>('unverified'));
}
