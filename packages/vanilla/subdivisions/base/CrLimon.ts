// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.04 9.553a.6.6 0 0 0 .255.814l2.806 1.448a2 2 0 0 0 .911.223l2.208.006a.6.6 0 0 1 .588.71l-.276 1.484a2 2 0 0 1-.333.789l-1.48 2.095a.6.6 0 0 0-.011.675l.803 1.226a.6.6 0 0 0 .427.266l1.658.206a2 2 0 0 1 1.188.592L15.42 22.8l-.077-4.537a1 1 0 0 1 .173-.579l.012-.018a1 1 0 0 1 1.28-.329l1.08.549a1 1 0 0 0 .967-.034l.52-.311a.6.6 0 0 0-.008-1.033l-1.78-1.037a3 3 0 0 1-.688-.55L10.558 8.1a3 3 0 0 1-.488-.708L6.994 1.2l-1.84 2.747a2 2 0 0 0-.339 1.113v2.534a2 2 0 0 1-.233.936z\"/>";
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

/** Build a <CrLimon/> icon as a live SVGSVGElement (browser only). */
export function CrLimon(options: IconOptions = {}): SVGSVGElement {
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
