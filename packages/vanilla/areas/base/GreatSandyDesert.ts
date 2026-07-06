// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.677 7.619-2.816.32a.662.662 0 0 0-.104 1.295l2.409.675a1 1 0 0 1 .564.412l1.276 1.931a1 1 0 0 0 .617.425l2.136.476a.6.6 0 0 0 .728-.526l.011-.116a1 1 0 0 1 1.032-.901l1.354.05a1 1 0 0 1 .45.125l2.392 1.333a.6.6 0 0 1 .126.955l-.11.106a.6.6 0 0 0 .138.96l3.672 1.946a.6.6 0 0 0 .88-.574l-.137-1.862a1 1 0 0 1 .834-1.06l2.115-.35a.594.594 0 0 0-.018-1.175l-4.065-.547a1 1 0 0 1-.451-.18l-1.992-1.434a1 1 0 0 1-.258-.273l-1.106-1.727a1 1 0 0 0-.842-.461h-2.474a1 1 0 0 1-.64-.232l-.586-.488a1 1 0 0 0-.608-.231l-2.24-.073a1 1 0 0 0-.601.178l-1.23.851a1 1 0 0 1-.456.172Z\"/>";
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

/** Build a <GreatSandyDesert/> icon as a live SVGSVGElement (browser only). */
export function GreatSandyDesert(options: IconOptions = {}): SVGSVGElement {
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
