// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.986 7.168-.081.23a1 1 0 0 0 .248 1.052l2.002 1.932a1 1 0 0 1 .24.362l.619 1.619a1 1 0 0 0 .368.467l.606.416a1 1 0 0 0 .988.082l.095-.044a1 1 0 0 1 1.031.114l.357.274a1 1 0 0 1 .318.417L9.51 15.9a1 1 0 0 0 .3.403l1.557 1.256a1 1 0 0 0 .385.192l2.15.537a1 1 0 0 1 .243.096l5.263 2.924a1 1 0 0 0 .486.126h2.522a.5.5 0 0 0 .372-.832l-3.034-3.394a1 1 0 0 1-.185-.3l-.51-1.298a1 1 0 0 0-.354-.452l-1.614-1.139a1 1 0 0 0-.576-.183h-2.201a1 1 0 0 1-.267-.036l-3.088-.855a1 1 0 0 1-.365-.189l-2.09-1.703a1 1 0 0 1-.2-.219L7.162 9.13a1 1 0 0 1-.169-.557v-1.57a1 1 0 0 0-.132-.496l-.889-1.556a1 1 0 0 0-.668-.484l-1.177-.241a1 1 0 0 1-.388-.171l-1.498-1.09a.788.788 0 0 0-1.04 1.175l.285.306a1 1 0 0 1 .254.514l.289 1.708a1 1 0 0 1-.043.5Z\"/>";
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

/** Build a <Cw/> icon as a live SVGSVGElement (browser only). */
export function Cw(options: IconOptions = {}): SVGSVGElement {
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
