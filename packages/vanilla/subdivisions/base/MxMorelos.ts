// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.852 2.02a1 1 0 0 0-1.014.294l-.28.312a1 1 0 0 0-.252.768l.268 2.69a1 1 0 0 1-.388.893l-2.06 1.576a1 1 0 0 0-.299.371l-1.42 3.04a1 1 0 0 0 .016.879l2.89 5.637a1 1 0 0 0 .695.524l2.445.486a1 1 0 0 0 .569-.053l.944-.38a1 1 0 0 1 1.263.47l1.013 1.968a.6.6 0 0 0 .908.195l4.581-3.66a1 1 0 0 1 1.344.086l1.503 1.557a.599.599 0 0 0 1.025-.483l-.703-6.212a3 3 0 0 1 .188-1.433l2.487-6.338a.61.61 0 0 0-1.029-.625l-1.181 1.35a2 2 0 0 1-.929.598l-.214.064a2 2 0 0 1-1.4-.093l-.468-.211a2 2 0 0 1-1.009-1.022l-.486-1.112a1 1 0 0 0-.677-.57l-1.943-.48a1 1 0 0 0-.996.316l-.155.18a1 1 0 0 1-1.002.315l-.533-.134a1 1 0 0 1-.612-.455L9.83 3.14a1 1 0 0 0-.587-.449z\"/>";
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

/** Build a <MxMorelos/> icon as a live SVGSVGElement (browser only). */
export function MxMorelos(options: IconOptions = {}): SVGSVGElement {
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
