// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.439 9.642a.6.6 0 0 0-.162.564l.497 2.121a2 2 0 0 1 .046.625l-.393 4.635a2 2 0 0 0 .136.911l.311.778a2 2 0 0 1 .134.932l-.101 1.071a.3.3 0 0 0 .306.329l4.95-.133a.3.3 0 0 0 .29-.343l-.365-2.549a.3.3 0 0 1 .426-.313l1.44.684a2 2 0 0 0 .755.191l3.532.183a1 1 0 0 0 .74-.273l.198-.187a1 1 0 0 0 .311-.752l-.176-6.74a2 2 0 0 0-.477-1.246l-.515-.605a.8.8 0 0 1 .023-1.064l.363-.39a.8.8 0 0 1 .784-.23l3.415.879a1 1 0 0 0 1.084-.418l.9-1.363a1 1 0 0 1 .804-.449l1.488-.046a.611.611 0 0 0 .497-.94l-1.76-2.753a.6.6 0 0 0-.657-.258l-4.439 1.154a2 2 0 0 0-.685.327l-.745.55a2 2 0 0 1-1.08.39l-2.735.147a1 1 0 0 0-.647.286L8.186 7.064a1 1 0 0 1-.995.243l-2.13-.654a.8.8 0 0 0-.797.196z\"/>";
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

/** Build a <BbSaintPeter/> icon as a live SVGSVGElement (browser only). */
export function BbSaintPeter(options: IconOptions = {}): SVGSVGElement {
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
