// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.045 22.649a.3.3 0 0 0 .545.047l1.832-3.28a1 1 0 0 1 .603-.475l1.814-.51a1 1 0 0 0 .568-.417l.433-.666a1 1 0 0 1 .915-.452l1.732.133a1 1 0 0 0 .6-.145l3.055-1.876a1 1 0 0 0 .295-1.427l-2.26-3.215a1 1 0 0 1-.182-.57l-.034-5.76a1 1 0 0 0-.312-.72l-.641-.608a1 1 0 0 0-1.18-.145l-.854.483a.6.6 0 0 1-.875-.367l-.131-.49a.6.6 0 0 0-.467-.433l-.02-.004a.6.6 0 0 0-.613.258L8.173 6.086a1 1 0 0 0-.151.378L7.4 9.992a1 1 0 0 1-.345.595l-1.88 1.567a.6.6 0 0 0-.216.48l.238 7.321q.01.307.111.598z\"/>";
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

/** Build a <UsMaine/> icon as a live SVGSVGElement (browser only). */
export function UsMaine(options: IconOptions = {}): SVGSVGElement {
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
