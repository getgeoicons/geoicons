// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.875 7.655-.408-1.837a.5.5 0 0 1 .348-.588l3.268-.95a.5.5 0 0 0 .258-.178l.768-1.01a.5.5 0 0 1 .242-.172l3.372-1.108a.5.5 0 0 1 .637.337l.34 1.19a.5.5 0 0 0 .294.326l.993.401a.5.5 0 0 0 .412-.016l1.135-.57a.5.5 0 0 1 .227-.052l5.7.035a.5.5 0 0 1 .288.094l1.681 1.21a.5.5 0 0 1 .197.302l.835 3.913a.5.5 0 0 1-.14.463l-1.431 1.387a.5.5 0 0 0-.126.518l1.925 5.733a.5.5 0 0 1-.158.547l-2.484 2.025a.5.5 0 0 0-.181.436L20 21.455a.5.5 0 0 1-.72.497l-2.107-1.043a.5.5 0 0 0-.357-.033l-2.58.723a.5.5 0 0 1-.534-.179l-.628-.827a.5.5 0 0 0-.497-.187l-1.029.207a.5.5 0 0 1-.44-.125L8.33 17.88a.5.5 0 0 0-.635-.04l-.698.505a.5.5 0 0 1-.71-.128l-.844-1.27a.5.5 0 0 0-.33-.215l-2.088-.365a.5.5 0 0 1-.398-.617l.388-1.51a.5.5 0 0 0 .007-.22l-.668-3.488a.5.5 0 0 0-.125-.247l-.786-.843a.5.5 0 0 1-.076-.576l.461-.87a.5.5 0 0 0 .047-.342Z\"/>";
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

/** Build a <Pl/> icon as a live SVGSVGElement (browser only). */
export function Pl(options: IconOptions = {}): SVGSVGElement {
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
