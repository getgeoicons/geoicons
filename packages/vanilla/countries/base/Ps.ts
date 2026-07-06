// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.55 22.8-.929-2.038 3.504-4.344a.5.5 0 0 1 .724-.058l.754.678a.5.5 0 0 1 .054.686zm16.033-7.98-.607 3.116a.5.5 0 0 1-.157.277l-2.116 1.893a.5.5 0 0 1-.243.119l-3.898.717a.5.5 0 0 1-.559-.317l-.325-.87a.5.5 0 0 1 .035-.423l.665-1.166a.5.5 0 0 0 .054-.138l.352-1.572a.5.5 0 0 1 .254-.333l3.192-1.686a.5.5 0 0 0 .263-.39l.056-.536a.5.5 0 0 0-.43-.547l-2.247-.305a.5.5 0 0 1-.427-.422l-.746-5.058a.5.5 0 0 1 .025-.244l1.577-4.337a.5.5 0 0 1 .218-.26L16.3 1.296a.5.5 0 0 1 .354-.058l1.62.335a.5.5 0 0 1 .371.324l.41 1.167a.5.5 0 0 0 .343.317l1.323.353a.5.5 0 0 1 .367.422l.278 2.267a.5.5 0 0 1-.014.194l-.724 2.626a.5.5 0 0 0-.015.181l.4 4.103a.5.5 0 0 1-.274.496l-.889.444a.5.5 0 0 0-.267.352Z\"/>";
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

/** Build a <Ps/> icon as a live SVGSVGElement (browser only). */
export function Ps(options: IconOptions = {}): SVGSVGElement {
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
