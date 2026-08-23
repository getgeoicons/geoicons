// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path d=\"M8.975 9.682 2.18 8.04a.944.944 0 0 1 .406-1.843l5.811 1.157a1 1 0 0 0 .634-.082l1.513-.737a1 1 0 0 1 1.093.143l3.884 3.365a10 10 0 0 1 1.49 1.61l.612.826a10 10 0 0 0 2.075 2.08l2.154 1.6a.994.994 0 0 1-.64 1.791l-1.008-.048a1 1 0 0 1-.721-.358l-.451-.541a1 1 0 0 0-1.097-.305l-.64.223a1 1 0 0 1-1.125-.34l-.847-1.113a1 1 0 0 1-.202-.554l-.114-2.198a1 1 0 0 0-.284-.647l-2.56-2.616a1 1 0 0 0-.99-.262l-1.687.482a1 1 0 0 1-.51.01Z\"/>";
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

/** Build a <BsNorthAbaco/> icon as a live SVGSVGElement (browser only). */
export function BsNorthAbaco(options: IconOptions = {}): SVGSVGElement {
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
