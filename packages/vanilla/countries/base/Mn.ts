// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.033 11.336-1.174-.799a.5.5 0 0 1 .033-.847l2.391-1.375a.5.5 0 0 1 .445-.027l2.778 1.18a.5.5 0 0 0 .686-.366l.31-1.606a.5.5 0 0 1 .656-.378l1.423.501a.5.5 0 0 1 .265.219l.528.898a.5.5 0 0 0 .542.234l1.275-.29a.5.5 0 0 1 .304.026l2.754 1.15a.5.5 0 0 0 .391-.004l2.165-.937a.5.5 0 0 1 .328-.024l1.468.391-.823 1.29a.5.5 0 0 0-.005.53l.066.107a.5.5 0 0 0 .585.214l.855-.285a.5.5 0 0 1 .51.12l.759.753a.389.389 0 0 1-.252.664l-1.23.072a.5.5 0 0 0-.239.076L18.81 14.1a.5.5 0 0 1-.321.074l-.72-.077a.5.5 0 0 0-.51.295l-.656 1.485a.5.5 0 0 1-.333.282l-3.44.889a.5.5 0 0 1-.21.009l-5.14-.87a.5.5 0 0 1-.341-.23l-.647-1.048a.5.5 0 0 0-.257-.208l-2.47-.881a.5.5 0 0 1-.33-.417l-.185-1.708a.5.5 0 0 0-.216-.359Z\"/>";
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

/** Build a <Mn/> icon as a live SVGSVGElement (browser only). */
export function Mn(options: IconOptions = {}): SVGSVGElement {
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
