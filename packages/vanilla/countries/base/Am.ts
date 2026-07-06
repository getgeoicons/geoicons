// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.482 8.504 1.11 3.274a.5.5 0 0 0 .443.338l3.687.224a.5.5 0 0 1 .345.168l2.034 2.31a.5.5 0 0 0 .494.155l1.673-.407a.5.5 0 0 1 .575.281l.53 1.184a.5.5 0 0 0 .457.295h2.996a.5.5 0 0 1 .461.308l2.405 5.784a.5.5 0 0 0 .564.297l1.866-.39a.5.5 0 0 0 .388-.588l-.621-3.09a.5.5 0 0 1 .025-.281l.563-1.429a.5.5 0 0 0-.249-.634l-4.453-2.144a.5.5 0 0 1-.246-.64l1.173-2.875a.5.5 0 0 0-.31-.665l-2.042-.654a.5.5 0 0 1-.248-.177l-1.46-1.956a.5.5 0 0 1 .049-.654l1.2-1.188a.5.5 0 0 0-.014-.723l-3.547-3.27a.5.5 0 0 0-.4-.128L2.25 2.437a.5.5 0 0 0-.326.812l1.617 1.983a.5.5 0 0 1 .066.526L2.502 8.133a.5.5 0 0 0-.02.371Z\"/>";
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

/** Build a <Am/> icon as a live SVGSVGElement (browser only). */
export function Am(options: IconOptions = {}): SVGSVGElement {
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
