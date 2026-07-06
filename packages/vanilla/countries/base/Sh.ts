// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.144 17.439v1.106a1 1 0 0 1-.574.905l-1.685.793a1 1 0 0 1-.267.083l-1.511.243a1 1 0 0 0-.45.194l-1.919 1.47a1 1 0 0 1-1.356-.13l-.469-.529a1 1 0 0 0-.364-.26l-.66-.275a1 1 0 0 1-.49-1.408l1.261-2.27a1 1 0 0 1 .266-.308l3.571-2.741a1 1 0 0 1 .805-.187l1.96.392a1 1 0 0 1 .678.495l1.079 1.94a1 1 0 0 1 .125.486Zm-8.75-7.735L7.187 8.618a1 1 0 0 1-.331-.744v-3.03a1 1 0 0 1 .108-.453l.95-1.876a1 1 0 0 1 .157-.226l.638-.69a1 1 0 0 1 .902-.308l2.455.418a1 1 0 0 1 .403.165l2.53 1.759a1 1 0 0 1 .218.207l1.277 1.643a1 1 0 0 1-.222 1.437l-3.24 2.232a1 1 0 0 1-.384.16l-3.402.632a1 1 0 0 1-.852-.24Z\"/>";
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

/** Build a <Sh/> icon as a live SVGSVGElement (browser only). */
export function Sh(options: IconOptions = {}): SVGSVGElement {
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
