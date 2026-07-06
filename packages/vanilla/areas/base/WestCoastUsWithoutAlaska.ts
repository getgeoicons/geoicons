// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.243 22.753-1.847-.19a.6.6 0 0 1-.538-.575l-.01-.296a1 1 0 0 0-.292-.668l-1.004-1.009a1 1 0 0 0-.254-.185l-1.01-.516a.6.6 0 0 1-.316-.415l-1.478-7.256a1 1 0 0 1 .167-.783l.442-.616a1 1 0 0 0 .188-.583V8.476a1 1 0 0 1 .129-.491l.812-1.441a1 1 0 0 0 .066-.141l.71-1.901a1 1 0 0 0 .06-.295l.108-1.924a1 1 0 0 1 .794-.924l.537-.112a1 1 0 0 1 .453.011l4.633 1.192-.521 2.689a1 1 0 0 0 .005.404l.166.76a1 1 0 0 1-.148.774L15.37 8.15a1 1 0 0 0-.153.37l-.479 2.475-2.719-.648-.877 3.425 4.259 6.52a.6.6 0 0 1 .057.544l-.594 1.537a.6.6 0 0 1-.621.38Z\"/>";
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

/** Build a <WestCoastUsWithoutAlaska/> icon as a live SVGSVGElement (browser only). */
export function WestCoastUsWithoutAlaska(options: IconOptions = {}): SVGSVGElement {
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
