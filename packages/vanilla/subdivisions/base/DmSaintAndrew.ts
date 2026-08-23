// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.458 13.416a1 1 0 0 0-.724-1.016l-.995-.283a1 1 0 0 1-.7-.732l-.789-3.34a1 1 0 0 0-.674-.724l-5.622-1.763a2 2 0 0 0-1.053-.04l-1.706.399A1 1 0 0 1 8.14 5.5L5.634 1.78a1 1 0 0 0-.77-.44l-1.881-.112a.3.3 0 0 0-.294.417l.86 2.02a2 2 0 0 1 .153.938l-.11 1.405a.6.6 0 0 0 .264.545l1.7 1.14a1 1 0 0 1 .44.908L5.73 11.96a1 1 0 0 0 .313.808l.527.494a1 1 0 0 1 .301.557l.559 3.187a1 1 0 0 0 .325.579L9.022 18.7a1 1 0 0 0 1.05.17l.964-.41a1 1 0 0 1 .736-.017l1.56.576a7 7 0 0 1 1.695.906l.9.654a1 1 0 0 1 .37.525l.377 1.275a.3.3 0 0 0 .471.152l.906-.699a1 1 0 0 0 .333-.46l.287-.818a1 1 0 0 1 .483-.555l1.497-.779a1 1 0 0 0 .537-.833z\"/>";
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

/** Build a <DmSaintAndrew/> icon as a live SVGSVGElement (browser only). */
export function DmSaintAndrew(options: IconOptions = {}): SVGSVGElement {
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
