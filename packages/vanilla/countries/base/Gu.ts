// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.362 13.272 5.833-4.411a2 2 0 0 0 .578-.694l1.54-3.047a.5.5 0 0 0-.378-.72l-1.863-.262a1 1 0 0 1-.752-.538l-.82-1.61a1 1 0 0 0-.509-.471l-.05-.021a1 1 0 0 0-1.185.326l-.787 1.057a1 1 0 0 0-.198.615l.02 1.227a2 2 0 0 1-.366 1.19L11.059 9.26a3 3 0 0 1-1.564 1.134l-5.408 1.67a.5.5 0 0 0-.237.797l1.216 1.47a1 1 0 0 1 .128 1.077l-1.016 2.08a.5.5 0 0 0-.005.427l.59 1.293c.3.657.457 1.37.702 2.049.082.226.187.445.32.608.474.582.94.845 1.687.92.688.071 1.105-.125 1.71-.46.987-.546 1.076-1.239 1.513-2.28.438-1.043.403-2.636.335-3.554a3.5 3.5 0 0 1 .166-1.405l.143-.408a3 3 0 0 1 1.023-1.406Z\"/>";
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

/** Build a <Gu/> icon as a live SVGSVGElement (browser only). */
export function Gu(options: IconOptions = {}): SVGSVGElement {
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
