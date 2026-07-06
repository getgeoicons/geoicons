// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.438 9.01-.153.946a.5.5 0 0 0 .444.577l1.715.173a.5.5 0 0 1 .378.238l.884 1.461a.5.5 0 0 0 .417.241l.642.014a.5.5 0 0 1 .488.493l.01.679a.5.5 0 0 0 .323.46l.807.306a.5.5 0 0 0 .208.031l2.57-.16a.5.5 0 0 1 .383.145l1.688 1.677a.5.5 0 0 0 .68.024l.253-.22a.5.5 0 0 0 .087-.658l-.339-.502a.5.5 0 0 1 .019-.585l.343-.445a.5.5 0 0 1 .708-.085l.586.468a.5.5 0 0 0 .752-.154l.338-.626a.5.5 0 0 1 .705-.186l2.224 1.39 3.389-.352a.5.5 0 0 0 .367-.77l-1.47-2.259a.5.5 0 0 0-.294-.21l-3.924-1.018a.5.5 0 0 1-.203-.107l-1.397-1.217a.5.5 0 0 0-.218-.11l-4.315-.977-.077-.012-4.22-.285a.5.5 0 0 0-.357.118l-.722.612a.5.5 0 0 1-.362.117l-2.03-.159a.5.5 0 0 0-.308.078l-.795.509a.5.5 0 0 0-.224.34Z\"/>";
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

/** Build a <Jm/> icon as a live SVGSVGElement (browser only). */
export function Jm(options: IconOptions = {}): SVGSVGElement {
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
