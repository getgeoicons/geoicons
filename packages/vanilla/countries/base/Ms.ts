// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.966 4.847-3.664 7.078a.5.5 0 0 0-.047.323l.29 1.53a.5.5 0 0 1-.102.405L5.48 15.39a.5.5 0 0 0 .124.735l1.813 1.143a.5.5 0 0 1 .17.18l1.704 3.066a.5.5 0 0 0 .15.167l2.872 2.01a.5.5 0 0 0 .346.088l3.577-.424a.5.5 0 0 0 .315-.165l2.068-2.331a.5.5 0 0 0 .045-.604l-.95-1.466a.5.5 0 0 1-.08-.308l.436-6.145a.5.5 0 0 0-.232-.458l-2.169-1.372a.5.5 0 0 1-.19-.22l-1.822-4.137a.5.5 0 0 1-.043-.202V2.663a.5.5 0 0 0-.354-.478l-2.591-.789a.5.5 0 0 0-.646.479v2.743a.5.5 0 0 1-.056.23Z\"/>";
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

/** Build a <Ms/> icon as a live SVGSVGElement (browser only). */
export function Ms(options: IconOptions = {}): SVGSVGElement {
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
