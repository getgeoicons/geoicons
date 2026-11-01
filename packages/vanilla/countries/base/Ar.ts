// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.642 18.619.956-3.633a2 2 0 0 0 .063-.622l-.159-2.808a2 2 0 0 1 .118-.798l.98-2.683a2 2 0 0 0 .083-1.069L8.51 6.12a2 2 0 0 1 .093-1.091l1.182-3.12a1 1 0 0 1 .894-.646l1.053-.044a1 1 0 0 1 .78.326l1.375 1.51a1 1 0 0 0 1.098.26l1.174-.452a.818.818 0 0 1 .717 1.462l-1.624.983a1 1 0 0 0-.456.63l-.39 1.677a1 1 0 0 0 .144.784l.37.55a1 1 0 0 1 .01 1.1l-.148.23a1 1 0 0 1-.72.45l-1.053.13a1 1 0 0 0-.75.5l-2.021 3.574a1 1 0 0 0 .032 1.038l.188.288a1 1 0 0 1-.012 1.11l-.671.982a1 1 0 0 0-.072 1.006l1.262 2.563a.6.6 0 0 1-.548.864l-1.034-.016a.6.6 0 0 1-.59-.605l.01-1.189a1 1 0 0 0-.495-.871l-1.388-.814a.6.6 0 0 1-.278-.67Z\"/>";
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

/** Build a <Ar/> icon as a live SVGSVGElement (browser only). */
export function Ar(options: IconOptions = {}): SVGSVGElement {
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
