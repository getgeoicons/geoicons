// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.166 3.113-2.32 2.148a.5.5 0 0 0-.13.539l.9 2.462a.5.5 0 0 1-.178.577l-1.99 1.435a.5.5 0 0 0-.143.652l1.832 3.233a.5.5 0 0 1 .023.45L5.844 17.58a.5.5 0 0 0-.038.265l.207 1.656a.5.5 0 0 1-.042.27l-.797 1.745a.5.5 0 0 0 .272.673l1.404.552a.5.5 0 0 0 .3.021l2.84-.679a.5.5 0 0 0 .165-.072l2.917-1.984a.5.5 0 0 1 .448-.058l1.302.459a.5.5 0 0 0 .602-.226l.637-1.127a.5.5 0 0 1 .28-.229l1.514-.494a.5.5 0 0 0 .33-.352l.806-3.155a.5.5 0 0 0-.064-.395l-.68-1.052a.5.5 0 0 1-.066-.39l.452-1.847a.5.5 0 0 0 .002-.23l-.6-2.636a.5.5 0 0 0-.047-.126l-3.75-6.97-1.663 1.65a.5.5 0 0 1-.355.145L9.508 2.98a.5.5 0 0 0-.342.133Z\"/>";
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

/** Build a <Kr/> icon as a live SVGSVGElement (browser only). */
export function Kr(options: IconOptions = {}): SVGSVGElement {
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
