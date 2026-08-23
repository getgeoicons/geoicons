// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.917 16.574-.22-.268a.6.6 0 0 1 .222-.929l1.477-.656a.6.6 0 0 1 .762.247l.184.316a.6.6 0 0 1-.286.854l-1.441.609a.6.6 0 0 1-.698-.173Zm3.555-3.094.32-1.194a1 1 0 0 1 .557-.653l4.175-1.876a4 4 0 0 1 1.192-.327l4.863-.547a.6.6 0 0 1 .666.62l-.008.195a.6.6 0 0 1-.48.564l-4.7.954c-.398.08-.782.221-1.137.418L6.342 14.16a.6.6 0 0 1-.87-.68Zm15.421-5.896-1.748 2.272a.6.6 0 0 0 .114.844l.053.04a.6.6 0 0 0 .75-.02l2.205-1.866a.6.6 0 0 0 .007-.91l-.511-.446a.6.6 0 0 0-.87.086Z\"/>";
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

/** Build a <HnBayIslands/> icon as a live SVGSVGElement (browser only). */
export function HnBayIslands(options: IconOptions = {}): SVGSVGElement {
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
