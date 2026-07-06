// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.594 17.36-.028-5.866a.5.5 0 0 1 .493-.502l1.11-.016a.5.5 0 0 0 .494-.495l.08-7.614a.5.5 0 0 1 .424-.489l4.14-.646a.5.5 0 0 1 .476.193l.457.606a.5.5 0 0 0 .609.153l2.755-1.272a.5.5 0 0 1 .665.248l1.527 3.39a.5.5 0 0 0 .167.203l3.058 2.16a.5.5 0 0 1 .188.257l.643 2.026a.5.5 0 0 0 .41.344l1.78.24a.5.5 0 0 1 .263.12l1.131.993-2.884.971a.5.5 0 0 0-.16.09l-2.548 2.123a.5.5 0 0 0-.17.285l-.23 1.13a.5.5 0 0 1-.245.337l-1.693.946a.5.5 0 0 0-.23.28l-.59 1.793a.5.5 0 0 1-.453.343l-2.186.098a.5.5 0 0 1-.309-.09l-1.413-.983A.5.5 0 0 0 9 18.628l-.716.056a.5.5 0 0 0-.39.243L6.13 21.891a.5.5 0 0 1-.313.23l-2.444.587a.25.25 0 0 1-.303-.295l.42-1.993a.5.5 0 0 0-.085-.396L1.69 17.651a.5.5 0 0 1-.095-.29Z\"/>";
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

/** Build a <Bw/> icon as a live SVGSVGElement (browser only). */
export function Bw(options: IconOptions = {}): SVGSVGElement {
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
