// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.201 20.35-1.664 1.53a.25.25 0 0 0 .13.43l2.918.462a.5.5 0 0 0 .328-.06L10.54 21.2a.5.5 0 0 0 .213-.243l1.493-3.622a.5.5 0 0 0 .033-.118l.642-4.426a.5.5 0 0 0-.445-.569l-2.345-.236a.5.5 0 0 0-.385.126L7.59 14.058a.5.5 0 0 0-.104.133L6.122 16.7a.5.5 0 0 0-.058.29l.297 2.942a.5.5 0 0 1-.16.418ZM16.992 3.327l-1.312.444a.5.5 0 0 0-.336.408l-.182 1.387a.5.5 0 0 0 .693.525l2.958-1.268a.5.5 0 0 0 .288-.337l.611-2.427a.5.5 0 0 0-.398-.615l-.967-.17a.5.5 0 0 0-.56.33l-.482 1.411a.5.5 0 0 1-.313.312Z\"/>";
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

/** Build a <Gd/> icon as a live SVGSVGElement (browser only). */
export function Gd(options: IconOptions = {}): SVGSVGElement {
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
