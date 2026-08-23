// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.546 18.474a.6.6 0 0 0 .688-.556l.217-3.51a1 1 0 0 0-.04-.352l-.753-2.48a2 2 0 0 0-.353-.668l-.701-.877a1 1 0 0 1-.217-.695l.08-1.152a2 2 0 0 1 .186-.711l.703-1.492a1 1 0 0 0-.495-1.338l-2.09-.941a2 2 0 0 0-1.075-.16l-.965.123c-.238.03-.468.103-.68.215l-1.677.886a2 2 0 0 1-1.028.23l-1.353-.064a2 2 0 0 1-1.254-.52L8.802 2.648a1 1 0 0 0-.66-.261l-1.15-.017a1 1 0 0 0-.6.189L2.146 5.62a.6.6 0 0 0-.047.936l1.375 1.217a2 2 0 0 1 .578.882l.734 2.27a1 1 0 0 1-.251 1.022l-1.062 1.04a1 1 0 0 0-.258 1l1.052 3.536a1 1 0 0 1-.15.873l-.338.465a1 1 0 0 0-.156.848l.233.866a.6.6 0 0 0 1.024.247l1.306-1.442a2 2 0 0 1 .735-.512l.831-.335a2 2 0 0 1 1.43-.025l.781.283a2 2 0 0 0 1.18.057l2.34-.601.216 1.483 4.415-1.537a2 2 0 0 1 .953-.09z\"/>";
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

/** Build a <GdSaintPatrick/> icon as a live SVGSVGElement (browser only). */
export function GdSaintPatrick(options: IconOptions = {}): SVGSVGElement {
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
