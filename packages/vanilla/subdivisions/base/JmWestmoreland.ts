// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.403 7.917a1 1 0 0 0-.837-.549l-3.67-.207a.6.6 0 0 1-.27-.082l-2.83-1.668a.6.6 0 0 0-.3-.083L8.44 5.277a.6.6 0 0 0-.46.208l-1.51 1.75a.6.6 0 0 1-.542.2L3.302 7.05a1 1 0 0 0-.965.415l-.82 1.17a1 1 0 0 0-.104.96l.363.87a1 1 0 0 0 .696.588l1.97.457q.576.135 1.106.4l1.21.605a1 1 0 0 0 .782.048l1.546-.55a3 3 0 0 1 1.11-.172l3.588.126a2.27 2.27 0 0 1 2.176 2.015l.126 1.125a1 1 0 0 0 .46.733l.783.496c.314.199.588.454.81.753l.555.753a.6.6 0 0 0 1.044-.144l.764-2.013a.6.6 0 0 0-.033-.497l-.374-.693a.6.6 0 0 1 .069-.671l2.211-2.63a1 1 0 0 0 .128-1.094z\"/>";
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

/** Build a <JmWestmoreland/> icon as a live SVGSVGElement (browser only). */
export function JmWestmoreland(options: IconOptions = {}): SVGSVGElement {
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
