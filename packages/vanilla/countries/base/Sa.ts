// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.271 7.795.267-.935a.5.5 0 0 1 .327-.338l2.914-.947L3.682 4l2.426-.789a.5.5 0 0 1 .377.028l2.57 1.274a.5.5 0 0 1 .114.078l2.318 2.1a.5.5 0 0 0 .27.125l3.72.487 3.924 6.285a.5.5 0 0 0 .353.23l2.526.364a.5.5 0 0 1 .42.59l-.458 2.353-6.36 1.496a.5.5 0 0 0-.265.162l-1.181 1.378a.5.5 0 0 1-.482.165l-2.805-.588a.5.5 0 0 0-.433.115l-.68.6a.5.5 0 0 1-.76-.12l-1.772-2.989a.5.5 0 0 0-.128-.143l-1.012-.768a.5.5 0 0 1-.156-.197l-.392-.89a.5.5 0 0 1-.042-.178l-.065-1.375a.5.5 0 0 0-.11-.29L1.363 8.246a.5.5 0 0 1-.092-.451Z\"/>";
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

/** Build a <Sa/> icon as a live SVGSVGElement (browser only). */
export function Sa(options: IconOptions = {}): SVGSVGElement {
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
