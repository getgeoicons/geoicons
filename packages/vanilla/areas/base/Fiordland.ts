// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.566 19.885-.162-.727a.6.6 0 0 1 .381-.695l1.178-.427a1 1 0 0 0 .59-1.307L7.08 15.53a1 1 0 0 1-.032-.639l.556-1.967a.6.6 0 0 1 .72-.42l.46.112a.6.6 0 0 0 .739-.638l-.166-1.805a1 1 0 0 1 .172-.658l1.468-2.137a1 1 0 0 1 .147-.17l3.646-3.352a1 1 0 0 0 .252-.366l.623-1.567a1 1 0 0 1 1.06-.622l.049.007a1 1 0 0 1 .728.478l1.03 1.724a1 1 0 0 1 .133.643l-.504 3.833a1 1 0 0 1-.088.298l-.539 1.137a1 1 0 0 1-.433.454l-.808.431a1 1 0 0 0-.523.774l-.159 1.448a1 1 0 0 1-.173.462l-.611.88a1 1 0 0 0-.178.612l.057 1.405a1 1 0 0 1-.116.509l-1.317 2.483c-.069.13-.108.275-.115.422l-.039.826a1 1 0 0 1-.901.948l-.396.04a1 1 0 0 0-.773.503l-.253.448a1 1 0 0 1-.777.505l-2.02.19a.716.716 0 0 1-.609-1.182l.048-.054a.792.792 0 0 0-.814-1.28l-.31.087a.6.6 0 0 1-.748-.447Z\"/>";
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

/** Build a <Fiordland/> icon as a live SVGSVGElement (browser only). */
export function Fiordland(options: IconOptions = {}): SVGSVGElement {
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
