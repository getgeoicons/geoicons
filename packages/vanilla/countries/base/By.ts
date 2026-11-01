// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.068 19.867 1.564-.648a3 3 0 0 1 1.751-.168l10.28 2.105a1 1 0 0 0 1.195-.871l.06-.548a1.41 1.41 0 0 1 1.228-1.245l.237-.03a.996.996 0 0 0 .786-1.398l-.939-2.079a.6.6 0 0 1 .266-.777l.128-.068a.6.6 0 0 1 .557-.002l.522.271a1 1 0 0 0 1.15-.163l.271-.258a1 1 0 0 0 .081-1.362L18.95 8.689a2 2 0 0 1-.449-1.48l.161-1.56a1 1 0 0 0-.424-.924l-1.116-.776a2 2 0 0 0-.657-.299l-3.356-.839a2 2 0 0 0-1.432.179L9.383 4.22a1 1 0 0 0-.526.858l-.02.896a1 1 0 0 1-.454.815l-1.19.776a1 1 0 0 0-.447.723L6.59 9.624a1 1 0 0 1-.736.852l-3.544.943a.6.6 0 0 0-.421.75l.853 2.886a1 1 0 0 1-.212.948l-.958 1.078a1 1 0 0 0-.21.956l.366 1.198a1 1 0 0 0 1.34.632Z\"/>";
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

/** Build a <By/> icon as a live SVGSVGElement (browser only). */
export function By(options: IconOptions = {}): SVGSVGElement {
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
