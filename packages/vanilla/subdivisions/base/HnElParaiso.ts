// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.17 14.844a2 2 0 0 1 1.42-.488l3.757.201a1 1 0 0 0 .864-.412l1.75-2.42a1 1 0 0 1 1.36-.25l3.006 1.976a.8.8 0 0 0 1.225-.52l.107-.56a1 1 0 0 1 .416-.639l1.07-.735a.8.8 0 0 0 .211-1.107L22 9.36a.8.8 0 0 0-.809-.339l-2.516.466a1 1 0 0 1-.828-.22L15.209 7.03a1 1 0 0 0-.96-.187l-1.514.5a1 1 0 0 1-.653-.01L8.576 6.07a1 1 0 0 0-1.079.267L5.033 9.043a1 1 0 0 0-.256.583l-.248 2.761a2 2 0 0 1-.587 1.244l-2.118 2.092a.8.8 0 0 0 .047 1.181l.966.813a.8.8 0 0 0 1.04-.008z\"/>";
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

/** Build a <HnElParaiso/> icon as a live SVGSVGElement (browser only). */
export function HnElParaiso(options: IconOptions = {}): SVGSVGElement {
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
