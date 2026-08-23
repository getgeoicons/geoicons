// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path d=\"m8.223 21.157-1.97 1.352a.928.928 0 0 1-1.28-1.306l1.117-1.56c.449-.628.83-1.3 1.139-2.008l2.038-4.675a1 1 0 0 0 .03-.72L8.004 8.42a1 1 0 0 1 .057-.776l2.827-5.52a.6.6 0 0 1 .668-.312l2.102.483a1 1 0 0 0 .643-.066l1.98-.914a.6.6 0 0 1 .498-.003l1.045.47a.6.6 0 0 1 .337.408l1.46 6.124a1 1 0 0 1-.043.601l-2.684 6.747a2 2 0 0 1-.541.766l-.553.483c-.23.202-.411.454-.529.736l-1.397 3.357a1 1 0 0 1-.867.614l-2.125.12a1 1 0 0 1-.49-.096l-1.17-.562a1 1 0 0 0-.999.077Z\"/>";
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

/** Build a <BsSanSalvador/> icon as a live SVGSVGElement (browser only). */
export function BsSanSalvador(options: IconOptions = {}): SVGSVGElement {
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
