// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.026 22.768 1.734.027a.5.5 0 0 0 .459-.285l1.031-2.16a.5.5 0 0 1 .375-.278l1.04-.16a.5.5 0 0 0 .377-.282l2.361-5.056a.5.5 0 0 0 .01-.4l-.643-1.577a.5.5 0 0 1 0-.375l.793-1.978a.5.5 0 0 0-.024-.425l-.566-1.04a.5.5 0 0 1-.015-.447l1.483-3.245a.5.5 0 0 0 .045-.211l-.01-1.654a.5.5 0 0 0-.491-.497l-.99-.015a.5.5 0 0 1-.34-.142l-.949-.925a.5.5 0 0 0-.779.104l-2.489 4.198a.5.5 0 0 1-.576.223L8.854 5.86a.5.5 0 0 0-.646.457l-.673 15.93a.5.5 0 0 0 .491.52Z\"/>";
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

/** Build a <Bz/> icon as a live SVGSVGElement (browser only). */
export function Bz(options: IconOptions = {}): SVGSVGElement {
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
