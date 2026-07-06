// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.93 22.264-.753-.678a1 1 0 0 1-.296-.482l-1.034-3.811a1 1 0 0 1-.034-.204l-.215-3.705-.428-2.77a.5.5 0 0 1 .038-.282l1.013-2.234a.5.5 0 0 0 .028-.334l-.266-1.011a.5.5 0 0 1 .177-.523l.835-.647a.5.5 0 0 0 .175-.258l.384-1.344a.5.5 0 0 0-.298-.602L6.989 2.88a.5.5 0 0 1-.3-.594l.093-.352a.5.5 0 0 1 .379-.36l1.394-.297a.5.5 0 0 1 .543.248l.486.887a.5.5 0 0 0 .133.156l2.253 1.739q.065.05.11.116l2.83 4.204a.5.5 0 0 1 .071.161l.427 1.756a.5.5 0 0 0 .064.15l1.618 2.536a1 1 0 0 1 .138.343l.581 2.928a1 1 0 0 1-.01.436l-.508 2.041a1 1 0 0 1-.256.459l-1.498 1.529a1 1 0 0 1-.364.236L11.165 22.7a1 1 0 0 1-.546.044l-1.216-.243a1 1 0 0 1-.473-.237Z\"/>";
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

/** Build a <Lk/> icon as a live SVGSVGElement (browser only). */
export function Lk(options: IconOptions = {}): SVGSVGElement {
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
