// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.112 17.758-.6-1.599a.98.98 0 0 0-1.11-.616l-.153.03a.626.626 0 0 1-.742-.714l.387-2.364a1 1 0 0 0-.987-1.161H2.791a1 1 0 0 1-.73-.316l-.24-.256a1 1 0 0 1-.02-1.345l.197-.225a.704.704 0 0 1 .902-.13c.283.176.65.131.881-.109l.702-.728a1 1 0 0 0 .271-.824l-.198-1.51a1 1 0 0 1 .32-.871l.442-.4a1 1 0 0 1 1.33-.012l.914.8a1 1 0 0 0 .31.184l2.793 1.037a1 1 0 0 1 .415.292l1.04 1.227a1 1 0 0 0 .894.346l2.194-.291a1 1 0 0 1 1.046.587l.43.972q.083.187.233.328l1.155 1.072a1 1 0 0 0 .43.235l2.321.598a1 1 0 0 0 .156.028l1.095.102a.634.634 0 0 1 .469.981l-1.246 1.884a1 1 0 0 1-.23.244l-.888.676a1 1 0 0 1-1.14.05l-.094-.06a1 1 0 0 0-.571-.154l-.166.006a1 1 0 0 0-.77.407l-1.346 1.833a1 1 0 0 1-.354.3l-2.728 1.383a1 1 0 0 1-1.103-.133l-1.378-1.181a.945.945 0 0 0-1.074-.109.945.945 0 0 1-1.343-.494Z\"/>";
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

/** Build a <TheGreatLakesBasin/> icon as a live SVGSVGElement (browser only). */
export function TheGreatLakesBasin(options: IconOptions = {}): SVGSVGElement {
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
