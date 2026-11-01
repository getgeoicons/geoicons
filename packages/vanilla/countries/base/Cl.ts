// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.455 21.948.008-1.117a.6.6 0 0 0-.496-.596l-.276-.048a1 1 0 0 1-.824-.917l-.06-.87a1 1 0 0 1 .05-.386l.8-2.375a1 1 0 0 0 .034-.51l-.287-1.477a1 1 0 0 1 .02-.467l1.091-3.8a1 1 0 0 0 .001-.547l-.174-.618a1 1 0 0 1 .017-.597l1.094-3.185a1 1 0 0 0-.058-.786l-.906-1.741a.6.6 0 0 0-.947-.156l-.357.342a.6.6 0 0 0-.18.37l-.639 6.116a2 2 0 0 1-.126.52l-.64 1.638a2 2 0 0 0-.132.865l.048.684c.016.234-.01.468-.074.693l-.659 2.282a6 6 0 0 0-.156 2.637l.328 1.994a3 3 0 0 0 1.928 2.33l.766.281a.6.6 0 0 0 .806-.559Z\"/>";
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

/** Build a <Cl/> icon as a live SVGSVGElement (browser only). */
export function Cl(options: IconOptions = {}): SVGSVGElement {
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
