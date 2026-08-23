// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.86 14.19a.6.6 0 0 1 .146-.985l1.98-.944a1 1 0 0 0 .569-.864l.041-1.083a1 1 0 0 0-.148-.563L3.382 8.02a.6.6 0 0 1-.004-.622l.45-.753a.6.6 0 0 1 .266-.239l1.82-.83a.6.6 0 0 1 .407-.032l7.303 1.987a.6.6 0 0 1 .435.674l-.486 3.031a.6.6 0 0 0 .534.692l1.16.114a.6.6 0 0 1 .458.293l.565.961a1 1 0 0 0 .757.488l2.815.297a1 1 0 0 0 .937-.44l.47-.703a.81.81 0 0 1 1.483.499l-.06.969a.6.6 0 0 1-.062.231l-1.572 3.146a.6.6 0 0 1-.952.164l-.967-.927a2 2 0 0 0-.746-.452l-2.575-.867a3 3 0 0 0-1.535-.1l-.606.118a.6.6 0 0 1-.7-.45l-.22-.937a.6.6 0 0 0-.746-.44l-1.994.558a1 1 0 0 1-.553-.004L8.02 14.02a3 3 0 0 0-1.967.092l-.446.18a1.5 1.5 0 0 0-.936 1.532l.12 1.28a.8.8 0 0 1-1.587.191l-.267-1.819a1 1 0 0 0-.317-.594z\"/>";
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

/** Build a <PaChiriqui/> icon as a live SVGSVGElement (browser only). */
export function PaChiriqui(options: IconOptions = {}): SVGSVGElement {
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
