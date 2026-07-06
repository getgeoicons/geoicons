// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m1.654 4.196-.343-1.47a.5.5 0 0 1 .358-.597l1.608-.428a.5.5 0 0 1 .424.08l.82.598a.5.5 0 0 0 .3.096l6.655-.058a.5.5 0 0 1 .328.119l.63.536a.5.5 0 0 0 .308.118l2.578.09a.5.5 0 0 0 .103-.008l5.35-.923a.5.5 0 0 1 .305.044l1.722.843-2.612 1.65-.426-.831-3.556.659a.5.5 0 0 0-.408.492l.001 4.488a.5.5 0 0 1-.5.5h-.58a.5.5 0 0 0-.5.5V21.07a.5.5 0 0 1-.166.373l-.862.77a.5.5 0 0 1-.389.123l-2.173-.245a.5.5 0 0 1-.377-.248l-.374-.648a.5.5 0 0 0-.771-.119l-.338.31a.5.5 0 0 1-.747-.08l-1.204-1.708a.5.5 0 0 1-.086-.214L5.567 11.56a.5.5 0 0 0-.054-.163L1.7 4.319a.5.5 0 0 1-.047-.123\"/>";
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

/** Build a <Na/> icon as a live SVGSVGElement (browser only). */
export function Na(options: IconOptions = {}): SVGSVGElement {
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
