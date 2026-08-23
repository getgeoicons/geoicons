// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.504 21.346-1.098-.311a1 1 0 0 1-.72-.84l-.453-3.652a2 2 0 0 1 .004-.524l.306-2.187a2 2 0 0 1 .454-1.014l.656-.775a2 2 0 0 1 .857-.593l.503-.179a1 1 0 0 0 .653-.79l.373-2.426a1 1 0 0 1 .225-.494l2.23-2.635a.3.3 0 0 1 .283-.1l.725.133a.3.3 0 0 0 .34-.2l.563-1.708a.6.6 0 0 1 .733-.389l.284.08a.6.6 0 0 1 .368.299l.948 1.803a1 1 0 0 0 .34.374l1.766 1.148a1 1 0 0 1 .452.905l-.011.17a1 1 0 0 0 .283.765L15.735 9.4a2 2 0 0 1 .43.661l.6 1.514a2 2 0 0 0 .372.6l5.387 5.99a.3.3 0 0 1-.101.475l-4.455 1.982a2 2 0 0 1-1.26.122l-4.206-.965a3 3 0 0 0-1.105-.044l-1.29.189a3 3 0 0 1-1.214-.072l-1.783-.48a1 1 0 0 0-.922.216l-1.75 1.545a1 1 0 0 1-.934.213Z\"/>";
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

/** Build a <KnSaintMaryCayon/> icon as a live SVGSVGElement (browser only). */
export function KnSaintMaryCayon(options: IconOptions = {}): SVGSVGElement {
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
