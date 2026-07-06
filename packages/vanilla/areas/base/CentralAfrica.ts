// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.326 21.28-.04.954 5.526.566.073-2.748a.6.6 0 0 1 .759-.563l1.536.423.963-2.074-1.068-2.629a1 1 0 0 1 .038-.836l.928-1.794a.6.6 0 0 0 .014-.523l-.296-.653a.6.6 0 0 0-.605-.35l-.293.029a1 1 0 0 1-.895-.392L13.837 9.2a1 1 0 0 1-.142-.261l-.603-1.654a1 1 0 0 1 .141-.946l.638-.844-.03-2.088L10.1 1.2l-.815.492.668 1.448a1 1 0 0 1 .088.505l-.07.81a1 1 0 0 1-.24.567l-.459.53a.75.75 0 0 0-.103.826l.245.49a1 1 0 0 1 .01.873l-.82 1.749a.6.6 0 0 1-.625.34l-.083-.012a.6.6 0 0 0-.59.275l-.166.264a1 1 0 0 0-.03 1.015l.211.383a1 1 0 0 1 .092.731L7.1 13.7a1 1 0 0 0 .164.844l1.188 1.607a1 1 0 0 1 .167.355l.604 2.447a1 1 0 0 1-.107.743l-.655 1.123a1 1 0 0 0-.135.462Z\"/>";
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

/** Build a <CentralAfrica/> icon as a live SVGSVGElement (browser only). */
export function CentralAfrica(options: IconOptions = {}): SVGSVGElement {
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
