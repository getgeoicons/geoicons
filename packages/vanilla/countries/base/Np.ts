// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m22.272 16.199.169 1.829a.5.5 0 0 1-.569.54l-5.615-.798a.5.5 0 0 1-.22-.088l-2.72-1.947a.5.5 0 0 0-.286-.093l-3.137-.03a.5.5 0 0 1-.228-.059l-8.079-4.26a.5.5 0 0 1-.236-.615l1.574-4.276a.5.5 0 0 1 .809-.194l.672.622a.5.5 0 0 0 .778-.126L5.6 5.95a.5.5 0 0 1 .804-.098L9.89 9.617a.5.5 0 0 0 .452.153l1.041-.18a.5.5 0 0 1 .563.344l.28.902a.5.5 0 0 0 .227.284l4.284 2.488a.5.5 0 0 0 .22.067l5.238.324a.5.5 0 0 1 .454.624l-.363 1.405a.5.5 0 0 0-.014.17\"/>";
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

/** Build a <Np/> icon as a live SVGSVGElement (browser only). */
export function Np(options: IconOptions = {}): SVGSVGElement {
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
