// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.95 21.949a.3.3 0 0 0 .238.444l4.708.38a.3.3 0 0 0 .324-.31l-.023-.608a1 1 0 0 1 .633-.968l1.105-.436a2 2 0 0 0 .886-.687l.17-.234a1 1 0 0 0-.258-1.42l-1.249-.828a1 1 0 0 1-.447-.855l.002-.132a1 1 0 0 1 .783-.955l2.526-.56a.8.8 0 0 0 .625-.733l.035-.58a.8.8 0 0 0-.688-.841l-.698-.098a.6.6 0 0 1-.492-.764l2.002-6.78a1 1 0 0 0-.164-.89L15.141 1.7a1 1 0 0 0-.997-.373l-2.306.476a1 1 0 0 0-.795 1.056l.07.924a1 1 0 0 1-.109.537l-.765 1.475a1 1 0 0 0-.094.653l.47 2.395a1 1 0 0 1-.31.935l-1.507 1.36a1 1 0 0 0-.328.696l-.357 7.587a2 2 0 0 1-.248.875z\"/>";
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

/** Build a <SvLaUnion/> icon as a live SVGSVGElement (browser only). */
export function SvLaUnion(options: IconOptions = {}): SVGSVGElement {
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
