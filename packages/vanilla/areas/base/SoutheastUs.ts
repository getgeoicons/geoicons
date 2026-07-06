// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.256 11.893 1.2 7.832l5.048-.21a1 1 0 0 0 .715-.346L8.27 5.764a1 1 0 0 1 .625-.338l1.264-.167a1 1 0 0 0 .632-.347l.81-.959a.6.6 0 0 1 .592-.197l1.592.366a.6.6 0 0 0 .64-.262l.993-1.556a1 1 0 0 1 .74-.457l2.327-.242a1 1 0 0 1 .752.233L21 3.338a1 1 0 0 1 .26.343l1.256 2.723a1 1 0 0 1-.18 1.106l-3.937 4.166c-1.649 1.665-1.283 3.575-.815 4.312l1.549 2.705c.596.963.754 2.024.736 2.72-.01.33-.24.593-.546.713l-.136.054a1 1 0 0 1-1.123-.276l-1.953-2.254a1 1 0 0 1-.244-.642l-.015-1.1a1 1 0 0 0-.289-.69l-.66-.667a1 1 0 0 0-1.175-.183l-.494.259a1 1 0 0 1-1.054-.079l-.578-.422a1 1 0 0 0-.701-.186l-2.216.249a.83.83 0 0 0-.717 1.014.83.83 0 0 1-.682 1.01l-1.063.165a1 1 0 0 1-.322-.002l-3.219-.55a.6.6 0 0 1-.485-.72l.335-1.543a1 1 0 0 0-.056-.603l-1.14-2.691a1 1 0 0 1-.08-.376Z\"/>";
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

/** Build a <SoutheastUs/> icon as a live SVGSVGElement (browser only). */
export function SoutheastUs(options: IconOptions = {}): SVGSVGElement {
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
