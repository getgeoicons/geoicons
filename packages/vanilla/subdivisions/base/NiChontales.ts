// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.445 17.697a1 1 0 0 0 .578.135l1.052-.077a.593.593 0 0 0 .401-.983l-.921-1.045a1 1 0 0 0-.358-.258l-2.096-.896a1 1 0 0 1-.603-.823l-.156-1.613a2 2 0 0 0-.203-.703l-1.682-3.36a2 2 0 0 1-.135-1.445l.186-.65a1 1 0 0 0-.105-.791l-1.096-1.815a1 1 0 0 0-.995-.473l-.017.002a1 1 0 0 0-.695.436l-1.567 2.356a3 3 0 0 1-1.519 1.174L6.162 8.37a3 3 0 0 1-1.634.092l-1.694-.379a.6.6 0 0 0-.72.474l-.815 4.303a.6.6 0 0 0 .407.683l1.108.354a1 1 0 0 1 .514.378l1.755 2.501a1 1 0 0 0 .753.424l.762.05a2 2 0 0 1 1.229.528l3.314 3.069a.6.6 0 0 0 .773.035l4.73-3.633a1.5 1.5 0 0 1 .965-.31l1.132.04a2 2 0 0 1 .942.272z\"/>";
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

/** Build a <NiChontales/> icon as a live SVGSVGElement (browser only). */
export function NiChontales(options: IconOptions = {}): SVGSVGElement {
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
