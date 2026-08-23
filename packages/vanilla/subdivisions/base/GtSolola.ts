// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.643 21.403a.5.5 0 0 0 .813-.362l.244-4.394a3 3 0 0 1 .232-1.003l1.25-2.957a2 2 0 0 0 .134-1.092l-.233-1.465a2 2 0 0 1 .063-.897l.528-1.73a.6.6 0 0 0-.225-.664l-.233-.166a.6.6 0 0 0-.858.172l-.51.82a.6.6 0 0 1-.827.192l-.604-.377a.6.6 0 0 1-.158-.875l.923-1.199a.6.6 0 0 0-.06-.8l-1.872-1.79a1 1 0 0 0-1.055-.21l-.636.249a1 1 0 0 0-.553.533l-.233.536a1 1 0 0 1-.661.567l-1.53.406a1 1 0 0 1-.611-.032l-2.83-1.075a1 1 0 0 0-1.01.179L6.592 6.165a3 3 0 0 0-.408.43l-3.957 5.102a1 1 0 0 0-.198.767l.374 2.39a1 1 0 0 1-.09.597l-.7 1.422a.6.6 0 0 0 .52.865l1.348.04a.6.6 0 0 0 .538-.302l.782-1.365a1 1 0 0 1 .817-.502l3.732-.19a1 1 0 0 1 .852.4l1.308 1.75a1 1 0 0 1 .18.4l.646 3.189a.57.57 0 0 0 .958.294l2.512-2.46a.6.6 0 0 1 .796-.038z\"/>";
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

/** Build a <GtSolola/> icon as a live SVGSVGElement (browser only). */
export function GtSolola(options: IconOptions = {}): SVGSVGElement {
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
