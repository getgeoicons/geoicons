// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io

/**
 * Shared, framework-agnostic compliance notice for GeoIcons.
 *
 * Two independent signals keep enforcement honest without a technical lock:
 *
 *   1. A framework provider/plugin (IconProvider / GeoiconsLicense) mounts and calls
 *      `markProviderPresent()` synchronously — before any icon renders.
 *   2. Each generated icon calls `noteIconRender()` on mount.
 *
 * If icons render but no provider ever mounted, we emit ONE console warning nudging the
 * user toward GPLv3 compliance or a commercial license. This closes the gap where a
 * consumer skips the provider entirely and never sees the notice.
 *
 * Deliberately NOT a lock:
 *   - `console.warn` only — no throw, no watermark, no render change. Icons always render.
 *   - Fires at most once per session (shared `warned` flag, also used by the providers so
 *     an unlicensed provider and the icons never double-warn).
 *   - Client-only + deferred, so it can never block paint or bleed onto the SSR render path.
 *
 * See docs/business-architecture.md for the full (legal, not technical) model.
 */

let providerPresent = false;
let warned = false;
let scheduled = false;

/** A framework provider/plugin mounted. Suppresses the icon-level "no provider" nudge. */
export function markProviderPresent(): void {
  providerPresent = true;
}

/**
 * Emit the one-time compliance notice. Shared by the framework providers (when a key is
 * missing/invalid) and by `noteIconRender` (when no provider mounted at all), so at most
 * one warning is ever logged per session.
 */
export function warnUnlicensed(): void {
  if (warned) return;
  warned = true;
  console.warn(
    '[geoicons] No valid license key found. These icons are GPLv3 — your project must ' +
      'also be open-sourced under GPLv3. For closed-source/commercial use, a commercial ' +
      'license is required: https://geoicons.io',
  );
}

/**
 * Called by every generated icon on mount. If no provider registers within the current tick,
 * emit the compliance notice. Client-only and deferred: a provider mounting in the same tick
 * (its effect / plugin install) wins the race and suppresses the warning.
 */
export function noteIconRender(): void {
  // Client-only nudge: skip SSR (module state is per-process and would bleed across
  // requests on a long-lived server; the browser is where the dev actually sees it).
  if (typeof window === 'undefined') return;
  if (providerPresent || warned || scheduled) return;
  scheduled = true;
  // Defer so a provider mounting in the same tick can call markProviderPresent() first.
  setTimeout(() => {
    if (!providerPresent) warnUnlicensed();
  }, 0);
}
