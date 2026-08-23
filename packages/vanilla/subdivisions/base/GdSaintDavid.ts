// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.882 5.008a1 1 0 0 0-.712.252L2.903 7.278a1 1 0 0 0-.332.834l.442 5.048a1 1 0 0 1-.467.935l-.76.474a1 1 0 0 0-.467.763l-.065.747a2 2 0 0 0 .266 1.181l.954 1.632a1 1 0 0 0 1.18.444l.804-.268a1 1 0 0 1 .665.01l1.947.723q.315.117.65.161l1.3.172a.99.99 0 0 0 1.118-.92.99.99 0 0 1 .487-.794l.082-.048a.917.917 0 0 1 1.327.481.917.917 0 0 0 1.32.484l4.197-2.421a3 3 0 0 0 .886-.78l1.61-2.112 2.327-2.3a1 1 0 0 0 .256-.994l-.11-.37a1 1 0 0 0-.61-.655l-4.498-1.667a3 3 0 0 1-.965-.584L12.59 3.981a.6.6 0 0 0-.633-.108L9.324 4.976a2 2 0 0 1-.868.154z\"/>";
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

/** Build a <GdSaintDavid/> icon as a live SVGSVGElement (browser only). */
export function GdSaintDavid(options: IconOptions = {}): SVGSVGElement {
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
