// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.155 1.333-2.244.051L3.6 2.85a.5.5 0 0 1-.028.477l-.65 1.045a.5.5 0 0 0-.027.48l.41.855a.5.5 0 0 1-.096.569L1.362 8.131a.5.5 0 0 0-.144.392l.26 3.263a.5.5 0 0 0 .082.236l2.77 4.188a.5.5 0 0 0 .239.19l5.516 2.113a.5.5 0 0 1 .285.28l1.428 3.52 2.998.36q.082.01.163-.007l5.213-1.107a.5.5 0 0 0 .147-.056l2.48-1.436-1.6-1.17a.5.5 0 0 1-.19-.277l-.69-2.644a.5.5 0 0 1 .005-.27l.64-2.142a.5.5 0 0 0-.148-.518L19.523 11.9a.5.5 0 0 1-.143-.53l.754-2.314a.5.5 0 0 0-.196-.57l-2.411-1.623a.5.5 0 0 1-.213-.326l-.174-.963a.5.5 0 0 0-.246-.346l-6.806-3.843-1.462 2.003a.5.5 0 0 1-.207.165L6.054 4.565a.5.5 0 0 1-.686-.357l-.15-.714a.5.5 0 0 1 .015-.258l.409-1.247a.5.5 0 0 0-.487-.656Z\"/>";
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

/** Build a <Tz/> icon as a live SVGSVGElement (browser only). */
export function Tz(options: IconOptions = {}): SVGSVGElement {
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
