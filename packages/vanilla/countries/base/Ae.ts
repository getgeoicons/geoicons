// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.963 20.54-11.029-1.4a.5.5 0 0 1-.326-.182l-4.298-5.33a.5.5 0 0 1-.111-.314v-.393a.5.5 0 0 1 .802-.4l1.618 1.224a.5.5 0 0 0 .523.05l1.459-.722a.5.5 0 0 1 .28-.048l4.782.558a.5.5 0 0 0 .211-.021l2.765-.89a.5.5 0 0 0 .291-.247l1.255-2.432a.5.5 0 0 1 .093-.127l5.893-5.8a.5.5 0 0 1 .844.273l.695 4.091a.5.5 0 0 1-.442.581l-1.356.14a.5.5 0 0 0-.439.597l.63 3.12a.5.5 0 0 1-.283.556l-1.62.732a.5.5 0 0 0-.269.3l-1.276 3.887a.5.5 0 0 0-.024.122l-.108 1.612a.5.5 0 0 1-.561.463Z\"/>";
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

/** Build a <Ae/> icon as a live SVGSVGElement (browser only). */
export function Ae(options: IconOptions = {}): SVGSVGElement {
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
