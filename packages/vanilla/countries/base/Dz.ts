// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m19.096 3.695.305-1.722a.6.6 0 0 0-.644-.703l-6.428.58a4 4 0 0 0-1.369.375L8.817 3.251a1 1 0 0 0-.519 1.214l.704 2.147a.8.8 0 0 1-.565 1.025l-1.353.34a1 1 0 0 0-.515.317l-1.7 1.977a1 1 0 0 1-.69.346l-.993.068a2 2 0 0 0-.895.28l-.982.59a.3.3 0 0 0-.145.258v1.325c0 .1.05.194.132.25L12.6 20.986a1 1 0 0 1 .369.454l.366.904a.6.6 0 0 0 .667.365l1.928-.362a2 2 0 0 0 .789-.334l5.58-3.958a.6.6 0 0 0 .106-.882l-1.796-2.08a1 1 0 0 1-.24-.713l.17-2.837c.016-.28-.006-.56-.067-.832l-.561-2.517a3 3 0 0 0-.538-1.16l-.859-1.132a1 1 0 0 1-.025-1.175l.443-.638a1 1 0 0 0 .164-.395Z\"/>";
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

/** Build a <Dz/> icon as a live SVGSVGElement (browser only). */
export function Dz(options: IconOptions = {}): SVGSVGElement {
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
