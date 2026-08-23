// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.74 10.433a3 3 0 0 0-1.903 1.177l-1.302 1.77a3 3 0 0 0-.464.937l-.738 2.526a.6.6 0 0 0 .28.69l1.16.657a1 1 0 0 0 .63.12l3.026-.417a1 1 0 0 1 .72.18l1.89 1.36a1 1 0 0 0 .948.12l2.32-.906a1 1 0 0 1 .879.074l1.223.734a.6.6 0 0 0 .81-.184l1.176-1.786a1 1 0 0 1 1.041-.428l2.945.62a1 1 0 0 0 1.185-.772l1.178-5.596a1 1 0 0 0-.03-.522l-.548-1.646a1 1 0 0 0-1.097-.673l-1.263.19a1 1 0 0 1-.962-.407L16.43 4.875a1 1 0 0 0-1.168-.353l-.9.342a2 2 0 0 0-1.14 1.108l-.063.155a.8.8 0 0 1-.852.487l-.77-.108a.8.8 0 0 0-.8.383l-1.54 2.59a1 1 0 0 1-.688.473z\"/>";
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

/** Build a <GtJalapa/> icon as a live SVGSVGElement (browser only). */
export function GtJalapa(options: IconOptions = {}): SVGSVGElement {
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
