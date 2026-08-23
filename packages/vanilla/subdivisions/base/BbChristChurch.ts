// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.118 9.906a.3.3 0 0 1-.169.301l-5.061 2.435a.3.3 0 0 0 .04.556l5.788 1.795a1 1 0 0 0 .43.036l1.2-.163a3 3 0 0 1 1.236.09l.54.156a1.96 1.96 0 0 1 1.287 1.185l.384 1.01a1 1 0 0 0 .446.518l.526.295a1 1 0 0 0 .808.075l2.595-.874a2 2 0 0 0 1.072-.858l.871-1.437a1 1 0 0 1 .675-.465l.728-.133c.35-.065.676-.22.945-.453l.872-.751a.6.6 0 0 0 .051-.86l-2.739-2.99a2 2 0 0 1-.524-1.276l-.035-.95a1 1 0 0 0-.811-.945l-2.397-.46a1 1 0 0 0-.767.167l-1.76 1.25a2 2 0 0 1-.734.323L7.257 8.644a.3.3 0 0 0-.234.324z\"/>";
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

/** Build a <BbChristChurch/> icon as a live SVGSVGElement (browser only). */
export function BbChristChurch(options: IconOptions = {}): SVGSVGElement {
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
