// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.12 3.703V2.31a.962.962 0 0 0-1.74-.565l-.125.172a1 1 0 0 0-.177.755l.512 3.03a1 1 0 0 1-.04.491L9.488 9.295a1 1 0 0 0-.01.613l.905 2.992q.105.348.29.66l.367.619a1 1 0 0 1 .104.774l-.411 1.498a1 1 0 0 0 .236.95l.905.962a1 1 0 0 1 .27.619l.176 2.65a1 1 0 0 0 .58.84l.22.103a1 1 0 0 0 .945-.058l.051-.032a1 1 0 0 0 .473-.896l-.097-2.1a2 2 0 0 0-.217-.819l-.8-1.564a1 1 0 0 1-.11-.445l-.09-8.903a2 2 0 0 0-.105-.62l-.945-2.794a2 2 0 0 1-.105-.64Z\"/>";
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

/** Build a <BsHarbourIsland/> icon as a live SVGSVGElement (browser only). */
export function BsHarbourIsland(options: IconOptions = {}): SVGSVGElement {
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
