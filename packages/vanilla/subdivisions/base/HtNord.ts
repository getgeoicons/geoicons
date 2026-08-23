// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.728 3.11a.6.6 0 0 0-.376.729l.404 1.436a3 3 0 0 0 .38.835l3.057 4.655a3 3 0 0 0 .683.734L7.64 12.85a.8.8 0 0 0 1.123-.15l.875-1.15a1 1 0 0 1 1.248-.286l.612.31a1 1 0 0 1 .547.93l-.084 2.227a.6.6 0 0 0 .55.621l1.56.127a1 1 0 0 1 .92.982l.042 2.882a1 1 0 0 0 .344.74l1.864 1.62a.8.8 0 0 0 .903.1l4.006-2.152a.6.6 0 0 0 .176-.914l-2.576-3.07a2 2 0 0 1-.373-.678l-.99-3.102a1 1 0 0 1 .19-.95l.922-1.09c.223-.265.374-.582.438-.922l.255-1.353a1 1 0 0 0-.576-1.099l-3.708-1.65a1 1 0 0 0-.803-.005l-2.293.988a1 1 0 0 1-1.178-.295L10.62 4.24a1 1 0 0 0-.676-.371L7.815 3.64a2 2 0 0 1-.973-.377L5.464 2.248a1 1 0 0 0-.928-.136z\"/>";
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

/** Build a <HtNord/> icon as a live SVGSVGElement (browser only). */
export function HtNord(options: IconOptions = {}): SVGSVGElement {
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
