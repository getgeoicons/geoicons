// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.136 13.8-.663 1.453a.5.5 0 0 0 .683.653l1.418-.729a.5.5 0 0 1 .454-.001l2.054 1.037a.5.5 0 0 1 .162.132l1.44 1.775a.5.5 0 0 0 .599.139l.762-.353a.5.5 0 0 1 .37-.02l.784.266a.5.5 0 0 0 .582-.205l1.078-1.696a.5.5 0 0 0 .02-.502l-2.637-4.99a.5.5 0 0 1 .077-.574l.624-.669a.5.5 0 0 1 .429-.154l1.118.143a.5.5 0 0 0 .55-.384l.135-.585a.5.5 0 0 1 .209-.303l.967-.649a.5.5 0 0 0 .114-.725l-.292-.37a.5.5 0 0 0-.667-.107l-.944.621a.5.5 0 0 1-.425.06l-4.545-1.438a.5.5 0 0 0-.302 0L7.675 8.03a.5.5 0 0 0-.348.507l.206 3.408a.5.5 0 0 0 .116.29l1.055 1.263a.5.5 0 0 0 .82-.076l.18-.323a.5.5 0 0 1 .646-.21l.542.25a.5.5 0 0 1 .245.662ZM3.42 8.15l-.915.434a.5.5 0 0 0-.122.821l.813.741a.5.5 0 0 0 .585.065l.774-.444a.5.5 0 0 0 .12-.772l-.672-.732a.5.5 0 0 0-.583-.114Zm.986 3.585-2.675.795a.5.5 0 0 0-.333.636l.29.882a.5.5 0 0 1 .002.308l-.333 1.046a.5.5 0 0 0 .34.633l.3.085a.5.5 0 0 0 .607-.312l.48-1.34a.5.5 0 0 1 .252-.281l2.02-.984a.5.5 0 0 0 .12-.818l-.59-.54a.5.5 0 0 0-.48-.11Z\"/>";
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

/** Build a <Ee/> icon as a live SVGSVGElement (browser only). */
export function Ee(options: IconOptions = {}): SVGSVGElement {
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
