// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io

/**
 * Opt-in DOM scanner — the `<i data-geoicon="us"></i>` ergonomics, kept
 * tree-shakable. Unlike Lucide's zero-arg `createIcons()` (which reaches into a
 * full internal registry and pulls the whole catalog), this helper holds NO icon
 * references itself: the caller supplies the `{ key → factory }` map from their
 * own named imports, so only the icons they wire can ever enter the bundle.
 *
 *   import { createGeoIcons, Us, Jp } from '@geoicons/vanilla/countries';
 *   createGeoIcons({ us: Us, jp: Jp });   // only Us + Jp bundled
 *
 * Elements whose key is not in the supplied map are left untouched.
 */

/** Any icon factory (the shape of the generated `Us`, `Jp`, … exports). */
export type IconFactory = (options?: Record<string, string | number | undefined>) => SVGSVGElement;

export interface CreateGeoIconsOptions {
  /** Attribute to scan for. Default `'data-geoicon'`. */
  attr?: string;
  /** Root to scan within. Default `document`. */
  root?: ParentNode;
}

/**
 * Replace every `[data-geoicon]` element within `root` with its icon <svg>.
 *
 * `data-geoicon` is the ONLY data attribute — it names the icon. Everything
 * visual is done in CSS: icons render at the default 24px / `strokeWidth` 1 /
 * `currentColor`, and CSS beats those presentation attributes, so a `class`
 * (copied through) or any selector fully controls `width`/`height`, `color` /
 * `stroke`, `stroke-width`, and `fill`. `aria-label` is copied through too
 * (semantics can't live in CSS); `class` and `style` are forwarded as styling
 * hooks.
 *
 * Call again after injecting new DOM (SPA route change, htmx swap) to hydrate
 * fresh nodes. Browser only.
 */
export function createGeoIcons(
  icons: Record<string, IconFactory>,
  options: CreateGeoIconsOptions = {},
): void {
  const attr = options.attr ?? 'data-geoicon';
  const root = options.root ?? document;

  root.querySelectorAll(`[${attr}]`).forEach((el) => {
    const key = el.getAttribute(attr);
    if (!key) return;
    const factory = icons[key];
    if (!factory) return; // not in the supplied map → left as-is (tree-shaking intact)

    // Only semantics + styling hooks are forwarded — all visual props are CSS.
    const opts: Record<string, string> = {};
    const label = el.getAttribute('aria-label');
    if (label != null) opts['aria-label'] = label;
    const cls = el.getAttribute('class');
    if (cls != null) opts.class = cls;
    const style = el.getAttribute('style');
    if (style != null) opts.style = style;

    el.replaceWith(factory(opts));
  });
}
