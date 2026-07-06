// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.975 3.78.04-2.077a.5.5 0 0 1 .499-.49l8.344-.012a.5.5 0 0 1 .5.517l-.314 9.012a.5.5 0 0 0 .505.517l2.583-.025a.5.5 0 0 1 .258.069l1.198.703a.5.5 0 0 1 .025.847l-4.1 2.742a.5.5 0 0 0-.223.433l.078 2.219a.5.5 0 0 1-.172.395l-4.609 3.992a.5.5 0 0 1-.466.102l-2.322-.67a.5.5 0 0 0-.117-.02l-3.392-.15a.5.5 0 0 1-.262-.088l-4.015-2.773a.5.5 0 0 1-.2-.538l.563-2.146a.5.5 0 0 0-.041-.359l-.485-.925a.5.5 0 0 1 .006-.476l2.08-3.736a.5.5 0 0 1 .439-.257l5.968.028a.5.5 0 0 0 .494-.407l.187-.99a.5.5 0 0 0-.169-.475L6.034 4.66a.25.25 0 0 1 .172-.44l1.249.05a.5.5 0 0 0 .52-.49Z\"/>";
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

/** Build a <Gt/> icon as a live SVGSVGElement (browser only). */
export function Gt(options: IconOptions = {}): SVGSVGElement {
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
