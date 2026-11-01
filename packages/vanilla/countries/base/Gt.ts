// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m17.41 5.785.047-4.281a.3.3 0 0 0-.3-.303l-8.673.018a.3.3 0 0 0-.299.295l-.04 2.381a.3.3 0 0 1-.31.295l-1.417-.047a.3.3 0 0 0-.197.534l4.695 3.742a.6.6 0 0 1 .22.546l-.11.858a.6.6 0 0 1-.577.522l-5.561.168a1 1 0 0 0-.836.5L2.063 14.47a1 1 0 0 0-.133.498l-.002 3.163a1 1 0 0 0 .458.84l3.613 2.333c.324.21.686.354 1.066.426l5.109.973a1 1 0 0 0 .89-.271l3.892-3.846a1 1 0 0 0 .293-.614l.168-1.708a1 1 0 0 1 .402-.707l3.73-2.746a.6.6 0 0 0-.026-.984l-.925-.612a1 1 0 0 0-.675-.158l-2.485.31a.3.3 0 0 1-.337-.316z\"/>";
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

/** Build a <Gt/> icon as a live SVGSVGElement (browser only). */
export function Gt(options: IconOptions = {}): SVGSVGElement {
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
