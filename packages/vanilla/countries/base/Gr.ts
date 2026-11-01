// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.49 5.438 8.892-2.482a2 2 0 0 1 1.115.012l2.028.612a2 2 0 0 0 .902.059l1.178-.194a.6.6 0 0 0 .502-.617l-.023-.552a.6.6 0 0 1 .894-.547l.863.486a.6.6 0 0 1 .306.51l.016.779a1 1 0 0 1-.183.597l-1.121 1.588a1 1 0 0 1-.974.412l-3.472-.552a2 2 0 0 0-1.283.226l-.722.4a.93.93 0 0 0-.468.937.926.926 0 0 1-.663 1.018l-.5.143a1 1 0 0 1-.896-.177l-.454-.36a1 1 0 0 0-1.539.39l-.062.144a1 1 0 0 0 .07.924l2.12 3.401a2 2 0 0 0 1.235.888l1.032.245a1 1 0 0 1 .628.462l.845 1.418a1 1 0 0 1-.198 1.263l-.607.535a1 1 0 0 1-1.308.012l-.563-.477a.915.915 0 0 0-1.4 1.126l.314.591a.6.6 0 0 1-.157.75l-.639.51a.6.6 0 0 0-.186.685l.641 1.657a.3.3 0 0 1-.353.399l-3.78-.95a1 1 0 0 1-.745-.813l-.234-1.474a1 1 0 0 0-.252-.522l-1.205-1.305a1 1 0 0 1-.237-.916l.222-.908a1 1 0 0 0-.143-.798L2.06 10.737a.6.6 0 0 1 0-.673l2.872-4.225a1 1 0 0 1 .558-.401Z\"/>";
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

/** Build a <Gr/> icon as a live SVGSVGElement (browser only). */
export function Gr(options: IconOptions = {}): SVGSVGElement {
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
