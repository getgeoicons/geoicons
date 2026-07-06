// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.44 18.862-.128.811a1 1 0 0 0 .528 1.044l1.935 1.004a1 1 0 0 0 .535.109l2.95-.221a1 1 0 0 0 .925-1.03l-.058-1.795a1 1 0 0 1 .366-.806l.426-.348a1 1 0 0 0 .365-.726l.039-.811a1 1 0 0 0-.894-1.043l-.723-.075a1 1 0 0 0-.612.132L1.92 18.156a1 1 0 0 0-.48.706ZM20.857 2.227l-2.035 1.184a.986.986 0 1 0 1.011 1.692l2.007-1.232a.958.958 0 0 0-.983-1.644ZM14.154 20.84l.07.207a1 1 0 0 0 1.42.564l.682-.365a1 1 0 0 0 .351-1.448l-.203-.295a1 1 0 0 0-1.461-.204l-.548.454a1 1 0 0 0-.31 1.086Z\"/>";
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

/** Build a <Gg/> icon as a live SVGSVGElement (browser only). */
export function Gg(options: IconOptions = {}): SVGSVGElement {
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
