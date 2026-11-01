// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path d=\"m6.283 10.35 2.993 2.263a9 9 0 0 1 2.044 2.161l1.518 2.259a7.8 7.8 0 0 1 1.325 4.272l.002.131a.946.946 0 0 0 .78.922l1.706.303a1 1 0 0 0 1.094-.59l.058-.136a5 5 0 0 0 .403-2.179l-.024-.586a5 5 0 0 0-.217-1.265l-.39-1.267a5 5 0 0 0-.913-1.703l-.248-.301a3 3 0 0 1-.64-1.414l-.715-4.326a2 2 0 0 0-.444-.963l-.917-1.087a5 5 0 0 1-.697-1.086l-.148-.314a5 5 0 0 1-.472-1.863l-.016-.287a2 2 0 0 0-.286-.927l-.469-.774a.8.8 0 0 0-.697-.385l-1.49.025a.6.6 0 0 0-.528.865l.24.486A3 3 0 0 1 9.42 4.3l-.076.586a3 3 0 0 1-.523 1.341L7.8 7.673a7 7 0 0 1-.638.78l-.954 1.006a.6.6 0 0 0 .074.892Z\"/>";
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

/** Build a <BsAndros/> icon as a live SVGSVGElement (browser only). */
export function BsAndros(options: IconOptions = {}): SVGSVGElement {
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
