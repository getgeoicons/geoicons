// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.675 20.701 2.646 1.777a.5.5 0 0 0 .73-.199l1.735-3.615a.5.5 0 0 1 .127-.165l2.594-2.202a.5.5 0 0 0 .1-.647l-.806-1.283a.5.5 0 0 1-.076-.263l-.04-7.668a.5.5 0 0 1 .106-.31l2.223-2.845-1.692.234a.5.5 0 0 1-.398-.12l-.573-.501a.5.5 0 0 0-.536-.079l-1.398.635a.5.5 0 0 0-.197.161l-.65.894a.5.5 0 0 1-.487.2l-2.624-.44a.5.5 0 0 1-.206-.086L9.924 2.527a.5.5 0 0 0-.289-.092H7.77a.5.5 0 0 1-.286-.09l-1.37-.956a.5.5 0 0 0-.551-.013L3.476 2.684a.5.5 0 0 0-.18.653l2.287 4.43a.5.5 0 0 1-.032.512L3.216 11.68a.5.5 0 0 0 .052.63l.615.64a.5.5 0 0 1 .06.618l-.436.676a.5.5 0 0 0 .173.706l7.281 4.136a.5.5 0 0 1 .237.306l.272 1.023a.5.5 0 0 0 .205.286Z\"/>";
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

/** Build a <Ke/> icon as a live SVGSVGElement (browser only). */
export function Ke(options: IconOptions = {}): SVGSVGElement {
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
