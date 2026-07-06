// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.706 18.058-.477 3.2a.5.5 0 0 0 .527.573l7.836-.519a.5.5 0 0 0 .146-.032l5.602-2.154a.5.5 0 0 0 .29-.639l-.262-.712a.5.5 0 0 0-.45-.328l-7.634-.28-5.129.467a.5.5 0 0 0-.449.424ZM4.957 2.176l-2.421.69a.5.5 0 0 0-.057.941L7.738 6.02a.5.5 0 0 0 .508-.073L9.651 4.81a.5.5 0 0 0-.123-.85L5.286 2.194a.5.5 0 0 0-.33-.019Zm9.888.071-1.876 1.108a.5.5 0 0 0-.234.318l-.36 1.571a.5.5 0 0 0 .47.612l3.846.134a.5.5 0 0 0 .419-.202l1.724-2.324-3.568-1.258a.5.5 0 0 0-.421.04Z\"/>";
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

/** Build a <Vi/> icon as a live SVGSVGElement (browser only). */
export function Vi(options: IconOptions = {}): SVGSVGElement {
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
