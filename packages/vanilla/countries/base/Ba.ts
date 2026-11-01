// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.326 20.38-.057-.121a2 2 0 0 1 .097-1.884l.726-1.206a.92.92 0 0 1 .872-.442.928.928 0 0 0 1-1.002.942.942 0 0 1 .977-1.02l.897.042a.735.735 0 0 0 .547-1.26l-1.18-1.146a.56.56 0 0 1 .542-.94l.678.19a.825.825 0 0 0 .745-1.435L20.1 8.468a1 1 0 0 1-.212-1.312l1.002-1.574a.899.899 0 0 0-.988-1.352l-1.546.408a1 1 0 0 1-1.122-.468l-.29-.503a1 1 0 0 0-.762-.497L6.928 2.2a2 2 0 0 0-1.716.675l-.048.055a1 1 0 0 1-1.43.08l-.654-.602a1 1 0 0 0-.634-.262l-.153-.007a1 1 0 0 0-1.04 1.047l.051 1.098a2 2 0 0 0 .481 1.209l1.272 1.48a2 2 0 0 1 .459.993l.193 1.226a2 2 0 0 0 .52 1.062l6.581 6.982a1 1 0 0 1 .27.74l-.025.477a1 1 0 0 0 .926 1.052l.533.038a1 1 0 0 1 .636.291l1.628 1.632a.96.96 0 0 0 1.548-1.087Z\"/>";
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

/** Build a <Ba/> icon as a live SVGSVGElement (browser only). */
export function Ba(options: IconOptions = {}): SVGSVGElement {
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
