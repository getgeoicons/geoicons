// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.216 12.068.787 2.603a.5.5 0 0 0 .294.32l5.624 2.236a.5.5 0 0 1 .145.088l5.707 5.002a.5.5 0 0 0 .282.122l3.439.328a.5.5 0 0 0 .5-.284l.87-1.84a.5.5 0 0 1 .534-.28l3.496.583-2.169-2.653a.5.5 0 0 1-.113-.322l.023-2.046a.5.5 0 0 0-.155-.368l-4.991-4.75a.5.5 0 0 1-.105-.58l2.078-4.282a.5.5 0 0 0-.335-.705l-1.621-.383a.5.5 0 0 1-.342-.284l-1.13-2.552a.5.5 0 0 0-.391-.294L9.947 1.24a.5.5 0 0 0-.472.205L8.347 3.021a.5.5 0 0 1-.257.186l-1.143.36a.5.5 0 0 0-.35.454L6.41 8.086a.5.5 0 0 1-.231.4L1.427 11.5a.5.5 0 0 0-.211.567Z\"/>";
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

/** Build a <Iq/> icon as a live SVGSVGElement (browser only). */
export function Iq(options: IconOptions = {}): SVGSVGElement {
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
