// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.03 20.563 2.43 1.532 3.106-1.326a1 1 0 0 0 .604-1.012l-.15-1.62a.6.6 0 0 1 .537-.653l2.493-.253a1 1 0 0 0 .245-.057l2.612-.962a1 1 0 0 0 .548-.491l.831-1.662a1 1 0 0 0-.138-1.101l-2.055-2.377a.739.739 0 0 1 .836-1.168l3.457 1.395a1 1 0 0 0 .75-.001l1.441-.584a1 1 0 0 0 .346-.234l1.545-1.61a1 1 0 0 0 .247-.44l.869-3.342a1 1 0 0 0-.574-1.171l-2.894-1.24a3 3 0 0 0-1.363-.238l-4.635.281a3 3 0 0 0-.96.22L8.78 3.842a3 3 0 0 0-1.147.835l-5.29 6.246a3 3 0 0 0-.699 1.663l-.41 4.448a3 3 0 0 0 .02.726l.32 2.107a1 1 0 0 0 .456.697Z\"/>";
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

/** Build a <Pampas/> icon as a live SVGSVGElement (browser only). */
export function Pampas(options: IconOptions = {}): SVGSVGElement {
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
