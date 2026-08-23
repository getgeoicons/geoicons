// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.11 13.35a.8.8 0 0 0 .766.411l2.145-.18a.6.6 0 0 1 .597.35l2.334 5.164a1 1 0 0 0 1.112.567l4.023-.824a1 1 0 0 1 .748.142l2.16 1.41a.6.6 0 0 0 .887-.283l2.604-6.634a.6.6 0 0 0-.546-.82l-3.264-.07a1 1 0 0 1-.9-.609L16.77 9.598a2 2 0 0 0-.902-.985l-3.425-1.825a1 1 0 0 1-.53-.89l.006-.734a1 1 0 0 0-1.128-1l-2.775.358a2 2 0 0 1-.68-.028L1.997 3.338a.623.623 0 0 0-.653.95l.815 1.243a2 2 0 0 1 .32.933l.17 2.07a2 2 0 0 0 .242.803z\"/>";
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

/** Build a <JmSaintMary/> icon as a live SVGSVGElement (browser only). */
export function JmSaintMary(options: IconOptions = {}): SVGSVGElement {
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
