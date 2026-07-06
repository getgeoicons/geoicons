// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.13 13.585 1.678 1.172a.6.6 0 0 0 .814-.12l1.935-2.448a1 1 0 0 1 .785-.38h2.176q.173 0 .335.058l6.45 2.3a1 1 0 0 1 .48.364l1.576 2.222a1 1 0 0 0 .554.387l3.887 1.056-.333-2.124a1 1 0 0 0-.439-.68l-3.694-2.43 2.413-.747a.6.6 0 0 0 .41-.69l-.209-1.051a1 1 0 0 0-.338-.571l-1.761-1.475a2 2 0 0 0-.927-.434l-5.97-1.086a2 2 0 0 0-1.304.206L8.022 8.522a1 1 0 0 1-1.096-.1L4.51 6.496a1 1 0 0 0-1.465.242L1.405 9.29a1 1 0 0 0-.147.694l.456 2.934a1 1 0 0 0 .416.666Z\"/>";
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

/** Build a <GreatVictoriaDesert/> icon as a live SVGSVGElement (browser only). */
export function GreatVictoriaDesert(options: IconOptions = {}): SVGSVGElement {
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
