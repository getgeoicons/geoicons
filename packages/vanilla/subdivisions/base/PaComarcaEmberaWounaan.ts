// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.91 1.834a2 2 0 0 1 .847.582l3.193 3.73q.339.395.604.842l2.54 4.283a1 1 0 0 1-.117 1.18l-.784.869a4 4 0 0 1-1.56 1.063l-2.276.858a.6.6 0 0 1-.664-.168l-2.51-2.88a5 5 0 0 1-.61-.873l-3.026-5.5a2 2 0 0 1 .081-2.064l.631-.958a2 2 0 0 1 .44-.477l.569-.444a2 2 0 0 1 1.903-.307zM4.253 13.712a1 1 0 0 1 1.483-.025l1.974 2.109q.347.37.59.817l1.1 2.013a2 2 0 0 1 .244.959v1.909a1.14 1.14 0 0 1-1.604 1.043l-2.342-1.039a3 3 0 0 1-1.274-1.07L2.91 18.172a2 2 0 0 1-.339-1.057l-.018-.651a2 2 0 0 1 .494-1.375z\"/>";
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

/** Build a <PaComarcaEmberaWounaan/> icon as a live SVGSVGElement (browser only). */
export function PaComarcaEmberaWounaan(options: IconOptions = {}): SVGSVGElement {
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
