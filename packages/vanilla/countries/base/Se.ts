// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.366 14.855-1.124 2.92a.5.5 0 0 0-.022.286l.941 4.34a.5.5 0 0 0 .495.394l.713-.008a.5.5 0 0 0 .329-.127l1.177-1.058a.5.5 0 0 0 .157-.275l.52-2.624a.5.5 0 0 1 .117-.235l1.267-1.42a.5.5 0 0 0-.035-.702l-1.016-.932a.5.5 0 0 1-.152-.469l.384-1.887a.5.5 0 0 1 .135-.252l2.502-2.529a.5.5 0 0 0 .143-.315l.133-1.818a.5.5 0 0 1 .456-.462l1.325-.11-.479-4.004a.5.5 0 0 0-.147-.299L14.368 1.5a.5.5 0 0 0-.65-.04l-2.045 1.55a.5.5 0 0 0-.152.187L9.869 6.76a.5.5 0 0 0-.039.124l-.396 2.261a.5.5 0 0 1-.11.236l-1.232 1.46a.5.5 0 0 0-.114.384l.418 3.389a.5.5 0 0 1-.03.24Z\"/>";
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

/** Build a <Se/> icon as a live SVGSVGElement (browser only). */
export function Se(options: IconOptions = {}): SVGSVGElement {
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
