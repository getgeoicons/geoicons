// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.297 21.23a.603.603 0 0 0 .826-.87l-.606-.7a1 1 0 0 1-.224-.85l.145-.726c.038-.187.129-.36.261-.498l1.545-1.6a4 4 0 0 0 .515-.661l2.289-3.67a1 1 0 0 0 .147-.62l-.146-1.597a2 2 0 0 1 .187-1.044l.293-.613a.4.4 0 0 0-.358-.573l-6.94-.056a2 2 0 0 1-.893-.218L5.875 2.61a.536.536 0 0 0-.69.775l2.148 3.21a.6.6 0 0 1-.328.908l-3.127.926a1 1 0 0 0-.457.287l-.19.21a.88.88 0 0 0-.077 1.083.88.88 0 0 1-.241 1.224l-1.043.694a.877.877 0 0 0 .724 1.574l.789-.223a1 1 0 0 1 1.066.355l1.246 1.63q.282.368.662.635l3.897 2.73a2 2 0 0 0 .827.336l.84.136c.45.074.913-.018 1.301-.258a.95.95 0 0 1 1.082.058z\"/>";
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

/** Build a <CrCartago/> icon as a live SVGSVGElement (browser only). */
export function CrCartago(options: IconOptions = {}): SVGSVGElement {
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
