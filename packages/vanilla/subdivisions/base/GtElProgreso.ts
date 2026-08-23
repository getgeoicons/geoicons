// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.586 4.17a1 1 0 0 0-.368-.209l-1.135-.354a2 2 0 0 0-1.417.085l-1.149.517q-.3.136-.567.334l-9.213 6.899a.6.6 0 0 0-.237.55l.058.487a.6.6 0 0 1-.608.67l-2.1-.041a.6.6 0 0 0-.61.636l.026.436a.6.6 0 0 0 .565.562l1.384.077a.6.6 0 0 1 .548.749l-.218.846a2 2 0 0 0 .233 1.547l.378.614a2 2 0 0 0 .981.817l2.194.85a2 2 0 0 0 1.844-.21l.858-.58a2 2 0 0 1 1.224-.342l1.09.055a1 1 0 0 0 .939-.538l1.362-2.63a.6.6 0 0 1 .695-.303l.816.23a.6.6 0 0 0 .702-.314l.369-.757a2 2 0 0 1 .984-.951l2.43-1.083a1 1 0 0 0 .59-.835l.048-.605a1 1 0 0 0-.34-.833l-1.77-1.54a.549.549 0 0 1 .502-.944l2.22.593a.603.603 0 0 0 .557-1.032z\"/>";
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

/** Build a <GtElProgreso/> icon as a live SVGSVGElement (browser only). */
export function GtElProgreso(options: IconOptions = {}): SVGSVGElement {
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
