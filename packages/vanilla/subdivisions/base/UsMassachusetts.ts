// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.953 7.617a.3.3 0 0 0-.297.22l-1.25 4.542a.6.6 0 0 0 .57.76l11.113.15a.6.6 0 0 1 .552.386l1.193 3.124a.6.6 0 0 0 .895.283l1.08-.727a.6.6 0 0 1 .906.314l.115.353a.6.6 0 0 0 .72.397l3.022-.772a1.497 1.497 0 0 0 1.075-1.846l-.519-1.894a.79.79 0 1 0-1.514.448l.127.396a1 1 0 0 1-.666 1.261l-.039.012a1 1 0 0 1-1.082-.351l-.142-.186a1 1 0 0 1-.128-.223l-.704-1.695a1 1 0 0 0-.463-.505l-1.095-.567a.947.947 0 0 1-.13-1.6l1.098-.817a1 1 0 0 0 .25-1.333l-.326-.52a1 1 0 0 0-1.312-.355l-1.685.884a1 1 0 0 1-.488.115z\"/>";
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

/** Build a <UsMassachusetts/> icon as a live SVGSVGElement (browser only). */
export function UsMassachusetts(options: IconOptions = {}): SVGSVGElement {
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
