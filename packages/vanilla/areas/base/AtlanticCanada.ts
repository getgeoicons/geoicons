// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.654 10.174v-.83a1 1 0 0 1 .836-.986l.74-.123a1 1 0 0 0 .678-1.526L2.696 3.257a.845.845 0 0 1 1.246-1.111l3.43 2.798a1 1 0 0 0 .631.225h3.28a1 1 0 0 1 .6.2l2.048 1.536a1 1 0 0 1 .345.474l.547 1.585a1 1 0 0 0 1.097.663l1.865-.287a1 1 0 0 1 .844.268l1.664 1.597a1 1 0 0 1-.366 1.667l-4.765 1.643a1 1 0 0 1-1.312-.777l-.613-3.584a1 1 0 0 0-1.543-.662l-4.132 2.774a1 1 0 0 1-.657.165l-1.925-.193a1 1 0 0 1-.5-.195l-1.426-1.07a1 1 0 0 1-.4-.8ZM8.19 21.659l-1.698-1.941a1 1 0 0 1 .225-1.508l1.903-1.182a1 1 0 0 1 1.35.28l.312.452a1 1 0 0 0 .823.431h1.215a1 1 0 0 0 .937-.649l.134-.36a1 1 0 0 1 1.384-.543l.08.04a1 1 0 0 1 .404 1.418l-2.512 4.093a1 1 0 0 1-1.072.452l-2.953-.666a1 1 0 0 1-.532-.317Z\"/>";
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

/** Build a <AtlanticCanada/> icon as a live SVGSVGElement (browser only). */
export function AtlanticCanada(options: IconOptions = {}): SVGSVGElement {
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
