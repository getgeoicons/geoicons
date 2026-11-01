// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.873 13.027.883-1.276a.6.6 0 0 0 .068-.554L3.292 9.79a2 2 0 0 1-.052-1.26l.73-2.54a1 1 0 0 0-.102-.786L2.874 3.53a.3.3 0 0 1 .224-.451l1.366-.157a3 3 0 0 0 1.248-.437l1.198-.75a3 3 0 0 1 1.329-.445l.387-.034a.6.6 0 0 1 .652.586l.037 1.907a1 1 0 0 0 .593.894l5.936 2.643A2 2 0 0 1 17.028 9l.122 2.156a.6.6 0 0 0 .59.566l1.89.028a.6.6 0 0 1 .54.357l1.02 2.303a1 1 0 0 1 .014.779l-.782 1.944a.3.3 0 0 1-.434.144l-1.09-.662a1 1 0 0 0-.693-.13l-2.874.506a1 1 0 0 0-.774.664l-1.022 3.021a.6.6 0 0 1-.555.408l-.7.015a.6.6 0 0 0-.431.198l-.636.704a.6.6 0 0 1-.719.132l-1.92-.981a.8.8 0 0 0-1.027.265l-.541.802a1 1 0 0 1-.702.433l-.299.038a1 1 0 0 1-1.089-.718l-.775-2.726a2 2 0 0 1-.07-.706l.09-1.122a2 2 0 0 0-.146-.928L2.812 13.6a.6.6 0 0 1 .061-.572Z\"/>";
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

/** Build a <Bo/> icon as a live SVGSVGElement (browser only). */
export function Bo(options: IconOptions = {}): SVGSVGElement {
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
