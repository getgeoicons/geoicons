// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.939 17.323.329 5.222a.25.25 0 0 0 .27.233l1.378-.117a.25.25 0 0 0 .226-.213l.218-1.493a.5.5 0 0 1 .16-.3l1.917-1.718a.5.5 0 0 0 .158-.459l-.437-2.489a.5.5 0 0 1 .566-.58l5.076.744-.703-2.787a.5.5 0 0 0-.257-.323l-1.367-.698a.5.5 0 0 1-.272-.426l-.084-2.128a.5.5 0 0 0-.313-.444l-1.275-.514a.5.5 0 0 1-.313-.484l.122-2.944a.5.5 0 0 0-.262-.46L9.278 1.266a.5.5 0 0 0-.265-.06l-4.027.22a.5.5 0 0 0-.267.094L3.2 2.624l2.148.938a.5.5 0 0 1 .234.209l6.062 10.551c.068.12.085.26.045.392l-.73 2.434a.5.5 0 0 0-.02.175Z\"/>";
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

/** Build a <Md/> icon as a live SVGSVGElement (browser only). */
export function Md(options: IconOptions = {}): SVGSVGElement {
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
