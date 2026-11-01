// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m21.429 11.166-.727.287a1 1 0 0 0-.623 1.069l.517 3.699a1 1 0 0 1-.353.909l-2.955 2.442a.6.6 0 0 1-.969-.336l-.666-3.107a1 1 0 0 0-.69-.749l-1.842-.55a1 1 0 0 1-.61-.517l-.786-1.593a2 2 0 0 0-.616-.731l-1.31-.954a2 2 0 0 0-.83-.354l-3.864-.68a1 1 0 0 1-.745-.589l-.685-1.589a1 1 0 0 0-.4-.46L1.666 6.39a.6.6 0 0 1-.229-.774l.514-1.065a1 1 0 0 1 .697-.544l.732-.152a1 1 0 0 1 .526.032l2.164.736a1 1 0 0 0 .718-.028l.566-.244a1 1 0 0 1 .914.064l3.334 2.022a1 1 0 0 0 .424.14l2.564.244a2 2 0 0 1 1.153.508l1.04.942a2 2 0 0 0 1.356.518l3.737-.026a.6.6 0 0 1 .554.84l-.451 1.034a1 1 0 0 1-.55.53Z\"/>";
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

/** Build a <Abkhazia/> icon as a live SVGSVGElement (browser only). */
export function Abkhazia(options: IconOptions = {}): SVGSVGElement {
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
