// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.326 5.67 5.179.052a.6.6 0 0 0 .606-.6l-.004-3.32a.6.6 0 0 1 .603-.6l5.207.017a.8.8 0 0 1 .763 1.03l-.226.755a2 2 0 0 0-.023 1.068l.07.275a.6.6 0 0 0 .745.43l1.904-.54a1 1 0 0 1 1.13.448l.404.673a1 1 0 0 1-.292 1.339l-.811.557a1 1 0 0 0-.383.508l-.387 1.16a1 1 0 0 0 .567 1.24l1.081.447a1 1 0 0 1 .618.963l-.124 3.217a3 3 0 0 1-.427 1.433l-.486.807a1 1 0 0 1-.999.474l-2.424-.348a1 1 0 0 1-.755-.547l-.414-.838a.862.862 0 0 0-1.634.443l.04.56a.6.6 0 0 1-.66.638l-1.5-.154a.8.8 0 0 0-.876.694l-.06.469a1 1 0 0 0 .266.815l.884.932a1 1 0 0 1 .263.838l-.034.222a1 1 0 0 1-.65.79l-1.57.567a1 1 0 0 1-1.047-.233l-4.419-4.416a5 5 0 0 1-.918-1.262l-2.397-4.69a.6.6 0 0 1 .32-.834l.694-.265a1 1 0 0 0 .624-.74l.759-3.83a.8.8 0 0 1 .793-.645Z\"/>";
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

/** Build a <Ga/> icon as a live SVGSVGElement (browser only). */
export function Ga(options: IconOptions = {}): SVGSVGElement {
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
