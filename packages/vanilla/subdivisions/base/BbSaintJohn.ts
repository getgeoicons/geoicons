// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.888 21.499a.8.8 0 0 0 1.078.234l1.709-1.04a1 1 0 0 0 .435-.556l.772-2.475a1 1 0 0 1 .625-.647l4.835-1.686a2 2 0 0 0 1.085-.91l1.021-1.819a3 3 0 0 1 .579-.733l1.397-1.294a.6.6 0 0 0 .092-.773l-.415-.622a.6.6 0 0 0-.85-.154l-.915.66a1 1 0 0 1-.566.188l-.266.005a1 1 0 0 1-.708-.277l-1.994-1.902a1 1 0 0 0-.455-.249l-1.357-.328a1 1 0 0 1-.725-.69l-.118-.403a1 1 0 0 0-.827-.71l-.994-.133a2 2 0 0 1-1.046-.473L8.465 2.265a.6.6 0 0 0-.845.058l-2.647 3.03a2 2 0 0 1-.644.49l-1.994.952a1 1 0 0 0-.561.78l-.519 4.215a1 1 0 0 0 .248.79l2.937 3.28a.6.6 0 0 1 .15.337l.146 1.393a.6.6 0 0 0 .53.534l1.167.132a.6.6 0 0 1 .429.259z\"/>";
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

/** Build a <BbSaintJohn/> icon as a live SVGSVGElement (browser only). */
export function BbSaintJohn(options: IconOptions = {}): SVGSVGElement {
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
