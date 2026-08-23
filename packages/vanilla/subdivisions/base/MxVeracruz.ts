// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.891 4.222V2.336a1 1 0 0 1 .767-.972l.546-.131a1 1 0 0 1 .786.14l.982.65a1 1 0 0 1 .246.233L6.854 4.43a2 2 0 0 1 .372.854l.448 2.535a2 2 0 0 0 .48.988l2.372 2.641a3 3 0 0 1 .396.558l1.955 3.55a1 1 0 0 0 .825.517l2.084.105a1 1 0 0 1 .737.382l1.015 1.297a1 1 0 0 0 .863.381l1.175-.089a1 1 0 0 1 .855.371l1.549 1.93a1 1 0 0 1 .215.528l.043.436a1 1 0 0 1-.388.893l-.285.219a1 1 0 0 1-.608.205h-3.395a1 1 0 0 1-.746-.334l-.74-.829a1 1 0 0 0-1.015-.297l-.826.23a1 1 0 0 1-.974-.253l-.008-.009a1 1 0 0 1-.267-.946l.107-.44A1 1 0 0 0 12.7 18.8l-1.77-1.254a1 1 0 0 0-1.146-.007l-.141.098a1 1 0 0 1-.954.099l-1.1-.46a1 1 0 0 1-.614-.912l-.055-4.91a1 1 0 0 0-.547-.88l-1.435-.729a1 1 0 0 0-.99.048l-.51.326A.991.991 0 0 1 2.08 8.833l.613-.92a1 1 0 0 0 .105-.906l-.78-2.083a2 2 0 0 1-.128-.702Z\"/>";
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

/** Build a <MxVeracruz/> icon as a live SVGSVGElement (browser only). */
export function MxVeracruz(options: IconOptions = {}): SVGSVGElement {
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
