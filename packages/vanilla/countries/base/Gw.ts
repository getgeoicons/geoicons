// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.463 17.974-2.356-2.798a1 1 0 0 1-.234-.602l-.108-2.59a.6.6 0 0 0-.815-.535L7.515 12a2 2 0 0 1-1.253.06l-1.365-.38a1 1 0 0 1-.716-.787l-.202-1.128a1 1 0 0 0-.464-.679l-1.68-1.023a.3.3 0 0 1 .09-.549l2.546-.571a3 3 0 0 1 1.135-.035l2.349.38a2 2 0 0 0 1.344-.259l2.295-1.371a2 2 0 0 1 1.049-.283l9.263.105a.6.6 0 0 1 .585.501l.226 1.352a.6.6 0 0 1-.397.666l-1.565.538a.71.71 0 0 0 .007 1.343l1.3.434a.6.6 0 0 1 .41.59l-.044 1.22a.6.6 0 0 1-.58.58l-2.764.085a3 3 0 0 0-.914.172l-2.064.735a1 1 0 0 0-.533.447l-2.13 3.742a.6.6 0 0 1-.98.09Z\"/>";
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

/** Build a <Gw/> icon as a live SVGSVGElement (browser only). */
export function Gw(options: IconOptions = {}): SVGSVGElement {
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
