// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.725 22.528 2.373 1.658a.3.3 0 0 1 .36-.353l9.27 2.13a2 2 0 0 1 .84.418l1.462 1.23a1 1 0 0 0 .816.22l1.172-.205a2 2 0 0 1 1.041.096l4.104 1.524a.3.3 0 0 1 .175.39l-.41 1.06a1.6 1.6 0 0 0-.006 1.143c.184.494.201 1.034.05 1.54l-.04.133a2.83 2.83 0 0 1-.868 1.33l-.087.076a3 3 0 0 0-1.019 1.857l-.435 3.077a3 3 0 0 1-.804 1.654l-2.063 2.155a1 1 0 0 1-.882.296l-1.794-.29a3 3 0 0 0-2.031.394l-1.09.658a2 2 0 0 1-.774.272l-2.302.3a.3.3 0 0 1-.333-.235Z\"/>";
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

/** Build a <KnSaintGeorgeGingerland/> icon as a live SVGSVGElement (browser only). */
export function KnSaintGeorgeGingerland(options: IconOptions = {}): SVGSVGElement {
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
