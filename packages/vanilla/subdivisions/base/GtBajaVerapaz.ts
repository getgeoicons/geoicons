// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.512 8.129a1 1 0 0 0-1.154.402l-.516.79a.6.6 0 0 1-.96.06l-2.02-2.383a.6.6 0 0 0-.982.096l-.943 1.688a.6.6 0 0 1-.431.3l-.746.116a.6.6 0 0 0-.505.652l.122 1.248a1 1 0 0 0 .301.623l2.924 2.816a1 1 0 0 1 .26.419l.619 1.959a1 1 0 0 0 1.017.696l5.75-.37a1 1 0 0 0 .621-.268l2.374-2.228 4.577-3.397a1 1 0 0 1 .553-.196l1.428-.061a1 1 0 0 0 .956-1.042l-.055-1.277a1 1 0 0 0-.378-.742l-.128-.101a1 1 0 0 0-.985-.147l-1.129.441a1 1 0 0 1-.275.065l-7.332.653a2 2 0 0 1-.81-.094z\"/>";
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

/** Build a <GtBajaVerapaz/> icon as a live SVGSVGElement (browser only). */
export function GtBajaVerapaz(options: IconOptions = {}): SVGSVGElement {
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
