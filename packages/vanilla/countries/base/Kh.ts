// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.253 10.152 2.562 5.14a.5.5 0 0 1 .052.197l.166 3.126a.5.5 0 0 0 .84.339l.84-.783a.5.5 0 0 1 .744.07l.407.551a.5.5 0 0 1-.033.633l-.424.466a.5.5 0 0 0 .341.836l3.05.177a.5.5 0 0 0 .223-.038l4.172-1.76a.5.5 0 0 1 .417.013l1.783.885a.5.5 0 0 0 .651-.192l.186-.311a.5.5 0 0 0-.032-.56l-1.62-2.118a.5.5 0 0 1 .213-.769l6.125-2.425a.5.5 0 0 0 .314-.51l-.203-2.259a.5.5 0 0 1 .04-.244l.64-1.47a.5.5 0 0 0-.008-.418l-.897-1.849a.5.5 0 0 1-.034-.344l.755-2.897a.25.25 0 0 0-.359-.284l-2.526 1.337a.5.5 0 0 1-.56-.064l-.69-.595a.5.5 0 0 0-.565-.061l-1.04.565a.5.5 0 0 0-.26.461l.054 1.222a.5.5 0 0 1-.716.472l-4.06-1.95a.5.5 0 0 0-.234-.05l-7.21.247a.5.5 0 0 0-.441.297l-.904 2.04a.5.5 0 0 1-.263.259l-1.243.521a.5.5 0 0 0-.306.461V9.93a.5.5 0 0 0 .053.223Z\"/>";
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

/** Build a <Kh/> icon as a live SVGSVGElement (browser only). */
export function Kh(options: IconOptions = {}): SVGSVGElement {
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
