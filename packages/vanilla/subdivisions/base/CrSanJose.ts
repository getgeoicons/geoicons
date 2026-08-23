// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.104 5.518a2 2 0 0 0-.568.175l-.783.376a2 2 0 0 1-.954.196l-1.615-.071a2 2 0 0 0-.782.122l-2.205.815a1 1 0 0 0-.636.756l-.274 1.476a2 2 0 0 0 .048.928l.498 1.697a1 1 0 0 0 .665.673l1.471.454a1 1 0 0 0 .994-.24l.767-.75a1 1 0 0 1 .824-.278L9 12.154a1 1 0 0 1 .653.362l2.076 2.561a3 3 0 0 0 1.117.855l1.162.514a1 1 0 0 1 .558.644L15 18.642a1 1 0 0 0 .662.684l1.496.473c.293.092.57.23.821.406l2.277 1.601a1 1 0 0 0 1.478-.388l.179-.375a1 1 0 0 0-.107-1.036l-.133-.175a1 1 0 0 1-.045-1.148l.85-1.314a1 1 0 0 0 .04-1.018l-.664-1.228a2 2 0 0 0-.603-.681l-1.792-1.27a2 2 0 0 0-.876-.348l-2.31-.327a1 1 0 0 1-.595-.313l-1.86-2.022a2 2 0 0 0-1.306-.639l-.95-.079a.6.6 0 0 1-.456-.92l.93-1.46a2 2 0 0 1 1.015-.81l1.38-.492a.6.6 0 0 0 .358-.783l-1.028-2.63a.6.6 0 0 0-.975-.214l-.865.832a1 1 0 0 0-.256.408l-.416 1.263a1 1 0 0 1-.8.676z\"/>";
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

/** Build a <CrSanJose/> icon as a live SVGSVGElement (browser only). */
export function CrSanJose(options: IconOptions = {}): SVGSVGElement {
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
