// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.503 6.162a1 1 0 0 0-1.207-.207l-2.362 1.257a.6.6 0 0 1-.858-.363l-.395-1.367a.6.6 0 0 0-.528-.432l-.74-.06a.6.6 0 0 0-.64.695l.171 1.057a.6.6 0 0 1-.72.683l-4.046-.879a1 1 0 0 0-.888.241l-.018.016a1 1 0 0 0-.31.573l-.08.474a1 1 0 0 1-.634.772l-.364.136a.943.943 0 0 0-.15 1.694l5.768 3.415 5.921 2.573 3.952 1.098q.432.12.825.331l1.436.773a1 1 0 0 0 1.301-.32l1.577-2.326a1 1 0 0 0 .113-.9l-1.652-4.578a1 1 0 0 0-.574-.591l-1.835-.723a2 2 0 0 1-.742-.51z\"/>";
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

/** Build a <MxGuerrero/> icon as a live SVGSVGElement (browser only). */
export function MxGuerrero(options: IconOptions = {}): SVGSVGElement {
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
