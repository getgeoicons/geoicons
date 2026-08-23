// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.179 10.868a1 1 0 0 0 .494 1.067l1.3.724a1 1 0 0 1 .378.371l.912 1.569a.6.6 0 0 0 .86.191l.6-.415a.6.6 0 0 1 .91.302l.464 1.379a2 2 0 0 1 .075.98l-.672 3.89a.8.8 0 0 0 .122.58l.406.608a.8.8 0 0 0 1.129.208l.563-.4a.8.8 0 0 0 .334-.592l.222-2.93q.014-.172.084-.331l2.433-5.454q.06-.134.079-.279l.99-7.632a.6.6 0 0 0-.668-.673l-1.058.131a1 1 0 0 1-.985-.485l-1.033-1.755a.6.6 0 0 0-.972-.088l-.948 1.1a1 1 0 0 1-.767.347l-1.339-.012a1 1 0 0 0-.912.57l-.324.68a2 2 0 0 0-.19 1.01l.147 1.936a.6.6 0 0 1-.788.614l-.57-.19a.6.6 0 0 0-.778.454z\"/>";
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

/** Build a <LcCastries/> icon as a live SVGSVGElement (browser only). */
export function LcCastries(options: IconOptions = {}): SVGSVGElement {
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
