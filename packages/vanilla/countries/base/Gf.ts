// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.417 2.704.28-1.001a.5.5 0 0 1 .636-.342l5.976 1.944a.5.5 0 0 1 .199.122l2.501 2.501a.5.5 0 0 0 .133.095l3.436 1.694a.5.5 0 0 1 .242.26l.967 2.373a.5.5 0 0 1-.053.474l-3.751 5.38a.5.5 0 0 0-.056.104l-1.44 3.675a.5.5 0 0 1-.125.184l-2.442 2.266a.5.5 0 0 1-.596.063l-1.385-.826a.5.5 0 0 0-.376-.056l-1.178.291a.5.5 0 0 1-.314-.024l-.885-.373a.5.5 0 0 0-.49.057l-1.49 1.091a.5.5 0 0 1-.43.078L4.55 22.39a.5.5 0 0 1-.118-.05l-1.322-.775 1.06-.646a.5.5 0 0 0 .178-.184l1.114-2.007a.5.5 0 0 0 .06-.288l-.152-1.667a.5.5 0 0 1 .065-.297l1.203-2.073a.5.5 0 0 0-.088-.613l-1.266-1.207a.5.5 0 0 1-.122-.183L4.06 9.523a.5.5 0 0 1-.033-.166L3.93 5.783a.5.5 0 0 1 .126-.346l2.253-2.535a.5.5 0 0 0 .108-.198Z\"/>";
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

/** Build a <Gf/> icon as a live SVGSVGElement (browser only). */
export function Gf(options: IconOptions = {}): SVGSVGElement {
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
