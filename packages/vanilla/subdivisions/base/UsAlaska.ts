// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.456 9.022a1 1 0 0 0-.525 1.497l.087.133a1 1 0 0 0 .909.45l1.639-.116a.74.74 0 0 1 .256 1.45l-.821.234a1.98 1.98 0 0 0-1.316 2.581l.031.084c.163.446.467.826.866 1.083l2.156 1.386a1 1 0 0 1 .01 1.676L3 21.29a.71.71 0 0 0 .708 1.228l3.65-1.825q.125-.063.23-.158l2.451-2.25.59-.457a5.12 5.12 0 0 1 4.315-.929l.063.015a5.4 5.4 0 0 1 2.946 1.852l.935 1.151a3 3 0 0 1 .317.476l.855 1.598a1 1 0 0 0 1.049.514l.665-.113a1 1 0 0 0 .817-.805l.07-.385a1 1 0 0 0-.422-1.009l-.79-.536a2 2 0 0 1-.629-.69l-1.054-1.91a1 1 0 0 0-.502-.445l-2.438-.98a1 1 0 0 1-.627-.928v-10.4a.6.6 0 0 0-.418-.572L8.289 1.355a1 1 0 0 0-.899.15L2.835 4.898A1 1 0 0 0 2.73 6.41l1.28 1.26a.547.547 0 0 1-.214.91z\"/>";
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

/** Build a <UsAlaska/> icon as a live SVGSVGElement (browser only). */
export function UsAlaska(options: IconOptions = {}): SVGSVGElement {
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
