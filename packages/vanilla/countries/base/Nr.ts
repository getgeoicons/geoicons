// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m17.776 19.382-3.915 2.49a4 4 0 0 1-1.128.494l-.563.148a4 4 0 0 1-1.621.087l-1.116-.17c-.202-.03-.408 0-.592.089-.354.17-.775.121-1.079-.128l-.986-.805a3 3 0 0 0-.463-.311l-1.383-.754a4 4 0 0 1-1.003-.776l-.68-.725a4 4 0 0 1-.937-1.672l-.507-1.838a4 4 0 0 1-.131-1.38l.1-1.26a4 4 0 0 1 .234-1.067l.29-.787a4 4 0 0 1 1.136-1.642L6.2 6.98l3.694-3.99q.292-.316.645-.561l.655-.458a4 4 0 0 1 2.451-.717l1.914.078a4 4 0 0 1 1.324.283l1.077.43a4 4 0 0 1 1.215.764l1.409 1.29a4 4 0 0 1 1.177 1.97l.12.479a4 4 0 0 1-.816 3.555l-.475.565a4 4 0 0 0-.535.822l-1.058 2.17a4 4 0 0 0-.398 1.956l.1 1.977a2 2 0 0 1-.924 1.79\"/>";
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

/** Build a <Nr/> icon as a live SVGSVGElement (browser only). */
export function Nr(options: IconOptions = {}): SVGSVGElement {
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
