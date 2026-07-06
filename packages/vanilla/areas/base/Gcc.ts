// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.261 12.252-2.9-3.596a.6.6 0 0 1-.127-.455l.119-.905 2.551-.983-.77-1.648 1.628-.326a1 1 0 0 1 .688.11l2.042 1.154a1 1 0 0 1 .15.104l1.907 1.597a1 1 0 0 0 .709.231l.217-.015a1 1 0 0 0 .832-.558l.144-.296a.6.6 0 0 1 .524-.336l.34-.01a.6.6 0 0 1 .492.235l.236.307a.6.6 0 0 1 .096.545l-.063.2a1 1 0 0 0 .101.821l1.765 2.884a1 1 0 0 0 .494.411l.819.315a1 1 0 0 0 .507.056l1.016-.153a1 1 0 0 0 .549-.272l1.736-1.689.467 1.849a1 1 0 0 0 .552.663l.634.292a1 1 0 0 1 .417.358l.667 1.01-1.483 2.69a1 1 0 0 1-.219.27l-1.947 1.696a1 1 0 0 1-.407.214l-1.631.42-1.024-2.353-2.617.731-1.675 1.914L10.07 18.7a.6.6 0 0 0-.63.01l-1.23.784-2.976-3.954a1 1 0 0 1-.174-.369l-.603-2.525a1 1 0 0 0-.195-.395Z\"/>";
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

/** Build a <Gcc/> icon as a live SVGSVGElement (browser only). */
export function Gcc(options: IconOptions = {}): SVGSVGElement {
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
