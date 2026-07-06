// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io

import {
  verifyLicenseKey,
  GPL_DECLARATION,
  markProviderPresent,
  warnUnlicensed,
  type LicenseStatus,
} from '@geoicons/core';

/**
 * Vanilla license layer for GeoIcons. The actual verification (offline ES256,
 * native Web Crypto) lives in the framework-agnostic @geoicons/core; this is the
 * thin vanilla wrapper — the analogue of React's <IconProvider> / Vue's
 * GeoiconsLicense plugin.
 *
 * - NOT a lock: enforcement is legal (GPLv3 + commercial). An unverified state
 *   only emits a one-time console warning — icons always render normally.
 * - Icons do NOT depend on this, so tree-shaking is unaffected.
 * - See docs/business-architecture.md for the full model.
 */

// Re-export the core license API so consumers can import it from '@geoicons/vanilla'.
export { verifyLicenseKey, GPL_DECLARATION, type LicenseStatus } from '@geoicons/core';

/**
 * Register the license once (call before creating icons). Verifies offline and
 * emits a one-time console notice if unlicensed. Resolves with the status so you
 * can reflect it in your own UI. Omit the key for open-source/eval.
 *
 *   import { initGeoiconsLicense } from '@geoicons/vanilla';
 *   initGeoiconsLicense('YOUR_COMMERCIAL_KEY');
 */
export async function initGeoiconsLicense(licenseKey?: string): Promise<LicenseStatus> {
  // Register synchronously so the icon-level nudge knows a provider exists and
  // stays quiet, even while the async verify below is still in flight.
  markProviderPresent();

  let status: LicenseStatus;
  if (!licenseKey) status = 'unverified';
  else if (licenseKey === GPL_DECLARATION) status = 'gpl';
  else status = await verifyLicenseKey(licenseKey);

  if (status !== 'commercial' && status !== 'gpl') warnUnlicensed();
  return status;
}
