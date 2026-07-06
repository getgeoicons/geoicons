// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import {
  verifyLicenseKey,
  GPL_DECLARATION,
  markProviderPresent,
  warnUnlicensed,
  type LicenseStatus,
} from '@geoicons/core';

/**
 * React license layer for GeoIcons. The actual verification (offline ES256, native Web
 * Crypto) lives in the framework-agnostic @geoicons/core; this is just the React wrapper.
 *
 * - NOT a lock: enforcement is legal (GPLv3 + commercial). An unverified state only emits a
 *   one-time console warning — icons always render normally, no watermark.
 * - Icons do NOT depend on this provider, so tree-shaking is unaffected.
 * - See docs/business-architecture.md for the full model.
 */

// Re-export the core license API so consumers keep importing it from '@geoicons/react'.
export { verifyLicenseKey, GPL_DECLARATION, type LicenseStatus } from '@geoicons/core';

interface LicenseState {
  status: LicenseStatus;
}

const LicenseContext = createContext<LicenseState>({ status: 'unverified' });

/** Resolve the license state from a provided key (or lack thereof). */
async function resolveStatus(licenseKey?: string): Promise<LicenseStatus> {
  if (!licenseKey) return 'unverified';
  if (licenseKey === GPL_DECLARATION) return 'gpl';
  return verifyLicenseKey(licenseKey);
}

// ─── provider + hook ─────────────────────────────────────────────────────────

export interface IconProviderProps {
  /** Your commercial license key, or the GPL declaration string. Omit for open-source/eval. */
  licenseKey?: string;
  children: ReactNode;
}

/**
 * Wrap your app once. Verifies the license offline and emits a one-time console notice
 * if unlicensed. Does NOT affect how icons render. Icons do not depend on this provider,
 * so tree-shaking is unaffected.
 */
export function IconProvider({ licenseKey, children }: IconProviderProps) {
  const [state, setState] = useState<LicenseState>({ status: 'unverified' });

  useEffect(() => {
    // Register synchronously-as-possible so the icon-level notice knows a provider exists
    // and stays quiet — even while the async verify below is still in flight.
    markProviderPresent();
    let active = true;
    resolveStatus(licenseKey).then((status) => {
      if (!active) return;
      setState({ status });
      if (status !== 'commercial' && status !== 'gpl') warnUnlicensed();
    });
    return () => {
      active = false;
    };
  }, [licenseKey]);

  return <LicenseContext.Provider value={state}>{children}</LicenseContext.Provider>;
}

/** Read the current license status (e.g. to show a "licensed" badge in your own UI). */
export function useGeoiconsLicense(): LicenseStatus {
  return useContext(LicenseContext).status;
}
