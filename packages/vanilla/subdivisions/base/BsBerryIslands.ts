// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.968 1.9-.326-.239a1 1 0 0 0-1.229.036l-1.057.876a1 1 0 0 0-.3 1.118l1.82 4.914a1 1 0 0 0 .896.651l2.067.085a1 1 0 0 1 .874.595l1.307 2.958a1 1 0 0 1-.016.842l-.395.811a1 1 0 0 0 .113 1.056l.907 1.156q.222.281.528.469l4.698 2.88a2 2 0 0 1 .619.596l.993 1.49c.22.33.67.407.986.17.368-.276.385-.856.133-1.24-1.024-1.566-1.834-4.83-2.076-6.87-.045-.38-.416-.642-.795-.589-2.864.398-3.949-1.918-4.21-3.627a1.27 1.27 0 0 0-.646-.92C9.265 7.703 7.847 4.37 7.362 2.494a1.06 1.06 0 0 0-.394-.594Z\"/>";
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

/** Build a <BsBerryIslands/> icon as a live SVGSVGElement (browser only). */
export function BsBerryIslands(options: IconOptions = {}): SVGSVGElement {
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
