// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.079 21.655a.6.6 0 0 0 .698-.483l.86-4.72a1.5 1.5 0 0 0 .015-.44l-.41-3.585a1 1 0 0 0-.399-.69l-2.614-1.932a1 1 0 0 1-.373-1.06l.224-.847a1 1 0 0 0-.011-.551l-.383-1.239a1 1 0 0 0-.528-.608l-1.364-.646A.6.6 0 0 1 13.54 4l.547-.895a.6.6 0 0 0-.088-.737l-.561-.562a.6.6 0 0 0-.968.17l-.754 1.613a1 1 0 0 1-.32.385l-1.114.809a1 1 0 0 0-.409.717l-.166 1.792a2 2 0 0 1-.94 1.517l-2.08 1.287a2 2 0 0 0-.704.742l-1.334 2.44a1 1 0 0 0 .107 1.117l1.342 1.624a3 3 0 0 1 .544.997l.638 1.996a1.5 1.5 0 0 0 .499.72l1.284 1.014c.24.19.533.302.838.32l2.478.153a.6.6 0 0 1 .531.404l.136.397a.6.6 0 0 0 .454.395l1.577.305a.6.6 0 0 0 .633-.286l.285-.49a1 1 0 0 1 1.044-.479z\"/>";
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

/** Build a <MxCiudadDeMexico/> icon as a live SVGSVGElement (browser only). */
export function MxCiudadDeMexico(options: IconOptions = {}): SVGSVGElement {
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
