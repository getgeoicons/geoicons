// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.52 9.822-3.086.415a.3.3 0 0 0-.196.482l3.143 4.01a2 2 0 0 1 .425 1.31l-.034.878a.6.6 0 0 0 .196.468l4.641 4.213a2 2 0 0 0 .67.402l1.822.653a1 1 0 0 0 .796-.052l.896-.463a1 1 0 0 1 .583-.104l.884.11a1 1 0 0 0 .903-.364l.67-.834a1 1 0 0 1 .45-.317l3.553-1.237a.3.3 0 0 0 .195-.345L18.429 1.964a.3.3 0 0 0-.553-.089L14.222 8.17a1 1 0 0 1-.84.498l-2.02.049a2 2 0 0 0-.768.174l-1.933.864a2 2 0 0 1-.97.169l-1.541-.12a3 3 0 0 0-.63.018Z\"/>";
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

/** Build a <KnSaintJohnFigtree/> icon as a live SVGSVGElement (browser only). */
export function KnSaintJohnFigtree(options: IconOptions = {}): SVGSVGElement {
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
