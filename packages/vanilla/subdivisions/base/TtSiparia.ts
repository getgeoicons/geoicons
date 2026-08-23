// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.852 11.586a.6.6 0 0 0-.68-.343L6.63 12.266a1 1 0 0 0-.678.535l-.26.53a1 1 0 0 1-.614.518l-2.598.768a1 1 0 0 0-.441.27l-.604.635a.79.79 0 0 0 .434 1.32l.497.09a1 1 0 0 0 .613-.086l3.344-1.626a1 1 0 0 1 .61-.086l1.072.187a2 2 0 0 0 .564.018l3.492-.386a1 1 0 0 1 .587.115l1.862 1.01a1 1 0 0 0 .748.084l2.172-.613q.25-.07.51-.075l2.357-.039a.6.6 0 0 0 .585-.68l-.177-1.295a.6.6 0 0 1 .431-.659l1.016-.286a.6.6 0 0 0 .435-.53l.185-2.331a.6.6 0 0 0-.268-.549l-2.055-1.353a.6.6 0 0 0-.389-.096l-1.934.192a1 1 0 0 1-.48-.07l-1.568-.646a.87.87 0 0 0-1.202.817l.014 1.04a2 2 0 0 1-.082.595l-.237.798a2 2 0 0 1-.963 1.19l-.849.462a.6.6 0 0 1-.835-.285z\"/>";
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

/** Build a <TtSiparia/> icon as a live SVGSVGElement (browser only). */
export function TtSiparia(options: IconOptions = {}): SVGSVGElement {
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
