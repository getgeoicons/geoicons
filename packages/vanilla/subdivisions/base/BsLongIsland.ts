// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.328 12.439a1 1 0 0 0-.256.824l.025.167a2 2 0 0 0 .523 1.08l1.763 1.871a1 1 0 0 0 .385.254l1.521.554a1 1 0 0 1 .568.524l1.985 4.348a.6.6 0 0 0 .945.199l.557-.497a.6.6 0 0 0 .191-.558l-.494-2.65a1 1 0 0 0-.239-.485l-1.948-2.168a1 1 0 0 0-.56-.315l-.472-.089a2.8 2.8 0 0 1-2.097-1.748l-.072-.19a3 3 0 0 1-.197-.942l-.07-1.587a2 2 0 0 0-.301-.97l-1.41-2.26c-.25-.4-.442-.832-.57-1.286l-.246-.867a4 4 0 0 0-.63-1.286L7.344 1.81a1 1 0 0 0-1.16-.34l-.095.036a1 1 0 0 0-.643.994l.06.992a1 1 0 0 0 .59.853l.634.284a1 1 0 0 1 .523.547l1.063 2.701a3 3 0 0 0 .85 1.189l.706.6a2 2 0 0 1 .617.94l.213.695a1 1 0 0 1-.222.971z\"/>";
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

/** Build a <BsLongIsland/> icon as a live SVGSVGElement (browser only). */
export function BsLongIsland(options: IconOptions = {}): SVGSVGElement {
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
