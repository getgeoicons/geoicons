// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.829 11.435a1 1 0 0 0 .491-.199l1.152-.88a.761.761 0 0 0-.297-1.348l-4.663-1.043a2 2 0 0 0-.785-.018l-3.65.646a2 2 0 0 1-.434.029l-4-.172a2 2 0 0 0-1.095.27l-3.1 1.811a1 1 0 0 1-.544.136l-.978-.039a1 1 0 0 0-.927.538l-.468.9a2.9 2.9 0 0 0-.324 1.353l.002.12a2.52 2.52 0 0 0 1.217 2.126c.468.28 1.015.4 1.558.341l2.567-.28a3 3 0 0 1 .976.054l.966.215a.6.6 0 0 0 .713-.443l.236-.967a1.744 1.744 0 0 1 1.935-1.313l3.715.517a1 1 0 0 0 .837-.275l1.264-1.235a2 2 0 0 1 1.165-.556z\"/>";
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

/** Build a <HtNordOuest/> icon as a live SVGSVGElement (browser only). */
export function HtNordOuest(options: IconOptions = {}): SVGSVGElement {
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
