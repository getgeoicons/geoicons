// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m20.4 20.447-.624.443a.5.5 0 0 1-.783-.328l-.206-1.266a.5.5 0 0 0-.472-.42l-.448-.019a.5.5 0 0 0-.521.485l-.02.713a.5.5 0 0 1-.743.423l-1.384-.767a.5.5 0 0 1-.132-.77l.45-.506a.5.5 0 0 0 .127-.336l-.013-1.725a.5.5 0 0 0-.292-.451l-5.532-2.53a.5.5 0 0 1-.28-.345l-.435-1.95a.5.5 0 0 0-.202-.3L6.32 9a.5.5 0 0 0-.61.028l-.27.229a.5.5 0 0 0-.031.734l1.68 1.687a.5.5 0 0 1 .03.672l-.506.61a.5.5 0 0 1-.785-.019l-.99-1.32a.5.5 0 0 0-.315-.193l-1.695-.293a.5.5 0 0 1-.371-.288L1.431 8.564a.5.5 0 0 1 .12-.575l1.19-1.084a.5.5 0 0 0 0-.738L1.562 5.088a.5.5 0 0 1-.037-.7L2.82 2.921a.5.5 0 0 1 .578-.126l3.61 1.609a.5.5 0 0 0 .457-.025l1.234-.723a.5.5 0 0 1 .488-.01l4.055 2.157a.5.5 0 0 0 .52-.031l1.29-.898a.5.5 0 0 1 .72.16l2.97 5.143a.5.5 0 0 0 .126.145l3.059 2.377a.5.5 0 0 1-.213.885l-1.484.284a.5.5 0 0 0-.406.49l-.004.925a.5.5 0 0 0 .15.359l1.045 1.03a.5.5 0 0 1 .019.692l-.726.798a.5.5 0 0 0-.108.485l.387 1.244a.5.5 0 0 1-.188.556Z\"/>";
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

/** Build a <Cr/> icon as a live SVGSVGElement (browser only). */
export function Cr(options: IconOptions = {}): SVGSVGElement {
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
