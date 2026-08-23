// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.665 9.67a.6.6 0 0 0 .09.325l.961 1.552a1 1 0 0 1 .05.963L5.46 15.202a1 1 0 0 0-.067.693l.388 1.463q.071.262.067.535l-.05 4.603a.3.3 0 0 0 .3.304l12.304-.01a.3.3 0 0 0 .3-.301l-.027-6.832a.6.6 0 0 0-.737-.582l-2.4.562a1 1 0 0 1-1.105-.495l-1.29-2.366a1 1 0 0 0-.796-.518l-.172-.014a1 1 0 0 1-.906-1.152l.31-1.978a.6.6 0 0 0-.218-.561L9.26 6.868a1 1 0 0 1-.266-.326L7.987 4.569a1 1 0 0 1-.11-.465l.027-2.6a.3.3 0 0 0-.3-.303l-1.525.008a.3.3 0 0 0-.298.295z\"/>";
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

/** Build a <UsIdaho/> icon as a live SVGSVGElement (browser only). */
export function UsIdaho(options: IconOptions = {}): SVGSVGElement {
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
