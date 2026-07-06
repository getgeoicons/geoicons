// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.6 6.847 9.778 9.535a.6.6 0 0 0 .169 1.065l1.367.42a1 1 0 0 1 .365.204l1.445 1.266a1 1 0 0 0 1.485-.188l1.613-2.367a1 1 0 0 0-.012-1.144l-1.22-1.707a1 1 0 0 0-1.388-.237ZM2.131 14.285l-.585.946a1 1 0 0 0 .029 1.097l.807 1.16a1 1 0 0 0 .618.408l.337.07a1 1 0 0 0 1.13-1.353l-.167-.415a1 1 0 0 1-.067-.47l.088-.906a1 1 0 0 0-1.238-1.067l-.344.086a1 1 0 0 0-.608.444ZM20.4 5.657H19a.877.877 0 0 0-.865.968c.05.537.518 1.051 1.056 1.027l.448-.02a1 1 0 0 1 .782.325l.572.626a.879.879 0 0 0 1.331-1.147l-1.146-1.41a1 1 0 0 0-.776-.37Z\"/>";
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

/** Build a <BalearicIslands/> icon as a live SVGSVGElement (browser only). */
export function BalearicIslands(options: IconOptions = {}): SVGSVGElement {
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
