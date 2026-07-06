// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.536 22.044-.837.044a.5.5 0 0 1-.371-.138l-1.864-1.777a.5.5 0 0 0-.309-.137l-1.288-.094a.5.5 0 0 1-.463-.526l.068-1.252a.5.5 0 0 0-.135-.37L4.011 10.02a.5.5 0 0 1-.13-.265l-.346-2.198a.5.5 0 0 0-.115-.248L1.454 5.02a.5.5 0 0 1-.12-.302l-.108-2.27a.5.5 0 0 1 .52-.524l.944.04a.5.5 0 0 1 .317.131l1.231 1.131a.5.5 0 0 0 .715-.04l.951-1.09a.5.5 0 0 1 .43-.168l10.696 1.12a.5.5 0 0 1 .382.249l.677 1.178a.5.5 0 0 0 .47.25l2.212-.164a.5.5 0 0 1 .489.713L19.967 8.01a.5.5 0 0 0 .112.58l2.116 1.964a.5.5 0 0 1-.174.838l-.866.306a.5.5 0 0 0-.221.787l.913 1.124a.5.5 0 0 1-.262.799l-1.44.375a.5.5 0 0 0-.373.522l.067.872a.5.5 0 0 1-.52.538l-.825-.036a.5.5 0 0 0-.44.226l-1.655 2.528a.5.5 0 0 0-.042.47l.613 1.445a.5.5 0 0 1-.434.695Z\"/>";
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

/** Build a <Ba/> icon as a live SVGSVGElement (browser only). */
export function Ba(options: IconOptions = {}): SVGSVGElement {
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
