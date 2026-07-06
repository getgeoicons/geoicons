# @geoicons/core

Framework-agnostic core for [GeoIcons](https://geoicons.io). Ships the **offline ES256 license verifier** and the embedded **public key** that every framework package (`@geoicons/react`, and Vue/Angular/Vanilla to come) builds on.

> ⚖️ **Dual-licensed: GPLv3 _or_ Commercial.** See [`LICENSE`](./LICENSE) and [`COMMERCIAL-LICENSE.md`](./COMMERCIAL-LICENSE.md). Commercial licenses: **[geoicons.io](https://geoicons.io)**.

You normally don't install this directly — your framework package depends on it. It's published separately so the verifier and public key live in exactly one place.

## API

```ts
import { verifyLicenseKey, GPL_DECLARATION, PUBLIC_KEY_JWK } from '@geoicons/core';

await verifyLicenseKey(key); // 'commercial' | 'invalid'  (offline, no network)
```

| Export | Purpose |
| --- | --- |
| `verifyLicenseKey(key)` | Offline ES256 signature check against the embedded public key. Returns `'commercial'` or `'invalid'`. |
| `GPL_DECLARATION` | The open-source bypass string (`GPL-MY-PROJECT-IS-OPEN-SOURCE`). |
| `LicenseStatus` | `'commercial' \| 'gpl' \| 'unverified' \| 'invalid'`. |
| `PUBLIC_KEY_JWK` | The verify-only public key (safe to ship; cannot sign). |

Pure, zero-dependency, native Web Crypto. Verification is a **legal nudge**, not a lock — icons always render. See `docs/business-architecture.md`.
