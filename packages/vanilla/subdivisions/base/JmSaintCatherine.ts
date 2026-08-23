// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.601 4.335a.6.6 0 0 0-.496.776l2.256 7.163q.074.23.108.469l.988 6.789a.6.6 0 0 0 .776.485l2.824-.902a1 1 0 0 1 1.03.265l.308.325a1 1 0 0 1 .165 1.14l-.37.729a.596.596 0 0 0 .485.865l3.545.279a2.8 2.8 0 0 0 2.759-1.608l2.823-6.044a1 1 0 0 0-.227-1.158L19.18 12.62a1 1 0 0 1-.264-1.07l1.001-2.82a1 1 0 0 0 .043-.505l-.312-1.804a1 1 0 0 0-.542-.727l-.683-.338a2 2 0 0 1-.95-.999l-1.14-2.638a.8.8 0 0 0-.71-.482l-.943-.03a1 1 0 0 0-.455.094l-4.53 2.115a3 3 0 0 1-.89.257z\"/>";
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

/** Build a <JmSaintCatherine/> icon as a live SVGSVGElement (browser only). */
export function JmSaintCatherine(options: IconOptions = {}): SVGSVGElement {
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
