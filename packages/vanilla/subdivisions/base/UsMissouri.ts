// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.107 19.202a.3.3 0 0 0 .299.3l14.256.047-.652 2.076 1.993-.02a.6.6 0 0 0 .56-.402l1.113-3.183a1 1 0 0 0-.015-.702l-.98-2.45a1 1 0 0 0-.265-.376l-1.845-1.636a1 1 0 0 1-.257-1.137l.375-.888a1 1 0 0 0-.494-1.293l-1.022-.484a1 1 0 0 1-.407-.354l-1.884-2.859a1 1 0 0 1-.16-.656l.133-1.25a.6.6 0 0 0-.147-.46l-.792-.896a.6.6 0 0 0-.453-.202L1.886 2.45a.3.3 0 0 0-.217.505l2.041 2.18a1 1 0 0 1 .216 1.01l-.135.39a1 1 0 0 0 .164.951L4.982 8.77a.6.6 0 0 1 .131.376z\"/>";
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

/** Build a <UsMissouri/> icon as a live SVGSVGElement (browser only). */
export function UsMissouri(options: IconOptions = {}): SVGSVGElement {
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
