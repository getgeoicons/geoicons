// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.661 12.21a2 2 0 0 0 .067-.564l-.193-7.903a.3.3 0 0 0-.304-.292l-3.754.051a1 1 0 0 0-.628.233l-2.935 2.451a1 1 0 0 0-.355.85l.111 1.351a1 1 0 0 1-.508.955l-.37.207a2 2 0 0 1-.665.23l-1.392.22a2 2 0 0 1-.867-.055l-.798-.231a4 4 0 0 0-1.741-.108l-.63.1a.6.6 0 0 0-.464.813l.29.739a.6.6 0 0 1-.2.702L1.458 13.34a.6.6 0 0 0-.243.47l-.004.237a.6.6 0 0 0 .6.611h10.962a.6.6 0 0 1 .49.253l1.074 1.517a3 3 0 0 0 .752.74l1.418.971a.6.6 0 0 1 .255.578l-.129.93a.6.6 0 0 0 .756.66l4.592-1.28a.814.814 0 0 0-.392-1.578l-2.366.514a.816.816 0 0 1-.987-.74l-.167-2.374a2 2 0 0 1 .062-.655z\"/>";
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

/** Build a <UsNewYork/> icon as a live SVGSVGElement (browser only). */
export function UsNewYork(options: IconOptions = {}): SVGSVGElement {
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
