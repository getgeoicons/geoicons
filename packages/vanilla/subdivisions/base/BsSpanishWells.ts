// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.067 16.678-1.948 1.924a.489.489 0 0 1-.819-.466l.808-3.248a1 1 0 0 1 .29-.49l2.8-2.609a1 1 0 0 1 .587-.264l.314-.03a11 11 0 0 0 2.085-.404l.847-.251a2 2 0 0 0 .916-.578l1.314-1.457a1 1 0 0 1 .456-.288l.137-.041a1 1 0 0 1 .422-.033l3.112.422a1 1 0 0 0 .567-.09l2.808-1.347a11 11 0 0 0 1.97-1.215l.86-.666a.637.637 0 0 1 .89.9L21.432 7.78a7.48 7.48 0 0 1-4.244 2.666l-2.961.66c-.922.205-1.814.528-2.653.961l-1.51.779a2 2 0 0 1-.917.222H6.792a1 1 0 0 0-.876.517l-1.332 2.41a3 3 0 0 1-.517.683Z\"/>";
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

/** Build a <BsSpanishWells/> icon as a live SVGSVGElement (browser only). */
export function BsSpanishWells(options: IconOptions = {}): SVGSVGElement {
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
