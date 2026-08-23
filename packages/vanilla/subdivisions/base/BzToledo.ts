// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.154 9.027a1 1 0 0 0-.193.54l-.677 12.527a.6.6 0 0 0 .664.63l2.283-.25a8 8 0 0 1 1.617-.012l2.71.254a.6.6 0 0 0 .632-.762l-.299-1.049a1 1 0 0 1 .304-1.026l3.962-3.466a1 1 0 0 0 .333-.619l.18-1.328a1 1 0 0 1 .483-.728l1.522-.895a1 1 0 0 1 1.039.015l.566.355a.6.6 0 0 0 .802-.152l4.52-6.138a.616.616 0 0 0-.504-.982l-3.115.043a.6.6 0 0 1-.607-.649l.062-.764a1.5 1.5 0 0 0-.252-.959L16.864 1.65a1 1 0 0 0-.846-.441l-2.238.037a2 2 0 0 0-.884.223l-.751.388a.84.84 0 0 0-.452.78 1.67 1.67 0 0 1-.882 1.546l-2.798 1.5a6 6 0 0 1-.819.362l-3.28 1.168a2 2 0 0 0-.94.699z\"/>";
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

/** Build a <BzToledo/> icon as a live SVGSVGElement (browser only). */
export function BzToledo(options: IconOptions = {}): SVGSVGElement {
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
