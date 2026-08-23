// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.385 6.44-.851-.925a.721.721 0 0 0-1.229.667l1.017 3.96a1 1 0 0 0 .937.751l.477.015a6.9 6.9 0 0 1 4.534 1.89l.421.4a.78.78 0 0 1-.373 1.328l-4.936 1.058a.698.698 0 0 0 .25 1.374l7.435-1.101a1 1 0 0 1 .61.103l1.578.826q.22.114.459.173l7.937 1.917a.742.742 0 0 0 .438-1.414l-6.57-2.501a2 2 0 0 0-.585-.127l-1.675-.107a1 1 0 0 1-.758-.427l-1.1-1.586a1 1 0 0 0-.708-.423l-.445-.05a1 1 0 0 1-.681-.387L7.614 9.3a3 3 0 0 0-.887-.778L4.097 7.01a3 3 0 0 1-.712-.57Z\"/>";
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

/** Build a <BsExuma/> icon as a live SVGSVGElement (browser only). */
export function BsExuma(options: IconOptions = {}): SVGSVGElement {
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
