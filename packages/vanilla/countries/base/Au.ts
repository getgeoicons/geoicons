// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.473 15.944-.92-.342a.5.5 0 0 1-.326-.505l.149-2.008a.5.5 0 0 0-.035-.224l-.906-2.255a.5.5 0 0 1-.034-.235l.218-2.237a.5.5 0 0 1 .355-.43l3.176-.945a.5.5 0 0 0 .246-.164L7.844 3.58a.5.5 0 0 1 .655-.109l.665.418a.5.5 0 0 0 .652-.105l1.403-1.699a.5.5 0 0 1 .482-.172l1.665.325a.5.5 0 0 1 .32.768l-.4.601a.5.5 0 0 0 .171.714l1.707.955a.5.5 0 0 0 .731-.324l.695-3.001a.25.25 0 0 1 .474-.041l1.8 4.264a.5.5 0 0 0 .098.15l3.12 3.277a.5.5 0 0 1 .13.252l.374 1.986a.5.5 0 0 1-.022.264l-1.968 5.38a.5.5 0 0 1-.333.31l-2.136.604a.5.5 0 0 1-.25.006l-2.042-.48a.5.5 0 0 1-.367-.352l-.304-1.089a.5.5 0 0 0-.345-.346l-1.7-.482a.5.5 0 0 1-.198-.11L11 13.813a.5.5 0 0 0-.493-.103l-6.703 2.24a.5.5 0 0 1-.332-.006Zm16.145 4.332-1.35.151a.5.5 0 0 0-.417.659l.458 1.34a.5.5 0 0 0 .521.336l.722-.07a.5.5 0 0 0 .449-.438l.17-1.422a.5.5 0 0 0-.553-.556Z\"/>";
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

/** Build a <Au/> icon as a live SVGSVGElement (browser only). */
export function Au(options: IconOptions = {}): SVGSVGElement {
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
