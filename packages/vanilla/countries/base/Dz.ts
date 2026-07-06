// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.937 21.292 1.41 13.225a.5.5 0 0 1-.214-.403l-.015-1.208a.5.5 0 0 1 .32-.473l4.766-1.849a.5.5 0 0 0 .306-.581l-.125-.527a.5.5 0 0 1 .451-.614l1.574-.112a.5.5 0 0 0 .438-.659l-.918-2.728a.5.5 0 0 1 .307-.63l6.149-2.173a.5.5 0 0 1 .162-.029l4.065-.033a.5.5 0 0 1 .47.683l-1.037 2.637a.5.5 0 0 0 .047.457l1.555 2.367q.066.102.08.222l.801 7.606a.5.5 0 0 0 .149.306l1.658 1.613a.5.5 0 0 1-.054.762L16.9 21.834a.5.5 0 0 1-.165.08l-2.8.754a.5.5 0 0 1-.615-.36l-.186-.73a.5.5 0 0 0-.198-.286Z\"/>";
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

/** Build a <Dz/> icon as a live SVGSVGElement (browser only). */
export function Dz(options: IconOptions = {}): SVGSVGElement {
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
