// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.064 10.825-.63 4.193a.5.5 0 0 0 .085.362l.776 1.098a.5.5 0 0 1 .073.155l.539 1.941a.5.5 0 0 0 .169.256l1.394 1.12a.5.5 0 0 1 .185.343l.173 1.84a.5.5 0 0 0 .686.416l.716-.29a.5.5 0 0 0 .31-.52l-.207-1.794a.5.5 0 0 1 .015-.19l.515-1.879a.5.5 0 0 1 .188-.272l.913-.664a.5.5 0 0 0 .15-.174l.926-1.786a.5.5 0 0 0 .044-.122l1.243-5.62a.5.5 0 0 1 .039-.112l1.406-2.882a.5.5 0 0 0 .046-.283l-.2-1.573a.5.5 0 0 1 .107-.378l.526-.648a.5.5 0 0 0-.111-.73l-1.777-1.188a.5.5 0 0 0-.653.087l-.572.652a.5.5 0 0 1-.21.142l-1.76.62a.5.5 0 0 0-.256.202L7.137 10.63a.5.5 0 0 0-.073.194Z\"/>";
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

/** Build a <Tw/> icon as a live SVGSVGElement (browser only). */
export function Tw(options: IconOptions = {}): SVGSVGElement {
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
