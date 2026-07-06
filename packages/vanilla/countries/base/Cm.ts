// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.761 21.77H7.737a.5.5 0 0 1-.491-.595l.21-1.082a.5.5 0 0 0-.136-.446l-2.19-2.216a.5.5 0 0 1-.135-.446l.388-2.015a.5.5 0 0 1 .15-.272L7.78 12.61a.5.5 0 0 1 .615-.051l1.282.841a.5.5 0 0 0 .727-.205l3.929-8.349a.5.5 0 0 1 .217-.228l.904-.48a.5.5 0 0 0 .22-.651l-.714-1.551a.5.5 0 0 1 .471-.709l.764.025a.5.5 0 0 1 .432.28l.831 1.687a.5.5 0 0 1 .047.152l.46 3.322a.5.5 0 0 1-.566.564l-1.476-.209a.5.5 0 0 0-.478.207l-.288.408a.5.5 0 0 0 .116.694l1.742 1.258a.5.5 0 0 1 .16.19l.751 1.58a.5.5 0 0 1-.05.513l-1.681 2.27a.5.5 0 0 0-.098.319l.11 2.556a.5.5 0 0 0 .116.3l2.5 2.988a.5.5 0 0 1 .115.294l.078 1.451a.5.5 0 0 1-.652.503l-2.45-.785a.5.5 0 0 0-.153-.024Z\"/>";
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

/** Build a <Cm/> icon as a live SVGSVGElement (browser only). */
export function Cm(options: IconOptions = {}): SVGSVGElement {
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
