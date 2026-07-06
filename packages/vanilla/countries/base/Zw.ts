// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.211 9.026 1.2 8.556l2.675 4.762a.5.5 0 0 0 .195.193l2.23 1.222a.5.5 0 0 1 .244.316l.222.88a.5.5 0 0 0 .485.378h1.094l.637 2.758a.5.5 0 0 0 .258.332l3.217 1.66q.076.038.162.05l5.333.729 3.07-3.16a.5.5 0 0 0 .095-.14l1.588-3.488a.5.5 0 0 0-.002-.42l-.65-1.385a.5.5 0 0 1-.028-.348l.754-2.664a.5.5 0 0 0 .019-.157l-.177-4.339a.5.5 0 0 0-.338-.452l-4.199-1.439a.5.5 0 0 0-.162-.027h-2.34V2.164L11.714 3.17a.5.5 0 0 0-.374.484v1.588a.5.5 0 0 1-.316.465l-2.749 1.09a.5.5 0 0 0-.216.165l-1.4 1.867a.5.5 0 0 1-.447.198Z\"/>";
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

/** Build a <Zw/> icon as a live SVGSVGElement (browser only). */
export function Zw(options: IconOptions = {}): SVGSVGElement {
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
