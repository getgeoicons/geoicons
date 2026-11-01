// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.783 22.511 3.556-1.882a1 1 0 0 1 .544-.113l1.385.106a.6.6 0 0 0 .555-.915l-1.787-2.87a1 1 0 0 0-.515-.414l-.965-.343a1 1 0 0 1-.538-.453l-.346-.617a2 2 0 0 1-.127-1.687l.366-.966a1 1 0 0 1 .607-.59l.93-.324a1 1 0 0 0 .659-.78l.271-1.631a1 1 0 0 0-.336-.925l-1.65-1.409a1 1 0 0 0-.536-.233l-.658-.075a1 1 0 0 1-.887-.994v-.569a1 1 0 0 0-.363-.77L9.902 1.538a.6.6 0 0 0-.795.028L7.524 3.07a1 1 0 0 0-.152 1.267l.104.161a1 1 0 0 1-.481 1.475l-1.14.439a1 1 0 0 0-.592.622l-.498 1.522a.6.6 0 0 0 .132.597l1.268 1.356a1 1 0 0 0 .73.318h.833a1 1 0 0 1 .968 1.253l-.073.278a1 1 0 0 0 .302 1l.844.752a1 1 0 0 1 .238 1.175l-.894 1.887a2 2 0 0 0-.14 1.31l.385 1.651a2 2 0 0 0 .787 1.175l1.59 1.133a1 1 0 0 0 1.048.07Z\"/>";
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

/** Build a <Gy/> icon as a live SVGSVGElement (browser only). */
export function Gy(options: IconOptions = {}): SVGSVGElement {
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
