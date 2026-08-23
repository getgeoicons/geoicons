// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.22 18.43a1 1 0 0 0 .556-.925l-.025-.876a1 1 0 0 1 .197-.625l.742-.999a1 1 0 0 0 .01-1.177l-1.08-1.513a2 2 0 0 0-.936-.714l-.819-.302a2 2 0 0 1-.998-.808l-1.068-1.689a1 1 0 0 0-.5-.404l-.877-.322a1 1 0 0 1-.653-.878l-.1-1.666a1 1 0 0 0-.216-.562l-2.606-3.28a.6.6 0 0 0-.863-.08l-.923.801a1 1 0 0 1-1.259.042l-.528-.4a.8.8 0 0 0-.77-.108l-.642.247a.8.8 0 0 0-.486.953l.807 3.019a2 2 0 0 1-.256 1.609L3.19 11.97a1 1 0 0 0-.055.996l1.028 2.038a1 1 0 0 1 .07.723l-.217.765a1 1 0 0 0 .141.844l.562.807a2 2 0 0 0 .5.5l1.678 1.166c.251.174.538.288.84.334l3.826.585a2 2 0 0 1 .627.205l2.962 1.553a1 1 0 0 0 1.113-.124l.563-.479a1 1 0 0 0 .34-.915l-.108-.69a1 1 0 0 1 .545-1.049z\"/>";
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

/** Build a <DoMonsenorNouel/> icon as a live SVGSVGElement (browser only). */
export function DoMonsenorNouel(options: IconOptions = {}): SVGSVGElement {
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
