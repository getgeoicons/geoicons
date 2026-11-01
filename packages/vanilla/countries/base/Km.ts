// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.877 13.24.43-.338a1 1 0 0 0 .272-1.247L4.982 8.571a3 3 0 0 1-.315-1.734l.197-1.653a2 2 0 0 0-.049-.731l-.152-.596a1 1 0 0 0-.881-.749l-.723-.063a1 1 0 0 0-1.078.859l-.7 5.041a2 2 0 0 0 .174 1.13l.429.907a2 2 0 0 0 .657.781l2.144 1.508a1 1 0 0 0 1.192-.031Zm1.52 5.923.452.755a1 1 0 0 0 .668.467l1.777.344 1.3.19a.899.899 0 0 0 .49-1.714l-3.412-1.488a1 1 0 0 0-1.013.127l-.019.015a1 1 0 0 0-.244 1.304Zm10.344-1.862 4.042 2.728a.6.6 0 0 0 .934-.537l-.269-3.973a.6.6 0 0 0-.786-.53l-3.773 1.245a.6.6 0 0 0-.148 1.067Z\"/>";
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

/** Build a <Km/> icon as a live SVGSVGElement (browser only). */
export function Km(options: IconOptions = {}): SVGSVGElement {
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
