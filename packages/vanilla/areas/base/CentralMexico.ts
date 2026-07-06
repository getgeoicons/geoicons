// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.995 9.995-1.72 4.362a.6.6 0 0 0-.016.391l.41 1.376a.6.6 0 0 0 .858.358l1.174-.628a1 1 0 0 1 1.179.174l1.773 1.774a1 1 0 0 0 .707.293h2.433a1 1 0 0 0 .394-.081l1.685-.723a1 1 0 0 0 .494-.46l.271-.524a.6.6 0 0 1 .933-.173l1.378 1.23a.6.6 0 0 1 .198.388l.124 1.239a.6.6 0 0 0 .228.413l.007.006a.6.6 0 0 0 .653.054l.72-.387a.6.6 0 0 1 .746.145l.907 1.096a.6.6 0 0 0 .414.215l2.407.193a.6.6 0 0 0 .398-.111l.581-.418a.6.6 0 0 0 .15-.82l-1.155-1.736a.6.6 0 0 0-.44-.265l-1.198-.12a.6.6 0 0 1-.404-.217l-.742-.906a.6.6 0 0 0-.318-.202l-2.124-.534a1 1 0 0 1-.643-.507l-1.526-2.925a1 1 0 0 0-.086-.137l-2.412-3.216a1 1 0 0 1-.2-.588l-.019-1.563a1 1 0 0 0-.149-.513l-.958-1.555a1 1 0 0 0-.561-.433l-1.453-.44a.6.6 0 0 0-.77.638l.303 2.824a.6.6 0 0 1-.565.664l-1.752.092a1 1 0 0 0-.697.336L3.176 9.7a1 1 0 0 0-.181.295Z\"/>";
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

/** Build a <CentralMexico/> icon as a live SVGSVGElement (browser only). */
export function CentralMexico(options: IconOptions = {}): SVGSVGElement {
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
