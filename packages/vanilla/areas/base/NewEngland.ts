// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.349 16.711 3.868 22.8l2.103-.83a1 1 0 0 1 .286-.067l2.703-.22 4.684-.978a.6.6 0 0 0 .475-.642l-.048-.528a.6.6 0 0 0-.706-.536l-.867.16a1 1 0 0 1-1.05-.493l-.189-.333a1 1 0 0 1-.127-.554l.082-1.311a1 1 0 0 1 .152-.471l1.413-2.242a1 1 0 0 1 .365-.344l5.953-3.264a1 1 0 0 0 .305-1.496l-1.226-1.557a1 1 0 0 1-.213-.566l-.192-3.643a1 1 0 0 0-.394-.744l-.843-.641a1 1 0 0 0-.545-.202l-1.027-.062a1 1 0 0 0-.906.464L12.64 3.943a1 1 0 0 0-.092.186l-1.245 3.356a1 1 0 0 1-.295.418l-1.23 1.032a1 1 0 0 1-.65.234L5.182 9.14l-.227 3.054a1 1 0 0 0 .002.177l.416 4a1 1 0 0 1-.023.34Z\"/>";
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

/** Build a <NewEngland/> icon as a live SVGSVGElement (browser only). */
export function NewEngland(options: IconOptions = {}): SVGSVGElement {
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
