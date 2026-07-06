# @geoicons/react

**Geographic map icons as tree-shakeable React components.** Fully customizable stroke width and color via props — icons inherit `currentColor` by default, so they adapt to your text color out of the box.

> ⚖️ **Dual-licensed: GPLv3 _or_ Commercial.**
> Free to use in open-source projects under **GPL-3.0-only** (your project must also be GPL).
> Building something **closed-source / proprietary / commercial**? You need a **commercial license** → **[geoicons.io](https://geoicons.io)**.

---

## Install

```bash
npm install @geoicons/react
```

## Use

```tsx
import { Us, Jp } from '@geoicons/react/countries';

export function Example() {
  return (
    <div>
      <Us size={48} />
      <Jp size={48} strokeWidth={0.5} className="text-blue-600" />
    </div>
  );
}
```

No config, no CSS import. Icons inherit `currentColor` by default.

## Props

| Prop          | Type                      | Default          | Notes                                                   |
| ------------- | ------------------------- | ---------------- | ------------------------------------------------------- |
| `size`        | `number \| string`        | `24`             | Convenience prop — sets both `width` and `height`       |
| `strokeWidth` | `number`                  | `1`              | Stroke width in SVG units; scale up with icon size      |
| `stroke`      | `string`                  | `'currentColor'` | Native SVG attr — outline color; any CSS color value    |
| `fill`        | `string`                  | `'none'`         | Native SVG attr — pass `fill="currentColor"` for a solid shape |
| `aria-label`  | `string`                  | —                | Makes the icon meaningful to screen readers (see below) |
| `className`   | `string`                  | —                | Forwarded to `<svg>`                                    |
| …rest         | `SVGProps<SVGSVGElement>`  | —                | `style`, `onClick`, `data-*`, etc.                      |

Only `size` and `strokeWidth` are convenience props; `stroke`, `fill`, and everything else forward straight to the underlying `<svg>`.

### Scaling stroke width

As icons grow, the default stroke width of `1` may look too thin. A good rule of thumb:

```tsx
<Us size={24} />                        {/* 1px stroke — default */}
<Us size={48} strokeWidth={1.5} />      {/* scale up proportionally */}
<Us size={96} strokeWidth={2} />
```

### Custom color

```tsx
<Us stroke="#3b82f6" />          {/* hex */}
<Us stroke="oklch(60% .2 250)" /> {/* any CSS color */}
<Us className="text-red-500" />  {/* or inherit via currentColor */}
```

### Filled shape

Pass `fill` for a solid icon. The same-color outline keeps it solid, so
`strokeWidth={0}` is optional — add it for a bare silhouette or a different
fill color:

```tsx
<Us fill="currentColor" />
<Us fill="#3b82f6" strokeWidth={0} />
```

## Naming & imports

Icons are named from **ISO 3166-1 alpha-2** codes (PascalCase): `us` → `Us`, `jp` → `Jp`, `au-mainland` → `AuMainland`.

```tsx
// Country icons (base representation):
import { Us, Jp } from '@geoicons/react/countries';

// EEZ (maritime-boundary) variants live in their own entry:
import { Id } from '@geoicons/react/countries/eez';

// Same country from two representations — use ES6 aliasing:
import { Id as IdLand } from '@geoicons/react/countries';
import { Id as IdEez } from '@geoicons/react/countries/eez';
```

## Accessibility

Icons default to **decorative** mode (`aria-hidden="true"`), which removes them from the accessibility tree when adjacent text already provides the label.

Pass `aria-label` to make an icon **meaningful** — it will get `role="img"`, a `<title>` element, and `aria-labelledby` automatically:

```tsx
{/* Decorative — screen readers skip this */}
<Us size={32} />

{/* Meaningful — screen readers announce "United States" */}
<Us size={32} aria-label="United States" />
```

## Tree-shaking

Each icon is an individual named export, so `import { Us, Jp }` ships **only those two** — never the whole catalog. The package is `"sideEffects": false`.

## License & `<IconProvider>`

GeoIcons is **dual-licensed: GPL-3.0-only or Commercial** (see [`LICENSE`](./LICENSE) and [`COMMERCIAL-LICENSE.md`](./COMMERCIAL-LICENSE.md)).

Icons render the same regardless of license, always — no watermark, no lock. If a project uses the icons without a confirmed license, a **single** console notice appears once per session (client-side) nudging toward GPLv3 compliance or a commercial key. `<IconProvider>` is the **optional** wrapper that verifies your license **fully offline** (no network, no tracking); installing it with a valid commercial key or the GPL declaration **silences** the notice. It never changes how icons look.

**Commercial use** — wrap your app once with your purchased key:

```tsx
import { IconProvider } from '@geoicons/react';

export default function App() {
  return (
    <IconProvider licenseKey={process.env.NEXT_PUBLIC_GEOICONS_KEY}>
      <YourApp />
    </IconProvider>
  );
}
```

**Open-source use** — declare GPL compliance to silence the notice:

```tsx
<IconProvider licenseKey="GPL-MY-PROJECT-IS-OPEN-SOURCE">
  <YourApp />
</IconProvider>
```

> Building closed-source/commercial? Get a license at **[geoicons.io](https://geoicons.io)**. Using these icons in a proprietary app without a commercial license violates the GPLv3.

Optional hook to read license status in your own UI:

```tsx
import { useGeoiconsLicense } from '@geoicons/react';
const status = useGeoiconsLicense(); // 'commercial' | 'gpl' | 'unverified' | 'invalid'
```
