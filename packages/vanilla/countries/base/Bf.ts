// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.864 18.71-.332-2.78a.6.6 0 0 1 .616-.671l4.64.164a2 2 0 0 0 .883-.171l.547-.244a2 2 0 0 1 1.176-.138l1.522.281a2 2 0 0 0 1.214-.156l2.78-1.305a1 1 0 0 0 .486-1.315l-.572-1.272a1 1 0 0 0-.698-.566l-.948-.208a1.315 1.315 0 0 1-1.033-1.277 1.32 1.32 0 0 0-.571-1.078l-.428-.294a2.95 2.95 0 0 1-1.28-2.343.985.985 0 0 0-.86-.946l-1.01-.128a2 2 0 0 0-1.052.15l-3.875 1.69a3 3 0 0 0-1.032.744L7.32 8.755a.95.95 0 0 1-1.207.168l-.026-.016A.91.91 0 0 0 5.002 9a1.8 1.8 0 0 0-.598 1.503 1.78 1.78 0 0 1-1.063 1.799l-1.123.486a1 1 0 0 0-.595.797l-.348 2.87a1 1 0 0 0 .448.959l1.681 1.093a2 2 0 0 0 1.612.254l.465-.125a2 2 0 0 1 1.402.135l1.12.55a.6.6 0 0 0 .86-.61Z\"/>";
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

/** Build a <Bf/> icon as a live SVGSVGElement (browser only). */
export function Bf(options: IconOptions = {}): SVGSVGElement {
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
