# @geoicons/vanilla

[![npm version](https://img.shields.io/npm/v/@geoicons/vanilla.svg)](https://www.npmjs.com/package/@geoicons/vanilla)
[![license](https://img.shields.io/npm/l/@geoicons/vanilla.svg)](./LICENSE)
[![tree-shakable](https://img.shields.io/badge/tree--shakable-yes-brightgreen.svg)](#tree-shaking)

**422 geographic map icons as tree-shakable vanilla-JS components** - 255 countries + 167 areas (continents, regions, blocs, landforms). Fully customizable stroke width and color via CSS; icons inherit `currentColor` by default, so they adapt to your text color out of the box.

> ⚖️ **Dual-licensed: GPLv3 _or_ Commercial.**
> Free to use in open-source projects under **GPL-3.0-only** (your project must also be GPL).
> Building something **closed-source / proprietary / commercial**? You need a **commercial license** → **[geoicons.io](https://geoicons.io)**.

---

## Install

```bash
npm install @geoicons/vanilla
```

Browser only - it builds real DOM nodes, so it needs `document`.

## Use

Mark up placeholders with `data-geoicon="<code>"`, then register the icons you use:

```html
<i data-geoicon="us" class="flag"></i>
<i data-geoicon="jp" class="flag" aria-label="Japan"></i>
<nav><i data-geoicon="africa"></i></nav>
```

```js
import { createGeoIcons, Us, Jp } from '@geoicons/vanilla/countries';
import { Africa } from '@geoicons/vanilla/areas';

createGeoIcons({ us: Us, jp: Jp, africa: Africa });
```

Each `<i data-geoicon="us">` is replaced by that icon's `<svg>`. Elements whose key you didn't register are left untouched. Call `createGeoIcons` again after injecting new DOM (SPA route change, htmx swap) to hydrate fresh nodes. Options: `createGeoIcons(icons, { attr: 'data-geoicon', root: document })`.

`data-geoicon` is the **only** data attribute - it names the icon. `aria-label` and `class` on the placeholder are carried onto the `<svg>`.

### Why the import map

The `{ us: Us }` map is what keeps the package tree-shakable: because you statically `import { Us }`, the bundler ships only that icon. HTML attributes are invisible to bundlers, so an icon you reference in markup but never register simply won't render - which is exactly what stops the whole 422-icon catalog from being pulled in. (This is the deliberate difference from Lucide's zero-argument `createIcons()`, which reaches into a full internal registry.)

## Styling - all CSS

Icons render at a `24px` default, `stroke-width` `1`, `stroke="currentColor"`, `fill="none"`. Every one of those is a CSS-settable SVG presentation attribute, and **CSS wins over them**, so a class (or any selector) fully controls appearance:

```css
.flag {
  width: 32px;
  height: 32px;
  color: #4f46e5;    /* stroke follows currentColor */
  stroke-width: 1.5;
}
.flag:hover { color: crimson; }

/* filled shape */
.solid { fill: currentColor; }
```

| Want to change | CSS property                             |
| -------------- | ---------------------------------------- |
| size           | `width` / `height`                       |
| color          | `color` (via `currentColor`) or `stroke` |
| stroke weight  | `stroke-width`                           |
| fill           | `fill`                                   |

## Naming & imports

Icons are named from **ISO 3166-1 alpha-2** codes (PascalCase): `us` → `Us`, `jp` → `Jp`, `au-mainland` → `AuMainland`. Areas use slug PascalCase: `africa` → `Africa`, `european-union-eu` → `EuropeanUnionEu`. The `data-geoicon` key is whatever string you map to the factory (the lowercase code reads naturally: `data-geoicon="us"` → `{ us: Us }`).

```js
// Country icons:
import { Us, Jp, Fr } from '@geoicons/vanilla/countries';

// Areas - continents, regions, blocs, landforms:
import { Africa, Asia, Europe, EuropeanUnionEu } from '@geoicons/vanilla/areas';
```

## Accessibility

Icons are **decorative by default** (`aria-hidden="true"`). Add `aria-label` to the placeholder to make one meaningful - the `<svg>` gets `role="img"`, a `<title>`, and `aria-labelledby` automatically:

```html
<i data-geoicon="us"></i>                             <!-- decorative -->
<i data-geoicon="us" aria-label="United States"></i>  <!-- announced -->
```

## Tree-shaking

Each icon is an individual named export, so registering `{ us: Us, jp: Jp }` ships **only those two** - never the whole catalog. The package is `"sideEffects": false`, and `createGeoIcons` holds no icon references of its own.

## License & `initGeoiconsLicense`

GeoIcons is **dual-licensed: GPL-3.0-only or Commercial** (see [`LICENSE`](./LICENSE) and [`COMMERCIAL-LICENSE.md`](./COMMERCIAL-LICENSE.md)).

Icons render the same regardless of license, always - no watermark, no lock. If a project uses the icons without a confirmed license, a **single** console notice appears once per session (client-side) nudging toward GPLv3 compliance or a commercial key. `initGeoiconsLicense` is the **optional** call that verifies your license **fully offline** (no network, no tracking); calling it with a valid commercial key or the GPL declaration **silences** the notice. It never changes how icons look.

**Commercial use** - register once with your purchased key:

```js
import { initGeoiconsLicense } from '@geoicons/vanilla';

initGeoiconsLicense('YOUR_COMMERCIAL_KEY');
```

**Open-source use** - declare GPL compliance to silence the notice:

```js
initGeoiconsLicense('GPL-MY-PROJECT-IS-OPEN-SOURCE');
```

> Building closed-source/commercial? Get a license at **[geoicons.io](https://geoicons.io)**. Using these icons in a proprietary app without a commercial license violates the GPLv3.

`initGeoiconsLicense` resolves with the status (`'commercial' | 'gpl' | 'unverified' | 'invalid'`) so you can reflect it in your own UI.

---

GeoIcons · [geoicons.io](https://geoicons.io) · `@geoicons/vanilla`
