// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.485 22.725.498-.042a1 1 0 0 0 .811-.55l.31-.619a1 1 0 0 1 .811-.55l.923-.076a1.5 1.5 0 0 0 1.348-1.214l.399-2.088c.091-.481.112-.974.06-1.46l-.418-3.97a2 2 0 0 1 .065-.754l.358-1.269a1.5 1.5 0 0 0-.12-1.112l-2.488-4.672a1 1 0 0 0-.736-.52l-3.18-.468a1 1 0 0 1-.734-.515l-.597-1.109a1 1 0 0 0-.9-.525l-1.066.02a1 1 0 0 0-.967 1.167l.283 1.666a1 1 0 0 1-.113.654L6.36 5.921a1 1 0 0 0-.112.661L6.427 7.6a4 4 0 0 0 .396 1.164l2.948 5.625c.179.342.307.707.382 1.085l1.267 6.448a1 1 0 0 0 1.065.803Z\"/>";
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

/** Build a <Dm/> icon as a live SVGSVGElement (browser only). */
export function Dm(options: IconOptions = {}): SVGSVGElement {
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
