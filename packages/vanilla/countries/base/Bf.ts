// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.594 15.848.483 4.04-2.648-1.298a.5.5 0 0 0-.35-.033l-1.68.453a.5.5 0 0 1-.402-.064l-2.536-1.649a.5.5 0 0 1-.223-.48l.425-3.505a.5.5 0 0 1 .298-.399l2.266-.983a.5.5 0 0 0 .299-.505l-.15-1.593a.5.5 0 0 1 .167-.421l.841-.745a.5.5 0 0 1 .407-.12l1.686.259a.5.5 0 0 0 .486-.209L9.479 6.42a.5.5 0 0 1 .21-.172l4.774-2.08a.5.5 0 0 1 .263-.038l1.89.24a.5.5 0 0 1 .433.439l.24 2.077a.5.5 0 0 0 .242.372l1.511.897a.5.5 0 0 1 .24.503l-.108.733a.5.5 0 0 0 .351.552l2.08.62a.5.5 0 0 1 .319.288l.707 1.703a.5.5 0 0 1-.212.625l-3.528 2.033a.5.5 0 0 1-.34.058l-2.46-.455a.5.5 0 0 0-.294.035l-1.305.58a.5.5 0 0 1-.22.042l-5.164-.182a.5.5 0 0 0-.514.559Z\"/>";
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

/** Build a <Bf/> icon as a live SVGSVGElement (browser only). */
export function Bf(options: IconOptions = {}): SVGSVGElement {
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
