// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.965 11.632-.567 1.906a1 1 0 0 0 .146.868l1.415 1.972a1 1 0 0 0 .499.367l1.805.596a1 1 0 0 1 .55.447l.871 1.498a1 1 0 0 0 .487.424l3.388 1.381a1 1 0 0 1 .217.122l1.768 1.307a1 1 0 0 0 .836.166l3.397-.85a1 1 0 0 0 .652-.522l1.185-2.37a1 1 0 0 0 .097-.32l.3-2.318a1 1 0 0 1 .565-.776l.542-.255a1 1 0 0 0 .571-.982l-.022-.288a1 1 0 0 0-.202-.53l-1.132-1.485a1 1 0 0 0-.666-.386l-.974-.126a1 1 0 0 1-.858-1.152l.025-.157a1 1 0 0 1 .534-.731l.596-.303a1 1 0 0 0 .517-.65l.579-2.321A1 1 0 0 0 20 5.456l-1.565-2.974a1 1 0 0 0-.654-.507l-3.108-.736a1 1 0 0 0-.33-.022l-2.376.237a1 1 0 0 0-.65.333L7.913 5.641a1 1 0 0 0-.089.116L5.142 9.875a1 1 0 0 1-.312.305l-1.432.887a1 1 0 0 0-.433.565Z\"/>";
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

/** Build a <ColoradoPlateau/> icon as a live SVGSVGElement (browser only). */
export function ColoradoPlateau(options: IconOptions = {}): SVGSVGElement {
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
