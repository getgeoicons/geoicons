// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.422 14.23 3.425 3.232a1 1 0 0 0 .76.27l1.341-.1a1 1 0 0 0 .827-.563l.33-.685a.8.8 0 0 1 .933-.424l5.28 1.448a1 1 0 0 0 .625-.032l1.445-.558a4 4 0 0 0 1.196-.725l2.693-2.363a.8.8 0 0 0 .14-1.04l-.634-.967a1 1 0 0 0-.696-.44l-1.128-.16a1 1 0 0 1-.8-.65l-.211-.581a1 1 0 0 0-.642-.614l-1.046-.327a.6.6 0 0 0-.72.312l-.328.68a.6.6 0 0 1-.894.224l-.914-.668a.6.6 0 0 1-.223-.651l.16-.552a.6.6 0 0 0-.316-.708l-2.553-1.226a.6.6 0 0 0-.526.004l-1.162.574a.6.6 0 0 1-.522.005l-1.144-.539a.6.6 0 0 0-.518.003l-5.555 2.7a1 1 0 0 0-.488 1.28l1.15 2.798a3 3 0 0 0 .715 1.042Z\"/>";
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

/** Build a <Cz/> icon as a live SVGSVGElement (browser only). */
export function Cz(options: IconOptions = {}): SVGSVGElement {
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
