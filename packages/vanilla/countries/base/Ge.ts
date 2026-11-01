// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.67 15.551 2.916-.276a1 1 0 0 1 .764.253l1.424 1.283a1 1 0 0 0 .782.251l3.944-.446a1 1 0 0 0 .573-.265l.364-.343a1 1 0 0 1 1.196-.131l2.681 1.592a.6.6 0 0 0 .776-.143l.315-.396a.6.6 0 0 0-.124-.863l-.983-.694a.6.6 0 0 1-.212-.711l.228-.577a.6.6 0 0 0-.355-.785l-1.398-.502a.6.6 0 0 1-.397-.551l-.018-.79a.6.6 0 0 0-.37-.54l-1.593-.662a2 2 0 0 0-1.375-.06l-1.72.548a1 1 0 0 1-.948-.188l-2.178-1.832a2 2 0 0 0-1.236-.47l-2.665-.068A3 3 0 0 1 6 7.96L2.574 6.557a.8.8 0 0 0-1.032.41l-.05.109a.8.8 0 0 0 .312 1.013l3.303 2.017a2 2 0 0 1 .896 1.211l.408 1.595a2 2 0 0 1-.138 1.367l-.2.414a.6.6 0 0 0 .596.858Z\"/>";
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

/** Build a <Ge/> icon as a live SVGSVGElement (browser only). */
export function Ge(options: IconOptions = {}): SVGSVGElement {
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
