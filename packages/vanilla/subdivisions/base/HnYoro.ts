// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.75 9.631a.8.8 0 0 0-.618-.737l-3.296-.762a4 4 0 0 0-1.463-.063l-3.768.536a2 2 0 0 0-.735.257l-1.465.864a2 2 0 0 1-1.47.225l-3.52-.821a2 2 0 0 1-.884-.463L3.614 6.938a.6.6 0 0 0-.982.291l-1.304 4.898a1 1 0 0 0 .178.873l1.856 2.38a.8.8 0 0 0 .803.29l1.41-.312a.8.8 0 0 1 .86.373l.658 1.105a.8.8 0 0 0 .542.378l1.961.363a.8.8 0 0 0 .929-.62l.128-.609a1 1 0 0 1 .874-.787l2.115-.223a1 1 0 0 0 .887-.868l.146-1.142a1 1 0 0 1 .603-.794l3.717-1.572a1 1 0 0 1 .98.115l.532.39a.8.8 0 0 0 .917.02l.997-.664a.8.8 0 0 0 .355-.707z\"/>";
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

/** Build a <HnYoro/> icon as a live SVGSVGElement (browser only). */
export function HnYoro(options: IconOptions = {}): SVGSVGElement {
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
