// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.373 7.382a1 1 0 0 0-.506.692l-.269 1.41a1 1 0 0 1-.263.509l-1.598 1.653a1 1 0 0 0-.255.468l-.13.555a1 1 0 0 0 .4 1.045l1.952 1.371a3 3 0 0 1 .676.655l1.225 1.634a3 3 0 0 1 .395.71l.727 1.863a.6.6 0 0 0 .797.333l.592-.256a.6.6 0 0 0 .362-.536l.012-.466a1 1 0 0 1 .502-.843l1.524-.874a1 1 0 0 1 .702-.111l1.194.25a1 1 0 0 0 .955-.317l1.938-2.195a1 1 0 0 0 .054-1.257l-.446-.602a.6.6 0 0 1 .354-.943l5.751-1.252a2 2 0 0 0 1.232-.833l.081-.121a2 2 0 0 0 .325-.85l.06-.44a2 2 0 0 0-.192-1.166l-1.832-3.663a.6.6 0 0 0-.537-.331h-3.998a3 3 0 0 0-.49.04l-5.496.91a3 3 0 0 0-.939.323z\"/>";
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

/** Build a <BsCentralAndros/> icon as a live SVGSVGElement (browser only). */
export function BsCentralAndros(options: IconOptions = {}): SVGSVGElement {
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
