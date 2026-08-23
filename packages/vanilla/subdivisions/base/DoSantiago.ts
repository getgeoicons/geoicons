// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.298 6.838a.6.6 0 0 0-.241-.93l-1.319-.538a1 1 0 0 1-.614-.805l-.108-.888a1 1 0 0 0-.494-.746l-1.046-.603a.6.6 0 0 0-.825.23l-.413.75a1 1 0 0 1-1.34.403l-2.33-1.22a.6.6 0 0 0-.873.456l-.138 1.083a.3.3 0 0 1-.442.225l-.687-.378a.3.3 0 0 0-.424.154l-.357.917a.3.3 0 0 0 .158.384l.986.434a.6.6 0 0 1 .359.562l-.03 1.408a1 1 0 0 1-1.174.963l-3.86-.682a.8.8 0 0 0-.77.296L5.138 9.82a2 2 0 0 1-1.425.764l-.339.025a2 2 0 0 0-1.458.807l-.137.186a2 2 0 0 0-.38.97l-.133 1.223a2 2 0 0 0 .212 1.138l.88 1.697a2 2 0 0 0 .65.734l1.377.935a1 1 0 0 1 .43.7l.089.7a1 1 0 0 0 .424.696l1.916 1.322a1 1 0 0 0 .817.145l1.49-.384a1 1 0 0 0 .74-.829l.008-.054a1 1 0 0 1 .916-.858l1.759-.13a3 3 0 0 0 1.272-.39l2.033-1.167a1 1 0 0 0 .485-.681l.128-.678a.6.6 0 0 1 .703-.478l.51.098a.6.6 0 0 0 .712-.586l.018-2.827a1 1 0 0 1 .363-.764l1.898-1.568a1 1 0 0 0 .363-.739l.054-1.689a1 1 0 0 1 .219-.592z\"/>";
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

/** Build a <DoSantiago/> icon as a live SVGSVGElement (browser only). */
export function DoSantiago(options: IconOptions = {}): SVGSVGElement {
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
