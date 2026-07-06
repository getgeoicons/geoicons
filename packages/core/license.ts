// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io

/**
 * Framework-agnostic offline license verification for GeoIcons.
 *
 * - NO network: verifies an ES256 signature against the embedded PUBLIC key via native
 *   Web Crypto. Never contacts a server (works in CI/airgapped, no uptime dependency).
 * - NOT a lock: enforcement is legal (GPLv3 + commercial). Framework packages use this to
 *   emit a one-time console notice when unlicensed — icons always render normally.
 * - This module is pure: no React/Vue/Angular, no DOM beyond Web Crypto. Every framework
 *   wrapper (IconProvider, Vue plugin, …) builds on top of it.
 * - See docs/business-architecture.md for the full model.
 */

import { PUBLIC_KEY_JWK } from './_public-key';

/** Open-source projects declare GPL compliance with this exact string (FullCalendar precedent). */
export const GPL_DECLARATION = 'GPL-MY-PROJECT-IS-OPEN-SOURCE';

/**
 * The license key is a **permanent proof of purchase** — pasted once, never swapped. It is
 * not time- or version-locked: a valid signature means licensed, forever. Renewal (annual
 * plans) is handled by email + license terms, not at runtime.
 */
export type LicenseStatus =
  | 'commercial' // valid signed key → licensed, quiet
  | 'gpl' // valid GPL declaration → licensed under copyleft, quiet
  | 'unverified' // no key provided
  | 'invalid'; // key present but signature/format invalid

function base64UrlToBytes(input: string): Uint8Array {
  let s = input.replace(/-/g, '+').replace(/_/g, '/');
  const pad = s.length % 4;
  if (pad) s += '='.repeat(4 - pad);
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

/**
 * Verify a commercial license key fully offline.
 * A valid ES256 signature against the embedded public key → 'commercial'; otherwise 'invalid'.
 * There is no time/version check — the key is a permanent proof of purchase.
 */
export async function verifyLicenseKey(licenseKey: string): Promise<LicenseStatus> {
  const parts = licenseKey.split('.');
  if (parts.length !== 3) return 'invalid';
  const [header, payload, signature] = parts;

  try {
    const key = await crypto.subtle.importKey(
      'jwk',
      PUBLIC_KEY_JWK,
      { name: 'ECDSA', namedCurve: 'P-256' },
      false,
      ['verify'],
    );

    const signingInput = new TextEncoder().encode(`${header}.${payload}`);
    const sig = base64UrlToBytes(signature);

    const valid = await crypto.subtle.verify(
      { name: 'ECDSA', hash: 'SHA-256' },
      key,
      sig as BufferSource,
      signingInput as BufferSource,
    );
    if (!valid) return 'invalid';

    // Confirm the payload is well-formed JSON (defensive); claims themselves aren't gated on.
    JSON.parse(new TextDecoder().decode(base64UrlToBytes(payload)));
    return 'commercial';
  } catch {
    return 'invalid';
  }
}
