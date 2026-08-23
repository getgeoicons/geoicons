// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.914 13.842a1 1 0 0 0 .458-.559l.301-.92a1 1 0 0 0-.052-.752l-.726-1.48a1 1 0 0 0-.637-.524l-1.043-.282a1 1 0 0 1-.462-.274l-3.886-4.065a4 4 0 0 0-.658-.554l-1.441-.97a4 4 0 0 0-.672-.364l-.397-.169a4 4 0 0 0-1.744-.313l-.31.014a4 4 0 0 0-1.454.346L5.57 4.6a2 2 0 0 0-.83.691L1.572 9.897a2 2 0 0 0-.351 1.198l.187 5.842a3 3 0 0 0 .108.704l.781 2.824a.6.6 0 0 0 .99.276L5.62 18.54a1 1 0 0 1 .893-.252l2.46.52a1 1 0 0 0 .916-.275l1.728-1.74a1 1 0 0 1 .691-.294l2.45-.045a2 2 0 0 0 1.177-.41l.608-.465a2 2 0 0 1 1.236-.41l1.485.016a1 1 0 0 0 .504-.13z\"/>";
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

/** Build a <BbSaintLucy/> icon as a live SVGSVGElement (browser only). */
export function BbSaintLucy(options: IconOptions = {}): SVGSVGElement {
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
