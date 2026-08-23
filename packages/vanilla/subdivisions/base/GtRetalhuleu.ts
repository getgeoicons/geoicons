// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.526 3.667a.625.625 0 0 0-.93-.792L18.739 5.06a.6.6 0 0 1-.96-.407l-.199-1.694a.6.6 0 0 0-.988-.385l-.745.644a3 3 0 0 0-.568.656L13.843 6.12a2 2 0 0 0-.244.552l-.547 2.01a1 1 0 0 1-1.273.689L5.238 7.256a.6.6 0 0 0-.533.082l-2.86 2.045a.6.6 0 0 0-.028.956l7.136 5.728 3.728 3.32a8 8 0 0 0 1.768 1.194l2.645 1.31a.6.6 0 0 0 .81-.285l.976-2.1a2 2 0 0 0 .184-.904l-.045-1.484a2 2 0 0 1 .094-.67l1.06-3.318c.108-.337.155-.69.14-1.044l-.15-3.43A2 2 0 0 1 20.4 7.62z\"/>";
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

/** Build a <GtRetalhuleu/> icon as a live SVGSVGElement (browser only). */
export function GtRetalhuleu(options: IconOptions = {}): SVGSVGElement {
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
