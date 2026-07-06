// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.758 15.72-1.514-3.18a.5.5 0 0 1 .246-.672l2.114-.95a.5.5 0 0 0 .219-.19l3.74-5.984a.5.5 0 0 1 .346-.23l2.088-.325a.5.5 0 0 0 .331-.206l.998-1.417a.5.5 0 0 1 .271-.193l3.835-1.1a.5.5 0 0 1 .455.094l5.885 4.835a.5.5 0 0 1 .148.203l.933 2.367a.5.5 0 0 1-.117.543l-.76.734a.5.5 0 0 0-.153.335l-.054 1.12a.5.5 0 0 1-.284.427l-1.165.556a.5.5 0 0 0-.284.475l.088 1.817a.5.5 0 0 1-.237.45l-3.318 2.047a.5.5 0 0 1-.294.074l-2.22-.14a.5.5 0 0 0-.27.06l-1.684.92a.5.5 0 0 0-.239.584l.267.872a.5.5 0 0 1-.007.312l-.856 2.43a.5.5 0 0 1-.574.323l-2.622-.546A.5.5 0 0 1 7.793 22l-1.731-2.013a.5.5 0 0 0-.192-.137l-1.328-.538a.5.5 0 0 1-.286-.622l.358-1.07a.5.5 0 0 0-.173-.557l-1.533-1.16a.5.5 0 0 1-.15-.184Z\"/>";
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

/** Build a <Ls/> icon as a live SVGSVGElement (browser only). */
export function Ls(options: IconOptions = {}): SVGSVGElement {
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
