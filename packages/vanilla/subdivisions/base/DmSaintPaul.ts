// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.795 5.673a.6.6 0 0 0-.207.873l4.77 6.798a2 2 0 0 1 .35.926l.343 3.051a2 2 0 0 1-.157 1.029l-.334.758a2 2 0 0 0-.159 1.01l.086.834a2 2 0 0 0 .546 1.18l.123.128a.8.8 0 0 0 .722.233l.924-.17a2 2 0 0 1 .688-.005l1.656.274c.222.037.449.036.67-.003l1.048-.183a1.42 1.42 0 0 0 1.175-1.457l-.016-.383a1 1 0 0 1 .41-.848l2.209-1.614a1 1 0 0 1 .583-.192l1.798-.013a2 2 0 0 0 1.168-.387l1.036-.758a3 3 0 0 0 .98-1.23l.207-.478a3 3 0 0 0 .175-1.841l-.015-.069a3 3 0 0 0-.412-.982l-.413-.636a2 2 0 0 1-.274-1.524l.837-3.755a4 4 0 0 0 .088-1.132l-.012-.189a4 4 0 0 0-.6-1.86l-.834-1.334a.6.6 0 0 0-.657-.264l-1.433.364a4 4 0 0 0-1.232.548l-3.39 2.256a3 3 0 0 1-2.469.393l-2.811-.786a7 7 0 0 0-2.921-.18l-.514.077a7 7 0 0 0-2.28.76z\"/>";
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

/** Build a <DmSaintPaul/> icon as a live SVGSVGElement (browser only). */
export function DmSaintPaul(options: IconOptions = {}): SVGSVGElement {
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
