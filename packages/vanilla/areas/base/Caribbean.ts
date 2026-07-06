// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.017 8.668-.475.613a.701.701 0 0 0 .678 1.12l.227-.041a1 1 0 0 0 .165-.048l1.665-.664a1 1 0 0 1 .672-.025l4.298 1.359a1 1 0 0 1 .58.482l.427.798a1 1 0 0 0 .864.529l2.427.043a1 1 0 0 0 .423-.086l.582-.258a.6.6 0 0 0 .03-1.082L8.077 8.074a1 1 0 0 0-.37-.106l-2.955-.256a1 1 0 0 0-.38.041l-1.859.572a1 1 0 0 0-.496.343Zm17.891 3.804-1.887-.021a.6.6 0 0 0-.534.887l.8 1.468a1 1 0 0 0 1.248.45l.236-.093a1 1 0 0 1 .397-.071l1.649.043a.769.769 0 0 0 .415-1.428l-1.82-1.093a1 1 0 0 0-.504-.142Zm-7.804 2.202-1.298-.329a.91.91 0 1 0-.301 1.79l1.333.115a.802.802 0 0 0 .266-1.576Z\"/>";
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

/** Build a <Caribbean/> icon as a live SVGSVGElement (browser only). */
export function Caribbean(options: IconOptions = {}): SVGSVGElement {
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
