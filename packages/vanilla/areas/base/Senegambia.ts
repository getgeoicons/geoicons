// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.654 10.045-1.454.803 1.516.879a.5.5 0 0 1 .186.19l1.432 2.572a1 1 0 0 1 .075.801l-.466 1.405a1 1 0 0 0-.05.307L3.88 18.58a1 1 0 0 0 1.254.975l4.176-1.1q.127-.032.26-.032l7.018.036a1 1 0 0 1 .442.105l2.073 1.037a1 1 0 0 0 .567.098l2.178-.262a1 1 0 0 0 .879-.937l.048-.849a1 1 0 0 0-.268-.74l-1.793-1.915a1 1 0 0 1-.263-.573l-.366-3.293a1 1 0 0 0-.253-.562l-3.85-4.245a1 1 0 0 0-.48-.294l-1.492-.402a1 1 0 0 1-.498-.313l-.717-.833a1 1 0 0 0-.804-.346l-5.823.264a1 1 0 0 0-.848.55L2.859 9.831a.5.5 0 0 1-.205.213Z\"/>";
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

/** Build a <Senegambia/> icon as a live SVGSVGElement (browser only). */
export function Senegambia(options: IconOptions = {}): SVGSVGElement {
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
