<div align="center">

# GeoIcons

**Premium geographic map icons — 422 countries, territories & world areas — as tree-shakeable components for React, Vue, Angular, and vanilla JS.**

[geoicons.io](https://geoicons.io) · [Browse the catalog](https://geoicons.io/icons) · [Docs](https://geoicons.io/docs) · [Pricing](https://geoicons.io/pricing)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](./LICENSE)
[![Commercial license available](https://img.shields.io/badge/License-Commercial-brightgreen.svg)](./COMMERCIAL-LICENSE.md)

</div>

---

## ⚖️ Dual-licensed: GPLv3 **or** Commercial

GeoIcons is free and open-source under the **GNU GPLv3** — **or** available under a **Commercial license** for closed-source use. You pick the one that fits.

|                       | **GPLv3 (free)**                                          | **Commercial (paid)**                                           |
| --------------------- | --------------------------------------------------------- | --------------------------------------------------------------- |
| Cost                  | Free                                                      | One-time or annual — see [pricing](https://geoicons.io/pricing) |
| Your project must be… | Open-source under a **GPL-compatible** license (copyleft) | **Anything** — closed-source, proprietary, SaaS                 |
| Best for              | OSS projects, learning, prototypes                        | Commercial products, client work, internal apps                 |
| Terms                 | [`LICENSE`](./LICENSE)                                    | [`COMMERCIAL-LICENSE.md`](./COMMERCIAL-LICENSE.md)              |

**In plain terms:** using GeoIcons under the free tier means the GPLv3 applies to _your_ project too — it must be open-source. If your app is closed-source, proprietary, or commercial, you need a **[commercial license](https://geoicons.io/pricing)**. Using the icons in a proprietary app without one violates the GPLv3.

> Enforcement is **legal, not technical.** Icons always render the same — **no watermark, no lock, no network call.** The only nudge is a single client-side `console.warn` per session when no license is declared. See [License & compliance](#license--compliance) below.

---

## Packages

Each framework is a separate, independently versioned package. Install only what you use.

| Package                                   | Framework                                                 | Peer requirement        |
| ----------------------------------------- | --------------------------------------------------------- | ----------------------- |
| [`@geoicons/react`](./packages/react)     | React                                                     | `react >= 18`           |
| [`@geoicons/vue`](./packages/vue)         | Vue                                                       | `vue >= 3.0`            |
| [`@geoicons/angular`](./packages/angular) | Angular                                                   | `@angular/core >= 15.1` |
| [`@geoicons/vanilla`](./packages/vanilla) | Framework-free (DOM)                                      | none                    |
| [`@geoicons/core`](./packages/core)       | Shared offline license verifier (dependency of the above) | none                    |

## Quick start (React)

```bash
npm install @geoicons/react
```

```tsx
import { Us, Jp } from '@geoicons/react/countries';

export function Example() {
  return (
    <>
      <Us size={48} />
      <Jp size={48} strokeWidth={0.5} className="text-blue-600" />
    </>
  );
}
```

No config, no CSS import — icons inherit `currentColor`. Full per-framework usage lives in each package README and at [geoicons.io/docs](https://geoicons.io/docs).

## Why GeoIcons

- **422 icons** — every country & territory (ISO 3166-1) plus continents, sub-regions, blocs, peninsulas, deserts, basins, and seas. The catalog keeps growing.
- **Tree-shakeable** — every icon is its own named export. `import { Us, Jp }` ships _only_ those two, never the whole set. All packages are `"sideEffects": false`.
- **Styleable** — one consistent 24×24 outline system. Set `size` and `strokeWidth`; color via native `stroke`/`fill` (themes through `currentColor`).
- **Accessible by default** — decorative (`aria-hidden`) unless you pass an `aria-label`, which switches to `role="img"` + `<title>`.
- **Zero runtime deps** — offline ES256 license verification via native Web Crypto.

## License & compliance

Icons render identically no matter your license state. If a project uses them without a declared license, **one** `console.warn` fires per session (client-side only) nudging toward GPLv3 compliance or a commercial key. The optional provider verifies your license **fully offline** and silences the notice:

```tsx
// Commercial — wrap once with your purchased key
<IconProvider licenseKey={process.env.NEXT_PUBLIC_GEOICONS_KEY}>…</IconProvider>

// Open-source — declare GPL compliance
<IconProvider licenseKey="GPL-MY-PROJECT-IS-OPEN-SOURCE">…</IconProvider>
```

Vue exposes the `GeoiconsLicense` plugin, Angular `provideGeoiconsLicense()`, and vanilla `initGeoiconsLicense()` — same offline check. See each package README.

## Contributing

Code PRs are **not** accepted (this is a published mirror of a dual-licensed project). **Issues are open** — [report a bug or request an icon/country](https://github.com/getgeoicons/geoicons/issues). See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Security

Found a vulnerability? Please **don't** open a public issue — see [`SECURITY.md`](./SECURITY.md).

---

<div align="center">

**GeoIcons** · [geoicons.io](https://geoicons.io) · Dual-licensed [GPLv3](./LICENSE) or [Commercial](./COMMERCIAL-LICENSE.md)

</div>
