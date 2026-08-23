// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.244 9.321a1 1 0 0 0 .59.74l1.127.48a2 2 0 0 1 .96.865l2.005 3.586a1 1 0 0 0 .745.504l2.67.344a1 1 0 0 1 .86.834l.135.845a.8.8 0 0 1-.642.912l-2.36.444a.7.7 0 0 0-.4 1.145l1.928 2.24a.8.8 0 0 0 1.054.142l3.925-2.646a1 1 0 0 0 .407-1.087l-.314-1.176a1 1 0 0 1 .327-1.028l.568-.47a1 1 0 0 0 .205-1.307l-.829-1.302a1 1 0 0 1 .161-1.268l3.117-2.91a1 1 0 0 0 .27-.425l.983-3.062a.8.8 0 0 0-.367-.94l-1.595-.904a1 1 0 0 0-.823-.073l-.974.34a1 1 0 0 1-1.226-.498l-.853-1.713a1 1 0 0 0-1.155-.52l-2.798.753a2 2 0 0 0-.96.586l-1.26 1.386a5 5 0 0 1-.78.697L3.577 7.973a1 1 0 0 0-.4.992z\"/>";
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

/** Build a <HnComayagua/> icon as a live SVGSVGElement (browser only). */
export function HnComayagua(options: IconOptions = {}): SVGSVGElement {
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
