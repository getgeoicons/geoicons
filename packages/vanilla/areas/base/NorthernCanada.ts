// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.565 14.377 3.567-4.16a.25.25 0 0 1 .398.025l.63.96a1 1 0 0 0 .82.452l1.006.015a1 1 0 0 0 .946-.632l.922-2.335a1 1 0 0 1 .73-.613l2.574-.527a1 1 0 0 0 .533-.299l2.35-2.533a.865.865 0 0 1 1.481.763l-.52 2.523a1 1 0 0 0-.008.367l.308 1.85a1 1 0 0 0 .497.707l4.094 2.296a1 1 0 0 1 .503.748l.277 2.215a.6.6 0 0 1-.821.63l-1.407-.57a1 1 0 0 1-.618-.826l-.067-.648a1 1 0 0 0-.729-.862l-.469-.13a1 1 0 0 0-1.26.85l-.043.381a1 1 0 0 0 .286.822l.543.543a.905.905 0 0 1-.83 1.525l-.622-.134a1 1 0 0 0-1.055.442l-.741 1.17a.59.59 0 0 1-.455.274c-5.733.39-10.64-2.606-12.774-4.482a.574.574 0 0 1-.046-.807Z\"/>";
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

/** Build a <NorthernCanada/> icon as a live SVGSVGElement (browser only). */
export function NorthernCanada(options: IconOptions = {}): SVGSVGElement {
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
