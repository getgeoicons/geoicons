// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.379 14.123 3.655-.175a.6.6 0 0 1 .566.333l.796 1.601a.6.6 0 0 0 .581.332l1.153-.084a.6.6 0 0 0 .543-.473l.11-.51a.6.6 0 0 1 .704-.463l1.348.27a.6.6 0 0 1 .48.533l.292 3.21a1 1 0 0 0 .81.892l4.41.835a1 1 0 0 1 .566.324l1.493 1.702a.6.6 0 0 0 .722.14l.621-.315a.6.6 0 0 0 .33-.55l-.017-.666a.6.6 0 0 0-.357-.534l-.988-.437a1 1 0 0 1-.595-.893l-.034-1.538a1 1 0 0 1 .87-1.014l.855-.11a.6.6 0 0 0 .431-.913l-.895-1.436a2 2 0 0 1-.293-.856l-.311-3.059a2 2 0 0 1 .086-.816l.816-2.53c.075-.23.19-.446.342-.635l.986-1.233a.6.6 0 0 0 .041-.692l-.93-1.493a2 2 0 0 0-1.31-.905L16.95 1.31a2 2 0 0 0-1.094.09l-2.396.905a2 2 0 0 1-1.457-.018l-1.681-.681a1 1 0 0 0-.982.13l-.454.347a1 1 0 0 0-.378.615l-.822 4.459a2 2 0 0 1-.536 1.034l-.707.725a2 2 0 0 0-.469.775l-.52 1.586a1 1 0 0 1-.873.687l-2.325.177a.992.992 0 0 0 .123 1.98Z\"/>";
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

/** Build a <Cd/> icon as a live SVGSVGElement (browser only). */
export function Cd(options: IconOptions = {}): SVGSVGElement {
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
