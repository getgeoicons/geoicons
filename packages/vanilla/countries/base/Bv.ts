// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.742 7.437-1.34 1.684a.5.5 0 0 0-.054.54l.527 1.028a.5.5 0 0 1 .052.286L1.646 13.4a.5.5 0 0 0 .034.247l.773 1.898a.5.5 0 0 0 .119.174l2.884 2.736a.5.5 0 0 1 .134.217l.407 1.339a.5.5 0 0 0 .456.354l2.144.096a.5.5 0 0 0 .246-.053l3.022-1.51a.5.5 0 0 1 .324-.044l2.26.46q.08.015.16.006l5.24-.632a.5.5 0 0 0 .335-.19l1.189-1.528a.5.5 0 0 0 .082-.157l1.294-4.102a.5.5 0 0 0-.008-.324l-.58-1.57a.5.5 0 0 0-.075-.134l-2.659-3.407a.5.5 0 0 0-.191-.15L15.578 5.5a.5.5 0 0 0-.227-.042l-2.148.1a.5.5 0 0 1-.401-.172l-.988-1.14a.5.5 0 0 0-.86.198l-.314 1.172a.5.5 0 0 1-.335.349L6.556 7.119a.5.5 0 0 1-.13.022l-3.31.108a.5.5 0 0 0-.374.188Z\"/>";
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

/** Build a <Bv/> icon as a live SVGSVGElement (browser only). */
export function Bv(options: IconOptions = {}): SVGSVGElement {
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
