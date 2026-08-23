// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.394 22.17a1 1 0 0 0 .967-.47l.656-1.068a4 4 0 0 0 .56-1.597l.15-1.2c.049-.384.04-.773-.023-1.155l-.46-2.757a.6.6 0 0 0-.8-.464l-1.631.601a.6.6 0 0 1-.665-.174l-3.368-3.96a1 1 0 0 1 .532-1.62l4.813-1.137a1 1 0 0 0 .708-1.319l-.594-1.617a1 1 0 0 0-1.255-.603l-1.03.343a1 1 0 0 1-.774-.059l-3.84-1.972a1 1 0 0 0-.75-.067l-2.452.75a1 1 0 0 0-.705.896l-.095 1.562a1 1 0 0 1-.403.743L6.971 8.022l-5.526 4.934a.6.6 0 0 0-.193.543l.438 2.724a.6.6 0 0 0 .631.503l3.324-.213a1 1 0 0 1 .934.504l1.905 3.357a.6.6 0 0 0 .65.29l5.849-1.288a1 1 0 0 1 1.028.396l1.214 1.699a1 1 0 0 0 .698.412z\"/>";
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

/** Build a <HnLaPaz/> icon as a live SVGSVGElement (browser only). */
export function HnLaPaz(options: IconOptions = {}): SVGSVGElement {
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
