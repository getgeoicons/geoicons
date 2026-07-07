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
 * React license layer for GeoIcons.
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
  // Register during render — BEFORE children render and call noteIconRender(). React renders
  // a parent before its children, so this deterministically wins the race with the icon-level
  // notice. Doing this in useEffect (commit phase) is too late: icons render first, schedule
  // their deferred warning, and it can fire before the provider's passive effect flushes.
  // The lazy initializer runs it exactly once per mount (still during render), keeping the
  // ordering guarantee without repeating the (idempotent) call on every re-render.
  const [state, setState] = useState<LicenseState>(() => {
    markProviderPresent();
    return { status: 'unverified' };
  });

  useEffect(() => {
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
