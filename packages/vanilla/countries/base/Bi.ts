// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.096 21.075-3.225 1.52a.5.5 0 0 1-.656-.22l-3.221-6.143a.5.5 0 0 1-.055-.281l.352-3.592a.5.5 0 0 0-.373-.533l-.564-.146a.5.5 0 0 1-.368-.573l.385-2.118a.5.5 0 0 0-.159-.464c-.471-.423-1.633-1.477-2.375-2.254a.49.49 0 0 1-.11-.48l.438-1.433a.5.5 0 0 1 .564-.347l1.96.343a.5.5 0 0 1 .406.398l.235 1.23a.5.5 0 0 0 .566.4l4.844-.734a.5.5 0 0 0 .425-.48l.096-3.216a.5.5 0 0 1 .681-.451l1.712.667a.5.5 0 0 0 .378-.006l1.963-.842a.5.5 0 0 1 .516.075l.794.657a.5.5 0 0 1 .172.483l-.762 3.823a.5.5 0 0 0 .357.58l2.912.803a.5.5 0 0 1 .367.49l-.033 2.11a.5.5 0 0 1-.191.385l-3.523 2.77a.5.5 0 0 0-.185.317l-.32 2.06a.5.5 0 0 1-.282.377l-.92.43a.5.5 0 0 0-.22.198l-2.363 3.999a.5.5 0 0 1-.218.198Z\"/>";
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

/** Build a <Bi/> icon as a live SVGSVGElement (browser only). */
export function Bi(options: IconOptions = {}): SVGSVGElement {
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
