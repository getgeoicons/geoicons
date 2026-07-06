// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.654 10.045-1.454.803 1.516.879a.5.5 0 0 1 .186.19l1.5 2.694a.5.5 0 0 0 .445.257l3.034-.05a.5.5 0 0 0 .217-.054l1.675-.848a.5.5 0 0 1 .465.007l2.13 1.164 1.416-.46a.5.5 0 0 1 .623.3l.323.863a.5.5 0 0 1-.302.647l-1.371.483a.5.5 0 0 1-.34-.003l-3.008-1.11-2.407.946a.5.5 0 0 1-.174.035l-2.747.048a.5.5 0 0 0-.49.496l-.015 1.902a.5.5 0 0 0 .627.487l4.871-1.282a.5.5 0 0 1 .13-.016l7.202.036c.076 0 .152.018.22.053l2.312 1.156a.5.5 0 0 0 .284.049l2.743-.33a.5.5 0 0 0 .44-.469l.083-1.48a.5.5 0 0 0-.134-.37l-2.052-2.193a.5.5 0 0 1-.132-.287l-.402-3.62a.5.5 0 0 0-.127-.28l-4.056-4.474a.5.5 0 0 0-.24-.147l-1.783-.48a.5.5 0 0 1-.249-.156l-.976-1.134a.5.5 0 0 0-.402-.173l-6.359.289a.5.5 0 0 0-.423.274L2.859 9.832a.5.5 0 0 1-.205.213Z\"/>";
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

/** Build a <Sn/> icon as a live SVGSVGElement (browser only). */
export function Sn(options: IconOptions = {}): SVGSVGElement {
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
