// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.863 10.056-.463.779a1 1 0 0 0-.118.72l.353 1.648a1 1 0 0 0 .084.238l.909 1.818a1 1 0 0 0 .497.47l2.385 1.032a1 1 0 0 0 .986-.11l.782-.57a1 1 0 0 1 1.112-.044l1.465.897a1 1 0 0 0 .977.037l1.538-.786a1 1 0 0 1 .575-.102l1.418.17a1 1 0 0 0 1.03-.58l.41-.904a1 1 0 0 1 .401-.448l4.003-2.369a1 1 0 0 0 .487-.77l.102-1.119a1 1 0 0 1 .36-.68l.574-.473a1 1 0 0 0 .277-.364l.793-1.772-2.738 1.54a1 1 0 0 1-.392.123l-2.486.244a1 1 0 0 1-.54-.098l-3.103-1.53a1 1 0 0 0-.381-.1l-2.027-.125a1 1 0 0 0-.54.12l-2.407 1.31a1 1 0 0 1-.564.117L6.173 8.25a1 1 0 0 0-.936.47l-.284.457a1 1 0 0 1-.912.47l-1.256-.078a1 1 0 0 0-.922.488Z\"/>";
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

/** Build a <Anatolia/> icon as a live SVGSVGElement (browser only). */
export function Anatolia(options: IconOptions = {}): SVGSVGElement {
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
