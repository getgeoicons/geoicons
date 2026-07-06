# @geoicons/vue

**Geographic map icons as tree-shakeable Vue 3 components.** Fully customizable stroke width and color — icons inherit `currentColor` by default, so they adapt to your text color out of the box.

> ⚖️ **Dual-licensed: GPLv3 _or_ Commercial.**
> Free to use in open-source projects under **GPL-3.0-only** (your project must also be GPL).
> Building something **closed-source / proprietary / commercial**? You need a **commercial license** → **[geoicons.io](https://geoicons.io)**.

---

## Install

```bash
npm install @geoicons/vue
```

Requires **Vue 3** (3.0+). On **Vue 3.5+** it uses the built-in `useId()` for stable, SSR-safe, cross-app-unique ids; on 3.0–3.4 it falls back automatically to a per-instance id (only the optional `aria-label` `<title>` id relies on this).

## Use

```vue
<script setup lang="ts">
import { Us, Jp } from '@geoicons/vue/countries';
</script>

<template>
  <Us :size="48" />
  <Jp :size="48" :stroke-width="0.5" class="text-blue-600" />
</template>
```

No config, no CSS import. Icons inherit `currentColor` by default.

## Props

| Prop           | Type               | Default          | Notes                                                          |
| -------------- | ------------------ | ---------------- | -------------------------------------------------------------- |
| `size`         | `number \| string` | `24`             | Convenience prop — sets both `width` and `height`              |
| `strokeWidth`  | `number`           | `1`              | Stroke width in SVG units; scale up with icon size            |
| `stroke`       | `string`           | `'currentColor'` | Native SVG attr — outline color; any CSS color value          |
| `fill`         | `string`           | `'none'`         | Native SVG attr — pass `fill="currentColor"` for a solid shape |
| `aria-label`   | `string`           | —                | Makes the icon meaningful to screen readers (see below)        |
| `class`        | `string`           | —                | Forwarded to `<svg>`                                           |
| …rest          | SVG attributes     | —                | `style`, `@click`, `data-*`, etc. — forwarded via attr fallthrough |

Only `size` and `strokeWidth` are declared props; `stroke`, `fill`, and everything else fall through straight to the underlying `<svg>`.

### Scaling stroke width

As icons grow, the default stroke width of `1` may look too thin:

```vue
<Us :size="24" />                          <!-- 1px stroke — default -->
<Us :size="48" :stroke-width="1.5" />      <!-- scale up proportionally -->
<Us :size="96" :stroke-width="2" />
```

### Custom color

```vue
<Us stroke="#3b82f6" />           <!-- hex -->
<Us stroke="oklch(60% .2 250)" /> <!-- any CSS color -->
<Us class="text-red-500" />       <!-- or inherit via currentColor -->
```

### Filled shape

Pass `fill` for a solid icon. The same-color outline keeps it solid, so
`stroke-width="0"` is optional — add it for a bare silhouette or a different
fill color:

```vue
<Us fill="currentColor" />
<Us fill="#3b82f6" :stroke-width="0" />
```

## Naming & imports

Icons are named from **ISO 3166-1 alpha-2** codes (PascalCase): `us` → `Us`, `jp` → `Jp`, `au-mainland` → `AuMainland`. Areas use slug PascalCase: `africa` → `Africa`.

```ts
// Country icons (base representation):
import { Us, Jp } from '@geoicons/vue/countries';

// Areas — continents, regions, blocs, landforms:
import { Africa, Eu } from '@geoicons/vue/areas';
```

## Accessibility

Icons default to **decorative** mode (`aria-hidden="true"`), which removes them from the accessibility tree when adjacent text already provides the label.

Pass `aria-label` to make an icon **meaningful** — it will get `role="img"`, a `<title>` element, and `aria-labelledby` automatically:

```vue
<!-- Decorative — screen readers skip this -->
<Us :size="32" />

<!-- Meaningful — screen readers announce "United States" -->
<Us :size="32" aria-label="United States" />
```

## Tree-shaking

Each icon is an individual named export, so `import { Us, Jp }` ships **only those two** — never the whole catalog. The package is `"sideEffects": false`.

## License & the `GeoiconsLicense` plugin

GeoIcons is **dual-licensed: GPL-3.0-only or Commercial** (see [`LICENSE`](./LICENSE) and [`COMMERCIAL-LICENSE.md`](./COMMERCIAL-LICENSE.md)).

Icons render the same regardless of license, always — no watermark, no lock. If a project uses the icons without a confirmed license, a **single** console notice appears once per session (client-side) nudging toward GPLv3 compliance or a commercial key. The `GeoiconsLicense` plugin is the **optional** install that verifies your license **fully offline** (no network, no tracking); installing it with a valid commercial key or the GPL declaration **silences** the notice. It never changes how icons look.

**Commercial use** — install the plugin once with your purchased key:

```ts
import { createApp } from 'vue';
import { GeoiconsLicense } from '@geoicons/vue';
import App from './App.vue';

createApp(App)
  .use(GeoiconsLicense, { licenseKey: import.meta.env.VITE_GEOICONS_KEY })
  .mount('#app');
```

**Open-source use** — declare GPL compliance to silence the notice:

```ts
app.use(GeoiconsLicense, { licenseKey: 'GPL-MY-PROJECT-IS-OPEN-SOURCE' });
```

> Building closed-source/commercial? Get a license at **[geoicons.io](https://geoicons.io)**. Using these icons in a proprietary app without a commercial license violates the GPLv3.

Optional composable to read license status (reactive) in your own UI:

```ts
import { useGeoiconsLicense } from '@geoicons/vue';
const status = useGeoiconsLicense(); // Ref<'commercial' | 'gpl' | 'unverified' | 'invalid'>
```
