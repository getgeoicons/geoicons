// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.256 13.902a1 1 0 0 1 .916.034l1.109.626a.6.6 0 0 0 .5.041l4.478-1.623a.6.6 0 0 0 .367-.745l-1.178-3.729a1.5 1.5 0 0 0-.766-.892l-.767-.38a1.5 1.5 0 0 0-1.09-.093l-.865.256a1.5 1.5 0 0 0-.896.729l-1.335 2.485a5.37 5.37 0 0 1-5.227 2.806l-.482-.045a3.3 3.3 0 0 1-2.248-1.195l-.4-.49a10.6 10.6 0 0 0-2.333-2.112L3.034 8.242a.92.92 0 0 0-1.103 1.47l2.434 2.052q.661.559 1.228 1.213l.695.804c.632.73 1.362 1.367 2.17 1.894l.032.02a10 10 0 0 0 2.555 1.19.55.55 0 0 0 .658-.297l.433-.956a1 1 0 0 1 .486-.492z\"/>";
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

/** Build a <BsWestGrandBahama/> icon as a live SVGSVGElement (browser only). */
export function BsWestGrandBahama(options: IconOptions = {}): SVGSVGElement {
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
