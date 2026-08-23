// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.71 9.376a1 1 0 0 0-.23 1.126l1.313 3.027a1 1 0 0 0 .374.441l1.582 1.025a1 1 0 0 1 .453.915l-.155 2.034a.6.6 0 0 0 .325.58l1.844.942a.6.6 0 0 0 .86-.406l.992-4.562a1 1 0 0 1 1.233-.754l1.88.497a2 2 0 0 0 1.173-.046l6.159-2.159a1 1 0 0 0 .48-.358L22.4 8.342a1 1 0 0 0 .032-1.124L20.87 4.779a1.004 1.004 0 0 0-1.788.202l-.686 1.905a1 1 0 0 1-.472.545l-.3.159a1 1 0 0 1-1.045-.067L13.8 5.56a1 1 0 0 0-.935-.117l-3.85 1.476a4 4 0 0 1-1.183.258l-3.698.23a1 1 0 0 0-.624.271z\"/>";
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

/** Build a <NiBoaco/> icon as a live SVGSVGElement (browser only). */
export function NiBoaco(options: IconOptions = {}): SVGSVGElement {
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
