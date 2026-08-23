// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.522 7.117a1 1 0 0 0-.293.324l-.609 1.08a2 2 0 0 0-.236 1.277l.24 1.62a2 2 0 0 0 .327.831l.862 1.264A2 2 0 0 1 5.16 14.6l.105 5.105a2 2 0 0 0 .326 1.054l1.007 1.54a.6.6 0 0 0 .83.173l2.048-1.34a1 1 0 0 0 .13-.101l1.674-1.546a3 3 0 0 1 1.443-.737l1.126-.227a3 3 0 0 0 1.379-.68l1.816-1.583a.604.604 0 0 0-.707-.974l-1.639.982a.806.806 0 0 1-1.215-.79l.002-.02a.83.83 0 0 1 .392-.608l.1-.062a1.89 1.89 0 0 0 .796-2.237 1.89 1.89 0 0 1 .194-1.65l.126-.194a2 2 0 0 1 1.505-.909l2.88-.254a1.301 1.301 0 0 0 .872-2.144l-3.375-3.926a1 1 0 0 0-.786-.348l-1.785.05a1 1 0 0 1-1.007-.794l-.048-.232a1 1 0 0 0-.915-.793L10.9 1.257a1 1 0 0 0-1.048.822L9.57 3.66a1 1 0 0 0-.016.166l-.02 2.09a1 1 0 0 1-.736.955l-1.024.281a1 1 0 0 1-.903-.194l-.626-.518a.6.6 0 0 0-.73-.027z\"/>";
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

/** Build a <PaPanamaOeste/> icon as a live SVGSVGElement (browser only). */
export function PaPanamaOeste(options: IconOptions = {}): SVGSVGElement {
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
