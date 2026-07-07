# @geoicons/angular

[![npm version](https://img.shields.io/npm/v/@geoicons/angular.svg)](https://www.npmjs.com/package/@geoicons/angular)
[![license](https://img.shields.io/npm/l/@geoicons/angular.svg)](./LICENSE)
[![tree-shakeable](https://img.shields.io/badge/tree--shakeable-yes-brightgreen.svg)](#tree-shaking)

**422 geographic map icons as tree-shakeable Angular standalone components** - 255 countries + 167 areas (continents, regions, blocs, landforms). Fully customizable stroke width and color via props; icons inherit `currentColor` by default, so they adapt to your text color out of the box.

> ⚖️ **Dual-licensed: GPLv3 _or_ Commercial.**
> Free to use in open-source projects under **GPL-3.0-only** (your project must also be GPL).
> Building something **closed-source / proprietary / commercial**? You need a **commercial license** → **[geoicons.io](https://geoicons.io)**.

---

## Install

```bash
npm install @geoicons/angular
```

Peer dependencies: **`@angular/core` / `@angular/common` >= 15.1** (standalone components + `hostDirectives`) and **`rxjs` >= 7**.

## Use

Each icon is a standalone component. Import the ones you use and add them to a component's `imports` - nothing else ships.

```ts
import { Component } from '@angular/core';
import { Us, Jp } from '@geoicons/angular/countries';
import { Africa } from '@geoicons/angular/areas';

@Component({
  selector: 'app-root',
  imports: [Us, Jp, Africa],
  template: `
    <geoicon-us [size]="48" />
    <geoicon-jp [size]="48" [strokeWidth]="0.5" class="text-blue-600" />
    <geoicon-africa [size]="48" />
  `,
})
export class App {}
```

Countries live under `@geoicons/angular/countries`; areas (continents, regions, blocs, landforms) under `@geoicons/angular/areas`.

## Props

Icons are 24×24, inherit color from CSS `color` (`currentColor`), and expose a small set of **explicit inputs** - Angular has no `{...rest}` spread, so styling props are surfaced deliberately:

| Input          | Type               | Default          | Notes                                                        |
| -------------- | ------------------ | ---------------- | ------------------------------------------------------------ |
| `size`         | `number \| string` | `24`             | Width & height (px or any CSS length).                       |
| `strokeWidth`  | `number \| string` | `1`              | SVG stroke width. `0` for a bare silhouette.                 |
| `stroke`       | `string`           | `'currentColor'` | Outline color.                                               |
| `fill`         | `string`           | `'none'`         | `'currentColor'` for a solid shape.                          |
| `aria-label`   | `string`           | -                | Omit → decorative (`aria-hidden`). Pass → `role="img"` + `<title>`. |

```html
<geoicon-us [stroke]="'#3b82f6'" />
<geoicon-us [fill]="'currentColor'" />
<geoicon-us class="text-red-500" />
```

Anything else - `class`, `style`, `data-*` - goes on the `<geoicon-*>` host element directly.

## Naming & imports

Icons are named from **ISO 3166-1 alpha-2** codes (PascalCase → component + `geoicon-*` selector): `us` → `Us` / `<geoicon-us>`, `au-mainland` → `AuMainland` / `<geoicon-au-mainland>`. Areas use slug PascalCase: `africa` → `Africa`, `european-union-eu` → `EuropeanUnionEu`.

```ts
import { Us, Jp, Fr } from '@geoicons/angular/countries';
import { Africa, Asia, Europe, EuropeanUnionEu } from '@geoicons/angular/areas';
```

## Accessibility

Decorative by default (`aria-hidden="true"`). Pass `aria-label` to switch the icon to `role="img"` with a `<title>`:

```html
<geoicon-us [size]="32" />
<geoicon-us [size]="32" aria-label="United States" />
```

## Tree-shaking

Each icon is an individual named export, so `import { Us, Jp }` ships **only those two** - never the whole catalog. The package is `"sideEffects": false`.

## License & the `provideGeoiconsLicense` provider

GeoIcons is **dual-licensed: GPL-3.0-only or Commercial** (see [`LICENSE`](./LICENSE) and [`COMMERCIAL-LICENSE.md`](./COMMERCIAL-LICENSE.md)).

Icons render the same regardless of license, always - no watermark, no lock. If a project uses the icons without a confirmed license, a **single** console notice appears once per session (client-side) nudging toward GPLv3 compliance or a commercial key. `provideGeoiconsLicense()` is the **optional** provider that verifies your license **fully offline** (no network, no tracking); registering it with a valid commercial key or the GPL declaration **silences** the notice. It never changes how icons look, and verification is client-only - skipped during SSR so Angular Universal never throws.

**Commercial use** - register once in `app.config.ts` with your purchased key:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideGeoiconsLicense } from '@geoicons/angular';

export const appConfig: ApplicationConfig = {
  providers: [provideGeoiconsLicense('YOUR_KEY')],
};
```

**Open-source use** - declare GPL compliance to silence the notice:

```ts
providers: [provideGeoiconsLicense('GPL-MY-PROJECT-IS-OPEN-SOURCE')];
```

> Building closed-source/commercial? Get a license at **[geoicons.io](https://geoicons.io)**. Using these icons in a proprietary app without a commercial license violates the GPLv3.

Optional service to read license status (reactive) in your own UI:

```ts
import { inject } from '@angular/core';
import { GeoiconsLicenseService } from '@geoicons/angular';

const license = inject(GeoiconsLicenseService);
license.status;  // 'commercial' | 'gpl' | 'unverified' | 'invalid'
license.status$; // Observable<LicenseStatus>
```

---

GeoIcons · [geoicons.io](https://geoicons.io) · `@geoicons/angular`
