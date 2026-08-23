// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.798 5.473a.3.3 0 0 0-.432-.27l-2.48 1.22a3 3 0 0 1-1.042.295l-2.816.267a3 3 0 0 1-1.376-.193L9.583 4.809a.6.6 0 0 0-.744.27l-.396.719a1 1 0 0 1-.844.517l-1.577.05a3 3 0 0 0-1.83.698l-.368.308a2 2 0 0 1-.913.432l-.893.169a.8.8 0 0 0-.631.965l.586 2.547a1 1 0 0 0 .886.772l.847.075a.6.6 0 0 1 .548.587l.016.922a.6.6 0 0 0 .345.533l1.203.563a.6.6 0 0 0 .608-.06l4.77-3.48a1 1 0 0 1 .663-.19l.508.037a1 1 0 0 1 .631.288l1.887 1.875a2 2 0 0 0 .73.463l1.349.487c.386.14.72.395.956.73l1.206 1.716a2 2 0 0 0 .526.513l2.633 1.758a.3.3 0 0 0 .466-.249z\"/>";
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

/** Build a <HnColon/> icon as a live SVGSVGElement (browser only). */
export function HnColon(options: IconOptions = {}): SVGSVGElement {
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
