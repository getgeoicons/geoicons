// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.781 21.947a.6.6 0 0 0 .815.548l5.542-2.121q.159-.061.29-.172l1.551-1.317a.72.72 0 0 1 1.152.337.72.72 0 0 0 .897.475l.075-.022a.81.81 0 0 0 .545-.973c-.748-3.064-.782-5.327-.253-9.357a.434.434 0 0 1 .534-.365.725.725 0 0 0 .89-.6l.018-.123a.84.84 0 0 0-.855-.96l-.342.01a.6.6 0 0 1-.536-.301c-.925-1.636-1.355-2.718-1.83-4.448a.6.6 0 0 0-.478-.437l-5.109-.887a1 1 0 0 0-.393.01l-3.42.78a1 1 0 0 0-.616.43l-.916 1.411a.6.6 0 0 0 .362.91l.327.08a.6.6 0 0 1 .453.662L6.141 8.1a1 1 0 0 1-.522.752l-.765.406a1 1 0 0 0-.44 1.303l.288.622a1 1 0 0 0 .86.579l1.45.07a.6.6 0 0 1 .57.587z\"/>";
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

/** Build a <TtRioClaroMayaro/> icon as a live SVGSVGElement (browser only). */
export function TtRioClaroMayaro(options: IconOptions = {}): SVGSVGElement {
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
