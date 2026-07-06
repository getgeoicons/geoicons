// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.974 11.739-1.67.14a.5.5 0 0 0-.303.86l7.717 7.383a.5.5 0 0 0 .298.137l5.326.513a.5.5 0 0 1 .19.059l3.149 1.71a.5.5 0 0 0 .412.03l.732-.271a.5.5 0 0 0 .317-.562l-.87-4.642a.5.5 0 0 1 .098-.401l1.544-1.97a.5.5 0 0 0 .104-.353l-.43-4.856a.5.5 0 0 1 .032-.227l1.646-4.174a.5.5 0 0 0 .03-.116l.392-2.833a.5.5 0 0 0-.663-.54l-5.368 1.905a.5.5 0 0 1-.38-.019l-1.471-.693a.5.5 0 0 0-.573.105L10.28 7.011a.5.5 0 0 1-.667.046l-.61-.477a.5.5 0 0 0-.5-.068L5.676 7.68a.5.5 0 0 0-.29.323l-.973 3.376a.5.5 0 0 1-.438.36Z\"/>";
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

/** Build a <Ni/> icon as a live SVGSVGElement (browser only). */
export function Ni(options: IconOptions = {}): SVGSVGElement {
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
