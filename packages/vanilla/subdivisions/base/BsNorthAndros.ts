// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.723 18.133a1 1 0 0 0 .995-.848l.064-.417a1 1 0 0 0 .007-.251l-.088-.882a2 2 0 0 0-.576-1.217l-2.081-2.081a11 11 0 0 1-1.666-2.137l-1.375-2.303a1 1 0 0 1-.075-.87l.664-1.73a1 1 0 0 0-.032-.791l-1.396-2.909a.6.6 0 0 0-.755-.3l-1.945.74a1 1 0 0 1-.486.056L9.912 1.92a.6.6 0 0 0-.591.906l1.367 2.254a1 1 0 0 1 .135.66l-.465 3.25a2 2 0 0 1-.4.943l-3.828 4.93a1 1 0 0 1-.466.332l-2.362.808a1 1 0 0 0-.562 1.41l.274.522c.203.387.488.725.834.99l4.796 3.668a1 1 0 0 0 .608.206h.361a1 1 0 0 0 .71-.296l1.237-1.248a8 8 0 0 1 1.822-1.375l1.05-.58a8 8 0 0 1 2.326-.844l.947-.186a8 8 0 0 1 1.592-.148z\"/>";
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

/** Build a <BsNorthAndros/> icon as a live SVGSVGElement (browser only). */
export function BsNorthAndros(options: IconOptions = {}): SVGSVGElement {
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
