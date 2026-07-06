// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.295 12.287-.085 4.208a.5.5 0 0 0 .512.51l2.3-.052a.5.5 0 0 1 .414.204l2.509 3.404a.5.5 0 0 0 .48.197l3.848-.605a.5.5 0 0 0 .357-.247l2.453-4.31a.5.5 0 0 1 .72-.164l1.6 1.11a.5.5 0 0 0 .73-.182l4.053-7.86a.5.5 0 0 1 .163-.184l1.087-.743a.5.5 0 0 0 .162-.642l-1.622-3.148a.5.5 0 0 0-.706-.197l-1.538.946a.5.5 0 0 1-.249.074l-9.102.251a.5.5 0 0 1-.266-.068L6.57 3.307a.5.5 0 0 0-.405-.044l-2.093.676a.5.5 0 0 0-.281.228l-.86 1.51a.5.5 0 0 0-.063.31l.388 3.134a.5.5 0 0 1-.087.348L1.386 12.01a.5.5 0 0 0-.091.277Z\"/>";
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

/** Build a <Ng/> icon as a live SVGSVGElement (browser only). */
export function Ng(options: IconOptions = {}): SVGSVGElement {
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
