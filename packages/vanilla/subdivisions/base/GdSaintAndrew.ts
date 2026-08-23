// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.146 3.465a2 2 0 0 0-.782.984L5.402 9.793a.6.6 0 0 1-.369.361l-.781.268a.6.6 0 0 0-.39.427l-.598 2.489a1 1 0 0 0-.023.338l.573 5.491a.6.6 0 0 0 .733.523l2.885-.67a.6.6 0 0 1 .473.089l5.104 3.471a1 1 0 0 0 .417.162l1.175.173a1 1 0 0 0 .823-.254l.776-.715a1 1 0 0 0 .32-.677l.075-1.282a1 1 0 0 1 .484-.8l.284-.17a1 1 0 0 0 .427-1.198l-1.284-3.553a2 2 0 0 1-.022-1.296l.336-1.04a1 1 0 0 1 1.025-.69l1.896.14a.842.842 0 0 0 .51-1.554l-.364-.228a1 1 0 0 1-.468-.877l.055-1.87q.018-.572.127-1.133l.699-3.58a.6.6 0 0 0-.468-.702l-1.75-.359a1 1 0 0 0-.583.056l-2.048.847a1 1 0 0 1-.574.057l-3.107-.606a1 1 0 0 0-.74.145z\"/>";
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

/** Build a <GdSaintAndrew/> icon as a live SVGSVGElement (browser only). */
export function GdSaintAndrew(options: IconOptions = {}): SVGSVGElement {
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
