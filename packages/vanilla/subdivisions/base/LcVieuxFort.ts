// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.55 1.243a.42.42 0 0 0-.322.377l-.182 2.546a1 1 0 0 0 .118.548L8.67 9.332a3 3 0 0 1 .338 1.814l-.627 4.87a1 1 0 0 0 .073.522l.764 1.784a1 1 0 0 0 .888.605l1.815.058c.267.008.526.098.742.256l.073.055a1.072 1.072 0 0 1 .138 1.606l-.333.346a.774.774 0 0 0 .435 1.302l.866.14a3 3 0 0 0 1.351-.093l.256-.078a.82.82 0 0 0 .28-1.417l-.205-.168a1.5 1.5 0 0 1-.348-1.914l2.558-4.425a1 1 0 0 0 .066-.864l-.572-1.47a4 4 0 0 0-.751-1.221L9.613 3.398a4 4 0 0 0-.626-.565L6.89 1.312a.42.42 0 0 0-.34-.07Z\"/>";
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

/** Build a <LcVieuxFort/> icon as a live SVGSVGElement (browser only). */
export function LcVieuxFort(options: IconOptions = {}): SVGSVGElement {
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
