// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.379 9.545 2.013 8.407a1 1 0 0 1-.296-.417l-.07-.187A1 1 0 0 1 2.46 6.46l2.209-.272a1 1 0 0 1 .825.281l.046.046a1 1 0 0 1 .154 1.226L4.75 9.314a.915.915 0 0 1-1.37.231Zm6.106 1.202-.062-1.425a1 1 0 0 1 .403-.846l.913-.678a1 1 0 0 1 .208-.118l1.642-.69a1 1 0 0 1 .59-.058l1.521.314a1 1 0 0 1 .166.05l1.876.742a1 1 0 0 1 .5.432l.724 1.264a1 1 0 0 1 .11.706l-.168.792a1 1 0 0 0-.018.288l.073.907a1 1 0 0 0 .862.91l1.135.154q.107.015.207.051l1.494.544a1 1 0 0 1 .283.16l.48.384a1 1 0 0 1 .376.78v1.047a1 1 0 0 1-.244.654l-.267.308a1 1 0 0 1-.977.32l-1.505-.34a1 1 0 0 1-.458-.242l-.906-.838a1 1 0 0 1-.219-.293l-.574-1.17a1 1 0 0 0-1.126-.532l-2.495.585a1 1 0 0 1-.563-.03l-2.394-.85a1 1 0 0 1-.598-.581l-.922-2.384a1 1 0 0 1-.067-.317Z\"/>";
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

/** Build a <Pf/> icon as a live SVGSVGElement (browser only). */
export function Pf(options: IconOptions = {}): SVGSVGElement {
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
