// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.054 17.638-4.656-4.957a.5.5 0 0 1-.105-.172l-.94-2.587a.5.5 0 0 1 .252-.62L7.7 6.34a.5.5 0 0 1 .432-.002l1.245.587a.5.5 0 0 0 .435-.004l1.263-.625a.5.5 0 0 1 .438-.003l2.7 1.297a.5.5 0 0 1 .264.59l-.206.712a.5.5 0 0 0 .185.543l1 .73a.5.5 0 0 0 .773-.256l.226-.735a.5.5 0 0 1 .624-.332l1.591.484a.5.5 0 0 1 .334.337l.221.747a.5.5 0 0 0 .347.34l1.919.53a.5.5 0 0 1 .314.26l.84 1.689a.25.25 0 0 1-.191.36l-1.096.143a.5.5 0 0 0-.355.225l-1.484 2.3a.5.5 0 0 1-.43.23l-1.639-.034a.5.5 0 0 0-.393.178l-.636.758a.5.5 0 0 1-.534.156l-5.102-1.618a.5.5 0 0 0-.615.29l-.458 1.131a.5.5 0 0 1-.427.311l-1.829.136a.5.5 0 0 1-.401-.157Z\"/>";
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
