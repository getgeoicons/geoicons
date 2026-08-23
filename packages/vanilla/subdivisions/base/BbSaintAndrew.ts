// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.651 14.176a1 1 0 0 0-.082-.968L17.02 9.42l-2.554-4.692a7 7 0 0 1-.621-1.567l-.338-1.287a.6.6 0 0 0-.51-.444l-1.548-.183a.6.6 0 0 0-.594.303l-.938 1.68a1 1 0 0 1-1.257.436L6.123 2.613a.6.6 0 0 0-.64.117l-.998.936a.6.6 0 0 0-.095.761l.916 1.429a1 1 0 0 1 .156.592l-.513 9.687a1 1 0 0 0 .177.623l1.1 1.586a.6.6 0 0 1 .052.595l-.313.676a.6.6 0 0 0 .478.849l2.864.318a1 1 0 0 1 .662.36l1.09 1.327a.3.3 0 0 0 .49-.037l.46-.776a2 2 0 0 0 .26-.75l.144-1.044a2 2 0 0 1 .26-.748l1.128-1.902a1 1 0 0 1 .846-.49l2.584-.037a2 2 0 0 0 .85-.202l.034-.017a2 2 0 0 0 .947-.978z\"/>";
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

/** Build a <BbSaintAndrew/> icon as a live SVGSVGElement (browser only). */
export function BbSaintAndrew(options: IconOptions = {}): SVGSVGElement {
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
