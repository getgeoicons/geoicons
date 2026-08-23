// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.202 2.116a.3.3 0 0 0-.344-.256l-1.934.304a2 2 0 0 1-1.206-.186l-1.116-.559a1 1 0 0 0-.88-.007l-1.218.585a3 3 0 0 0-1.415 1.426l-1.818 3.862a1 1 0 0 0 .354 1.26l2.037 1.345a.798.798 0 0 1-.743 1.405l-5.87-2.407a1 1 0 0 0-1.223.388L2.456 13a1 1 0 0 0 .073 1.173l.195.236a1 1 0 0 0 1.166.283l4.568-1.964a.3.3 0 0 1 .337.07l1.58 1.683a1 1 0 0 0 .596.306l2.564.343a1 1 0 0 1 .704.444l.12.183a1 1 0 0 1-.037 1.148L13.23 18.36a1 1 0 0 0-.194.486l-.367 3.198a.3.3 0 0 0 .392.32l3.28-1.08a.3.3 0 0 1 .332.104l.899 1.188a.3.3 0 0 0 .404.07l3.195-2.107a1 1 0 0 0 .44-.688l.276-1.867a.3.3 0 0 0-.266-.343l-1.399-.146a1 1 0 0 1-.711-.415l-.645-.907a1 1 0 0 1-.152-.833l.78-2.984c.057-.214.077-.437.06-.658l-.346-4.547a.3.3 0 0 0-.222-.267l-1.162-.309a.3.3 0 0 1-.223-.274l-.07-1.359a.3.3 0 0 1 .277-.314l2.389-.18a.3.3 0 0 0 .274-.34z\"/>";
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

/** Build a <AgSaintJohn/> icon as a live SVGSVGElement (browser only). */
export function AgSaintJohn(options: IconOptions = {}): SVGSVGElement {
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
