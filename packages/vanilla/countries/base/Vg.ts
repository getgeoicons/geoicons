// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.976 14.102 2.039-2.071a2 2 0 0 1 1.166-.58l2.74-.358a2 2 0 0 1 .85.073l1.034.32a.748.748 0 0 1-.388 1.443l-.184-.042a1.94 1.94 0 0 0-1.6.341l-.079.06a2 2 0 0 1-1.067.397l-.404.028a2 2 0 0 0-.968.328l-1.083.717a1 1 0 0 1-.804.134l-1.113-.289a.3.3 0 0 1-.139-.5Zm12.452-2.719.627-2.163a.3.3 0 0 1 .297-.217l2.509.079a.3.3 0 0 1 .157.55l-3.136 2.085a.3.3 0 0 1-.454-.334Zm-16.42 1.05 1.769-.216a.735.735 0 0 0 .007-1.458l-.647-.086a1 1 0 0 0-.625.122l-.88.5a.611.611 0 0 0 .375 1.137Z\"/>";
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

/** Build a <Vg/> icon as a live SVGSVGElement (browser only). */
export function Vg(options: IconOptions = {}): SVGSVGElement {
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
