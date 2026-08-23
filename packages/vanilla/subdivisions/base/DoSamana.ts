// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.558 16.455a1 1 0 0 0-.092-.648l-.725-1.414a1 1 0 0 1-.092-.649l.489-2.496a.6.6 0 0 1 .705-.473l5.799 1.144a3 3 0 0 0 .827.047l2.382-.196a4 4 0 0 1 1.24.091l2.09.49a1 1 0 0 0 1.187-.687l.143-.48a2 2 0 0 1 .798-1.084l.514-.347a2 2 0 0 0 .586-.612l.239-.389a.827.827 0 0 0-1.032-1.19l-1.98.854a.524.524 0 0 1-.568-.86l1.215-1.157a.797.797 0 0 0-1.023-1.218l-2.705 2.002a2 2 0 0 1-1.722.32l-1.361-.376q-.601-.166-1.225-.205l-2.56-.159a2 2 0 0 0-1.119.262l-.395.226a3 3 0 0 1-1.153.378l-5.209.594a.6.6 0 0 0-.531.569l-.055 1.213a.6.6 0 0 0 .52.622l1.8.242a.946.946 0 0 1 .219 1.82l-1.405.549a.6.6 0 0 0-.375.651l.114.729a2 2 0 0 0 .344.847L4.2 17.95a2 2 0 0 0 .64.581l.454.26a.6.6 0 0 0 .887-.406z\"/>";
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

/** Build a <DoSamana/> icon as a live SVGSVGElement (browser only). */
export function DoSamana(options: IconOptions = {}): SVGSVGElement {
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
