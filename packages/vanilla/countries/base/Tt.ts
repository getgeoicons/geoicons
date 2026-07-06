// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.874 9.318-8.367 1.498a.5.5 0 0 0-.164.06l-2.674 1.56 3.258-.08a1 1 0 0 1 .87.467l.506.803a1 1 0 0 1 .12.794L8.1 15.625a1 1 0 0 0 .116.788l.223.357a1 1 0 0 1 .122.765l-.046.188a1 1 0 0 1-1.229.729l-.927-.247a.5.5 0 0 0-.476.124l-.917.89a.5.5 0 0 1-.14.095l-3.215 1.47a.5.5 0 0 0-.265.615l.083.246a.5.5 0 0 0 .633.314l2.522-.845a1 1 0 0 1 .66.008l.87.316a1 1 0 0 0 .45.054l4.218-.466a1 1 0 0 1 .338.02l1.187.277a1 1 0 0 0 .68-.081l1.994-1.012a1 1 0 0 0 .538-.751l.294-2.07a1 1 0 0 0-.013-.35l-.96-4.452a.5.5 0 0 1 .147-.47l2.19-2.047a.25.25 0 0 0-.13-.429l-1.999-.344a.5.5 0 0 0-.173 0Zm5.201-6.628L17.85 4.507a.582.582 0 0 0 .539 1.008l1.432-.439q.072-.022.14-.055l2.224-1.068a.946.946 0 0 0-.674-1.761l-1.082.314a1 1 0 0 0-.354.186Z\"/>";
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

/** Build a <Tt/> icon as a live SVGSVGElement (browser only). */
export function Tt(options: IconOptions = {}): SVGSVGElement {
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
