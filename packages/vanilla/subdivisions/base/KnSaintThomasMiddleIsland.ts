// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.541 10.915.327.389a1 1 0 0 0 .117.118l2.268 1.935c.282.242.608.428.96.55l1.338.467q.966.337 1.855.847l4.279 2.457a2 2 0 0 1 .929 1.19l.286 1.01c.066.232.192.442.366.61l.13.124a1.148 1.148 0 0 0 1.834-.341l1.064-2.265a1 1 0 0 1 .586-.522l1.56-.525a3 3 0 0 0 1.174-.732l1.531-1.545a.6.6 0 0 0-.217-.985l-4.7-1.745a.6.6 0 0 1-.382-.665l.162-.93a.6.6 0 0 0-.136-.494l-5.76-6.698a.6.6 0 0 0-.872-.04L7.992 5.3a1 1 0 0 1-.721.28l-.913-.023a1 1 0 0 0-.889.494l-.517.883a2 2 0 0 1-.5.57l-2.775 2.15a.88.88 0 0 0-.136 1.26Z\"/>";
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

/** Build a <KnSaintThomasMiddleIsland/> icon as a live SVGSVGElement (browser only). */
export function KnSaintThomasMiddleIsland(options: IconOptions = {}): SVGSVGElement {
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
