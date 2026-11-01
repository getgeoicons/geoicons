// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.798 21.139.711-2.105a.6.6 0 0 0-.325-.74l-2.027-.9a1 1 0 0 1-.588-.803L3.993 11.4a1 1 0 0 1 .31-.84l1.279-1.196a1 1 0 0 0 .317-.725l.014-2.352a1 1 0 0 1 .798-.974l1.17-.24a1 1 0 0 0 .795-1.064L8.507 2.02a.6.6 0 0 1 .733-.635l1.232.283a2 2 0 0 1 1.013.584l1.433 1.534a1 1 0 0 0 1.243.176l2.081-1.24a1 1 0 0 1 1.278.215l1.06 1.262a1 1 0 0 1 .233.688l-.11 2.473a2 2 0 0 0 .114.763l1.155 3.233a1 1 0 0 1 .042.518l-.15.807a1 1 0 0 1-.69.775l-3.709 1.14a.6.6 0 0 0-.293.947l2.595 3.257a.6.6 0 0 1-.232.925l-.92.396a1 1 0 0 0-.604.896l-.018.79a.6.6 0 0 1-.531.582l-3.097.355a2 2 0 0 1-.946-.12l-1.341-.516a2 2 0 0 0-.988-.115l-1.426.194a.8.8 0 0 1-.866-1.048Z\"/>";
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

/** Build a <De/> icon as a live SVGSVGElement (browser only). */
export function De(options: IconOptions = {}): SVGSVGElement {
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
