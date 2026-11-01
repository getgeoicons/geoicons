// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.618 13.235-.047.15a1 1 0 0 1-.853.694l-2.928.298a1 1 0 0 0-.51.203l-3.81 2.933a.582.582 0 0 0 .442 1.036l2.388-.364a2 2 0 0 0 .747-.274l1.757-1.082a1 1 0 0 1 1.33.259l.066.09a.6.6 0 0 0 .69.208l1.715-.629a2 2 0 0 0 .712-.45l.84-.823a2 2 0 0 1 .59-.401l4.002-1.774a2 2 0 0 0 .835-.692l.373-.539a1 1 0 0 1 .39-.333l1.57-.753a1 1 0 0 0 .55-.715l.31-1.626a1 1 0 0 1 .43-.647l1.08-.715a.827.827 0 0 0-.87-1.404l-2.474 1.43a1 1 0 0 1-.468.134l-2.151.07a2 2 0 0 0-.904.249L12.07 9.62a1 1 0 0 0-.432 1.276 1 1 0 0 1-.525 1.32l-.933.398a1 1 0 0 0-.562.62Z\"/>";
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

/** Build a <Ai/> icon as a live SVGSVGElement (browser only). */
export function Ai(options: IconOptions = {}): SVGSVGElement {
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
