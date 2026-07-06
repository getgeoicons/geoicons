// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m15.542 19.591-6.858 3.122a.5.5 0 0 1-.386.012l-2.02-.777a.5.5 0 0 1-.293-.304L4.13 16.25a.5.5 0 0 1 .03-.393c.37-.706 1.687-3.22 2.43-4.664a.5.5 0 0 0 .049-.31L5.22 2.368a.5.5 0 0 1 .503-.582l6.886.133a.5.5 0 0 0 .294-.09l.753-.52a.5.5 0 0 1 .347-.085l1.137.143a.5.5 0 0 1 .416.64l-.206.683a.5.5 0 0 0 .203.562l1.066.704a.5.5 0 0 1 .224.426l-.082 4.836a.5.5 0 0 0 .123.337l.76.873a.5.5 0 0 1 .12.38l-.495 4.74a.5.5 0 0 0 .165.426l2.074 1.84a.5.5 0 0 1-.009.756l-1.193 1.011a.5.5 0 0 1-.358.117l-2.164-.15a.5.5 0 0 0-.242.043Z\"/>";
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

/** Build a <Gh/> icon as a live SVGSVGElement (browser only). */
export function Gh(options: IconOptions = {}): SVGSVGElement {
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
