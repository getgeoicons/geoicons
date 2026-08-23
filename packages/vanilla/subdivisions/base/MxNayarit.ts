// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.352 22.405a.6.6 0 0 1-.7.184l-1.274-.522a.6.6 0 0 1-.201-.974l1.411-1.448a2 2 0 0 0 .557-1.186l.252-2.379a1 1 0 0 0-.487-.966l-.842-.497a3 3 0 0 1-1.156-1.234l-1.11-2.202a3 3 0 0 1-.321-1.364l.004-.765a3 3 0 0 0-.176-1.025l-.382-1.07a.6.6 0 0 1 .672-.792l1.04.19a.6.6 0 0 0 .702-.675l-.376-2.66a1 1 0 0 1 .176-.721l.329-.46a1 1 0 0 1 1.184-.349l2.501.997a.6.6 0 0 1 .354.39l.255.874a.6.6 0 0 1-.346.722l-.584.242a.6.6 0 0 0-.333.76l.309.842a.6.6 0 0 0 .933.266l.755-.591a.6.6 0 0 1 .794.048l1.064 1.064a2 2 0 0 0 1.139.567l.425.059a1 1 0 0 1 .834 1.228l-.347 1.415a1 1 0 0 0 .472 1.105l2.894 1.667a1 1 0 0 1 .388.403l1.04 1.989a1 1 0 0 1 .027.868l-.274.619a1 1 0 0 1-.794.588l-1.701.207a1 1 0 0 0-.866.827l-.51 3.044a.6.6 0 0 1-1.004.337l-2.366-2.235a1 1 0 0 0-1.103-.182l-1.226.562a2 2 0 0 0-.74.584z\"/>";
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

/** Build a <MxNayarit/> icon as a live SVGSVGElement (browser only). */
export function MxNayarit(options: IconOptions = {}): SVGSVGElement {
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
