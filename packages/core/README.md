# @geoicons/core

[![npm version](https://img.shields.io/npm/v/@geoicons/core.svg)](https://www.npmjs.com/package/@geoicons/core)
[![license](https://img.shields.io/npm/l/@geoicons/core.svg)](./LICENSE)
[![zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

Framework-agnostic core for [GeoIcons](https://geoicons.io). Ships the **offline ES256 license verifier** and the embedded **public key** shared by every framework package - [`@geoicons/react`](https://www.npmjs.com/package/@geoicons/react), [`@geoicons/vue`](https://www.npmjs.com/package/@geoicons/vue), [`@geoicons/angular`](https://www.npmjs.com/package/@geoicons/angular), and [`@geoicons/vanilla`](https://www.npmjs.com/package/@geoicons/vanilla).

> ⚖️ **Dual-licensed: GPLv3 _or_ Commercial.** See [`LICENSE`](./LICENSE) and [`COMMERCIAL-LICENSE.md`](./COMMERCIAL-LICENSE.md). Commercial licenses: **[geoicons.io](https://geoicons.io)**.

---

## Do you need this?

Usually **no** - your framework package depends on it and re-exports what you need. It's published separately so the verifier and public key live in exactly one place. Install it directly only if you're building your own integration or want to verify a key outside of a UI.

```bash
npm install @geoicons/core
```

Pure, zero-dependency, native Web Crypto. Works in the browser and in any modern runtime with `crypto.subtle`.

## API

```ts
import { verifyLicenseKey, GPL_DECLARATION, PUBLIC_KEY_JWK } from '@geoicons/core';

const status = await verifyLicenseKey(key); // 'commercial' | 'invalid'  (offline, no network)
```

| Export | Type | Purpose |
| --- | --- | --- |
| `verifyLicenseKey(key)` | `(key: string) => Promise<LicenseStatus>` | Offline ES256 signature check against the embedded public key. Returns `'commercial'` for a valid key, `'gpl'` for the declaration, or `'invalid'`. |
| `GPL_DECLARATION` | `string` | The open-source declaration string (`GPL-MY-PROJECT-IS-OPEN-SOURCE`). |
| `LicenseStatus` | `type` | `'commercial' \| 'gpl' \| 'unverified' \| 'invalid'`. |
| `PUBLIC_KEY_JWK` | `JsonWebKey` | The verify-only public key. Safe to ship - it cannot sign. |

## How verification works

Verification is a **legal nudge, not a lock**. Icons always render - there is no watermark, no network call, and no runtime gate. A single console notice appears once per session when no license is confirmed, pointing to GPLv3 compliance or a commercial key. Confirming a license (via your framework's provider/plugin) silences it.

The verifier checks an ES256 signature entirely offline against the embedded public key. No data leaves the client; there is no telemetry.

---

GeoIcons · [geoicons.io](https://geoicons.io) · `@geoicons/core`
