// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.821 20.754-.015 1.798a.25.25 0 0 1-.25.247h-.637a.25.25 0 0 1-.206-.108l-1.962-2.87a.5.5 0 0 1 .008-.577l.961-1.323a.5.5 0 0 0 .083-.406l-.38-1.66a.5.5 0 0 0-.622-.37l-1.36.38a.5.5 0 0 1-.497-.137l-2.117-2.234a.5.5 0 0 1-.067-.6l1.697-2.86a.5.5 0 0 0 .069-.223l.3-4.65a.5.5 0 0 0-.05-.253L7.946 1.2l3.011 1.008a.5.5 0 0 1 .303.282l.7 1.683q.03.071.037.147l.277 3.095a.5.5 0 0 1-.036.236l-.661 1.597a.5.5 0 0 0-.019.33l.776 2.693a.5.5 0 0 0 .386.353l.948.183a.5.5 0 0 1 .296.179l2.354 2.95a.5.5 0 0 1 .11.327l-.098 3.182a.5.5 0 0 1-.293.44l-.922.418a.5.5 0 0 0-.294.451Z\"/>";
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

/** Build a <Mw/> icon as a live SVGSVGElement (browser only). */
export function Mw(options: IconOptions = {}): SVGSVGElement {
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
