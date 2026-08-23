// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.22 8.1.589-5.273a.3.3 0 0 1 .421-.24l5.177 2.33a.3.3 0 0 0 .416-.21l.261-1.217a.3.3 0 0 1 .406-.215l1.063.43a.3.3 0 0 1 .183.33l-.344 1.958a.3.3 0 0 0 .295.352h1.59a2 2 0 0 1 1.051.299l1.74 1.076a3 3 0 0 0 .845.357l7.38 1.86a.6.6 0 0 1 .45.648l-.068.605a.6.6 0 0 1-.227.407l-3.188 2.484a1 1 0 0 1-.644.21l-1.391-.04a1 1 0 0 0-.864.447l-.816 1.234a2 2 0 0 1-.36.411l-2.263 1.954a3 3 0 0 0-.886 1.326l-.495 1.494a.602.602 0 0 1-1.126.045l-.468-1.111a3 3 0 0 0-1.2-1.395l-.755-.461a1 1 0 0 1-.475-.939l.078-.904a1 1 0 0 0-.129-.582l-1.83-3.201a1 1 0 0 0-.348-.358l-3.042-1.856a2 2 0 0 1-.9-1.225l-.08-.325a2 2 0 0 1-.047-.704Z\"/>";
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

/** Build a <KnSaintAnneSandyPoint/> icon as a live SVGSVGElement (browser only). */
export function KnSaintAnneSandyPoint(options: IconOptions = {}): SVGSVGElement {
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
