// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.438 22.622-1.33.112a1 1 0 0 1-1.03-.674l-.756-2.224a1 1 0 0 0-.426-.531l-1.11-.678a1 1 0 0 1-.44-.579l-.37-1.294a1 1 0 0 1 .068-.722l.282-.564a1 1 0 0 0-.188-1.155l-.707-.707a1 1 0 0 1-.242-1.024l.602-1.805a1 1 0 0 1 .717-.656l.734-.175a1 1 0 0 0 .768-.973v-.996a1 1 0 0 0-.463-.844l-2.16-1.375a.6.6 0 0 1-.279-.516l.008-.48a.6.6 0 0 1 .65-.587l.992.083a1 1 0 0 0 .98-.551l.867-1.745a.913.913 0 0 1 1.652.777l-.254.571a1 1 0 0 0-.053.664l.218.816a1 1 0 0 0 .319.505l1.252 1.064a1 1 0 0 0 1.012.17l.939-.369a1 1 0 0 1 1.19.366l.603.88a1 1 0 0 1 .168.69l-.143 1.138a1 1 0 0 0 .685 1.076l1.882.609a1 1 0 0 1 .69.876l.215 2.87a1 1 0 0 1-.175.644l-.303.437a1 1 0 0 1-1.012.413l-.955-.184a.6.6 0 0 0-.604.242l-.337.475a.6.6 0 0 0 .197.871l1.043.583a.855.855 0 0 1-.188 1.57l-.685.19a1 1 0 0 0-.571.417l-.364.558a1 1 0 0 1-.423.363l-2.835 1.292a1 1 0 0 1-.33.086Z\"/>";
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

/** Build a <MackenzieBasin/> icon as a live SVGSVGElement (browser only). */
export function MackenzieBasin(options: IconOptions = {}): SVGSVGElement {
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
