// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.494 19.304a2 2 0 0 0 .628.712l2.498 1.74a3 3 0 0 0 1.209.495l4.026.689a1 1 0 0 0 .817-.224l.1-.085a1 1 0 0 0 .234-1.236l-.627-1.165a.6.6 0 0 1 .3-.839l2.746-1.133a1 1 0 0 0 .606-.769l.394-2.493c.048-.306.049-.618.002-.924l-.255-1.655a3 3 0 0 0-.5-1.254L19.13 8.941a2 2 0 0 1-.342-1.383l.239-1.953a1 1 0 0 0-.105-.582l-.806-1.551a1 1 0 0 0-.722-.525l-8.31-1.4a.7.7 0 0 0-.815.644l-.026.385a.7.7 0 0 1-.737.652L6.052 3.15a.7.7 0 0 0-.736.648l-.102 1.394a1 1 0 0 1-.941.926l-.66.037a.7.7 0 0 0-.636.515l-.241.882a3 3 0 0 0 .037 1.702l.27.845a3 3 0 0 0 .511.957l1.122 1.407a.6.6 0 0 1 .078.62l-.436.973a.6.6 0 0 0 .23.755l1.662 1.032a3 3 0 0 1 1.075 1.155z\"/>";
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

/** Build a <HtNordEst/> icon as a live SVGSVGElement (browser only). */
export function HtNordEst(options: IconOptions = {}): SVGSVGElement {
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
