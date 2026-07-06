// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.739 13.233 1.2 13.33l1.636-2.81a1 1 0 0 1 .226-.267l1.356-1.126a1 1 0 0 0 .31-.453l.18-.54a1 1 0 0 1 .329-.468l.868-.686a1 1 0 0 1 .898-.176l.563.163a1 1 0 0 0 .783-.098l.904-.529a1 1 0 0 1 .476-.136l2.065-.06a.6.6 0 0 1 .618.589l.01.544a1 1 0 0 0 .576.889l1.713.8a.6.6 0 0 0 .799-.294l.144-.313a.6.6 0 0 1 .782-.3l1.45.624a1 1 0 0 0 .413.081l1.574-.028a.6.6 0 0 1 .609.546l.058.646c.016.175.079.344.18.488l1.254 1.767q.073.102.118.22l.587 1.525a.6.6 0 0 1-.083.58l-.353.46a1 1 0 0 0-.132.23l-.71 1.737a1 1 0 0 1-.834.617l-2.804.257a1 1 0 0 1-1.002-.585l-.249-.55a1 1 0 0 1 .122-1.025l.545-.702.038-1.319-2.54-1.41a1 1 0 0 0-.37-.12l-1.017-.118a1 1 0 0 0-.728.204l-2.175 1.688a.6.6 0 0 1-.733.002l-3.815-2.92-1.092-.017z\"/>";
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

/** Build a <NorthAfrica/> icon as a live SVGSVGElement (browser only). */
export function NorthAfrica(options: IconOptions = {}): SVGSVGElement {
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
