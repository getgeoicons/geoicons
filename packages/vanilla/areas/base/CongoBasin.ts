// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.353 17.023-2.55.218-2.6-3.414a1 1 0 0 1-.159-.907l.722-2.286a1 1 0 0 0-.36-1.107l-.466-.343a1 1 0 0 1-.294-1.268l.417-.798a1 1 0 0 1 .887-.538h.678a1 1 0 0 0 .948-.683L7 1.641a.581.581 0 0 1 1.13.125l.333 3.294a1 1 0 0 0 1.241.869l1.135-.288a1 1 0 0 0 .438-.239l2.392-2.238a.848.848 0 0 1 1.368.307l.527 1.332q.067.167.186.3l2.446 2.728a1 1 0 0 0 .552.314l1.57.308a1 1 0 0 1 .632.418l.486.711a1 1 0 0 1 .088.97l-1.156 2.602a1 1 0 0 0-.085.355l-.157 3.06a1 1 0 0 0 .145.572l.722 1.18a.6.6 0 0 1-.133.777l-.893.73a1 1 0 0 0-.366.717l-.129 2.255-5.558-1.185-.274-3.371-3.024.716a.6.6 0 0 1-.66-.289l-.647-1.144a1 1 0 0 0-.956-.504Z\"/>";
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

/** Build a <CongoBasin/> icon as a live SVGSVGElement (browser only). */
export function CongoBasin(options: IconOptions = {}): SVGSVGElement {
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
