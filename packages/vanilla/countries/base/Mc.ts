// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.604 19.23 4.928 3.57 2.337-2.138-3.1-2.226a.25.25 0 0 1-.044-.366l.617-.719a.25.25 0 0 1 .31-.056l2.915 1.604a.5.5 0 0 0 .409.033l1.4-.497a.5.5 0 0 0 .262-.214l1.791-2.976-3.598 1.087a.5.5 0 0 1-.632-.369l-.46-2.049a.5.5 0 0 1 .385-.6l3.66-.759a.5.5 0 0 0 .376-.343l.412-1.349a.5.5 0 0 1 .126-.208l1.505-1.495a.5.5 0 0 0 .124-.506l-.604-1.891a.5.5 0 0 1 .152-.532l1.386-1.186a.5.5 0 0 1 .735.095l.357.514a.5.5 0 0 0 .582.184l.639-.233a.5.5 0 0 0 .32-.557l-.545-3.07a.5.5 0 0 0-.293-.371l-.442-.192a.5.5 0 0 0-.671.293l-.277.791a.5.5 0 0 1-.316.31l-2.524.83a.5.5 0 0 0-.235.165l-1.064 1.341a.5.5 0 0 0-.104.246l-.271 2.073a.5.5 0 0 1-.097.237l-1.517 2.004a.5.5 0 0 1-.561.171l-.917-.315a.5.5 0 0 0-.502.107L5.13 14.704a.5.5 0 0 0-.148.473l.364 1.66a.5.5 0 0 1-.204.518l-1.53 1.058a.5.5 0 0 0-.008.816Z\"/>";
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

/** Build a <Mc/> icon as a live SVGSVGElement (browser only). */
export function Mc(options: IconOptions = {}): SVGSVGElement {
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
