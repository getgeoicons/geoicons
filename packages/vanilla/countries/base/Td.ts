// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.097 20.04 1.543 2.191a1 1 0 0 0 1.073.391l3.243-.857a3 3 0 0 0 .962-.448l4.072-2.87a1 1 0 0 0 .288-1.32l-.809-1.394a1 1 0 0 1-.09-.8l.812-2.602a.6.6 0 0 1 .588-.42l.544.013a.6.6 0 0 0 .615-.6V7.237a1 1 0 0 0-.539-.887L8.734 1.333a.6.6 0 0 0-.52-.016l-.68.303a.6.6 0 0 0-.328.732l.92 2.849a2 2 0 0 1 .093.72l-.223 4.22a1 1 0 0 1-.266.629l-2.32 2.496a.6.6 0 0 0-.032.779l1.547 1.97a1 1 0 0 1 .156.286l.868 2.466a.3.3 0 0 1-.2.389l-1.488.423a.3.3 0 0 0-.164.461Z\"/>";
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

/** Build a <Td/> icon as a live SVGSVGElement (browser only). */
export function Td(options: IconOptions = {}): SVGSVGElement {
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
