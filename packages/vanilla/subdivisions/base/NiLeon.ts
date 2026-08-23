// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.81 10.458a1 1 0 0 0 .362-.803L20.09 7.22a1 1 0 0 0-.7-.92l-1.348-.425a1 1 0 0 1-.7-.978l.028-1.2a1 1 0 0 0-.13-.518l-.765-1.349a1 1 0 0 0-.91-.505l-3.513.144a.6.6 0 0 0-.545.79l1.29 3.83a1.5 1.5 0 0 1-.803 1.844l-1.598.725a2 2 0 0 0-.919.843l-1.45 2.587a2 2 0 0 1-1.436.998l-2.32.362a.535.535 0 0 0-.22.97l5.778 3.948a4 4 0 0 1 1.284 1.44l1.165 2.213a.6.6 0 0 0 1.026.06l2.722-3.974a.6.6 0 0 0-.236-.88l-1.237-.59a.958.958 0 0 1 .498-1.82l.756.067a2 2 0 0 0 1.321-.352l.906-.632a1 1 0 0 0 .428-.808l.014-1.069a1 1 0 0 1 .361-.757z\"/>";
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

/** Build a <NiLeon/> icon as a live SVGSVGElement (browser only). */
export function NiLeon(options: IconOptions = {}): SVGSVGElement {
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
