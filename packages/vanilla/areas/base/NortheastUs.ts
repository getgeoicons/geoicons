// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.315 19.576H1.2l.063-4.22a1 1 0 0 1 .431-.808l1.622-1.12a.89.89 0 0 0 .38-.816.892.892 0 0 1 .988-.97l1.86.21a1 1 0 0 0 1.087-.776l.216-.962a1 1 0 0 1 .34-.553l1.896-1.562 5.027.033a1 1 0 0 0 .62-.21l.965-.748a1 1 0 0 0 .296-.372l1.804-3.924a.6.6 0 0 1 .458-.343l.879-.128a.6.6 0 0 1 .475.136l.763.648a.6.6 0 0 1 .212.457v2.525a1 1 0 0 0 .111.458L22.8 8.68l-4.724 2.195a1 1 0 0 0-.51.541l-.59 1.5a1 1 0 0 0 .108.935l.42.608a1 1 0 0 1-.447 1.495l-4.676 1.893a1 1 0 0 0-.53.501l-1.133 2.41a.6.6 0 0 1-1.046.07l-.519-.797a1 1 0 0 0-.838-.455Z\"/>";
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

/** Build a <NortheastUs/> icon as a live SVGSVGElement (browser only). */
export function NortheastUs(options: IconOptions = {}): SVGSVGElement {
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
