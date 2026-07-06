// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.732 13.555.463 4.754-3.336.32a1 1 0 0 1-.357-.03l-1.305-.354a1 1 0 0 1-.696-1.257l.148-.485a1 1 0 0 0 .022-.5l-.244-1.144a1 1 0 0 1 .117-.717l1.703-2.887a1 1 0 0 1 .288-.312l1.334-.932a1 1 0 0 0 .406-.614l.211-1.004a1 1 0 0 1 .245-.473l1.154-1.249A1 1 0 0 1 7.932 6.4l.9.295a1 1 0 0 0 .838-.1l1.233-.763a1 1 0 0 1 .452-.147l4.45-.331-.402 1.404a1 1 0 0 0 .333 1.052l.131.106a1 1 0 0 0 .244.146l2.842 1.184a.835.835 0 0 0 1.126-.548.84.84 0 0 1 .585-.583l.167-.046a1 1 0 0 1 .657.046l.522.223a1 1 0 0 1 .606.888l.184 5.893-.495.874-3.79-2.215-1.079.554-1.34-.7-2.655 2.086a1 1 0 0 1-.456.2l-.878.144a1 1 0 0 1-.828-.241l-3.263-2.917a.773.773 0 0 0-1.284.651Z\"/>";
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

/** Build a <Maghreb/> icon as a live SVGSVGElement (browser only). */
export function Maghreb(options: IconOptions = {}): SVGSVGElement {
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
