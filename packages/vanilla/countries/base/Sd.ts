// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m20.535 3.566-15.37.04.08 2.792-1.335.04.04 5.865-1.091.063a.5.5 0 0 0-.44.322l-1.14 3.006a.5.5 0 0 0 .024.408l1.884 3.628a.5.5 0 0 0 .604.243l2.087-.706a.5.5 0 0 1 .587.212l.376.615a.5.5 0 0 0 .527.229l3.66-.754a.5.5 0 0 1 .243.01l1.409.42a.5.5 0 0 0 .485-.116l1.078-1.015a.5.5 0 0 0 .153-.425l-.116-.95a.5.5 0 0 1 .396-.55l.652-.133a.5.5 0 0 1 .587.373l.777 3.25 2.846-4.032a.5.5 0 0 0 .085-.206l.877-5.261a.5.5 0 0 1 .208-.328L22.8 9.147l-1.5-1.17a.5.5 0 0 1-.187-.324z\"/>";
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

/** Build a <Sd/> icon as a live SVGSVGElement (browser only). */
export function Sd(options: IconOptions = {}): SVGSVGElement {
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
