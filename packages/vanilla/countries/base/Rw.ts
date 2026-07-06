// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.547 19.056-.556 1.418-1.138-.582a.5.5 0 0 1-.267-.374l-.344-2.372a.5.5 0 0 1 .185-.465l1.206-.946A.5.5 0 0 1 3 15.63l1.05.124a.5.5 0 0 0 .432-.164l2.064-2.315a.5.5 0 0 0-.006-.672l-.883-.956a.5.5 0 0 1-.128-.272l-.259-1.89a.5.5 0 0 1 .064-.321l.8-1.36a.5.5 0 0 1 .325-.235l.95-.205a.5.5 0 0 0 .265-.153l.87-.956a.5.5 0 0 1 .272-.154l2.493-.495a.5.5 0 0 1 .58.36l.186.691a.5.5 0 0 0 .717.312l1.555-.825a.5.5 0 0 0 .18-.16l2.092-3.077a.5.5 0 0 1 .341-.214l.759-.111a.5.5 0 0 1 .542.323L19.2 5.47a.5.5 0 0 0 .102.167l2.754 2.98a.5.5 0 0 1 .129.4l-.325 2.659a.5.5 0 0 0 .067.319l.768 1.275a.5.5 0 0 1 .06.368l-.579 2.571a.5.5 0 0 1-.424.386l-2.586.331a.5.5 0 0 1-.265-.038l-2.082-.916a.5.5 0 0 0-.553.103l-.919.914a.5.5 0 0 1-.59.085l-1.995-1.08-.605 4.364a.5.5 0 0 1-.429.427l-5.143.692-.275-1.874a.5.5 0 0 0-.377-.413l-1.804-.437a.5.5 0 0 0-.583.303Z\"/>";
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

/** Build a <Rw/> icon as a live SVGSVGElement (browser only). */
export function Rw(options: IconOptions = {}): SVGSVGElement {
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
