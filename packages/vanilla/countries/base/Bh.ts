// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.454 16.191.056.351a2 2 0 0 0 .611 1.151l1.388 1.294a3 3 0 0 1 .804 1.257l.655 1.988a.3.3 0 0 0 .53.078l1.032-1.47a2 2 0 0 0 .349-.913l.964-8.166a6 6 0 0 1 .618-2.029l1.711-3.345a1 1 0 0 0 .01-.89l-1.442-2.99a1 1 0 0 0-1.627-.253l-2.231 2.36a1 1 0 0 1-.95.287l-1.468-.337a1 1 0 0 0-.901.24l-.819.753a1 1 0 0 0-.315.853l.196 1.651a5 5 0 0 0 .341 1.315l1.016 2.468a3 3 0 0 1 .006 2.27l-.411 1.012a2 2 0 0 0-.123 1.065ZM7.24 8.904l-.003.533A.817.817 0 0 1 5.6 9.431v-.533a.819.819 0 1 1 1.638.006Z\"/>";
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

/** Build a <Bh/> icon as a live SVGSVGElement (browser only). */
export function Bh(options: IconOptions = {}): SVGSVGElement {
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
