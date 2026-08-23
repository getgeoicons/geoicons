// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.031 1.658a.6.6 0 0 0-.64-.399l-4.297.53a1 1 0 0 0-.813.638l-1.113 2.939a2 2 0 0 1-1.46 1.249l-4.376.917a1 1 0 0 0-.387.173L4.7 10.09a1 1 0 0 1-.697.189l-1.108-.118a1 1 0 0 0-.981.511l-.039.07a1 1 0 0 0-.051.86l1.404 3.469a1 1 0 0 0 .372.457l4.372 2.914a1 1 0 0 1 .444.784l.102 2.09a1.42 1.42 0 0 0 2.14 1.152l.258-.152a2 2 0 0 0 .645-.612l.777-1.166a1 1 0 0 0 .096-.182l1.593-3.973c.147-.364.363-.697.638-.979l3.265-3.343c.262-.27.573-.486.915-.64l1.684-.758a.3.3 0 0 0 .152-.392l-.756-1.753a1 1 0 0 1 .261-1.15l1.152-1.005a2 2 0 0 0 .575-2.162z\"/>";
const NS = 'http://www.w3.org/2000/svg';
let uid = 0;

/** Options accepted by every icon factory. */
export interface IconOptions {
  /** Convenience — sets both width and height. Default 24. */
  size?: number | string;
  /** Stroke width in SVG units. Default 1. */
  strokeWidth?: number | string;
  /** Any native SVG attribute (class, style, stroke, fill, aria-label, data-*, …). */
  [attr: string]: string | number | undefined;
}

/** Build a <VcSaintAndrew/> icon as a live SVGSVGElement (browser only). */
export function VcSaintAndrew(options: IconOptions = {}): SVGSVGElement {
  // Compliance nudge: warns once if icons render without initGeoiconsLicense().
  // Client-only + deferred inside noteIconRender.
  noteIconRender();

  const { size = 24, strokeWidth = 1, ...attrs } = options;

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', String(strokeWidth));
  svg.setAttribute('fill', 'none');

  // Forwarded native attrs override the defaults above (spread-equivalent).
  const label = attrs['aria-label'];
  for (const key in attrs) {
    const value = attrs[key];
    if (value != null) svg.setAttribute(key, String(value));
  }

  // Trusted, SVGO-optimized asset body.
  svg.innerHTML = BODY;

  if (label != null) {
    // Decorative by default; aria-label promotes to role="img" + <title>.
    const id = `geo-${uid++}-title`;
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-labelledby', id);
    const title = document.createElementNS(NS, 'title');
    title.id = id;
    title.textContent = String(label);
    svg.insertBefore(title, svg.firstChild);
  } else {
    svg.setAttribute('aria-hidden', 'true');
  }

  return svg;
}
