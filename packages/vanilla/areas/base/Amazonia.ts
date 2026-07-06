// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.782 5.696-.185-1.433a1 1 0 0 1 .174-.704l.707-1.003a1 1 0 0 1 .487-.368l1.447-.505a1 1 0 0 1 .654-.002l2.247.769a1 1 0 0 0 .56.025l.91-.22a1 1 0 0 1 .955.276l1.464 1.515a1 1 0 0 0 .704.305l.897.015a1 1 0 0 1 .49.137l.629.369a1 1 0 0 1 .442.546l.382 1.144a1 1 0 0 0 .432.54L18.16 8.3a1 1 0 0 0 .364.132l1.892.295a1 1 0 0 1 .414.165l1.521 1.05a1 1 0 0 1 .431.855l-.02.646a1 1 0 0 1-.302.683l-1.59 1.553a1 1 0 0 0-.286.535l-.364 1.984a1 1 0 0 1-.172.403l-.814 1.132a1 1 0 0 1-.637.401l-1.78.316a1 1 0 0 0-.813.826l-.146.913a1 1 0 0 1-.242.508l-1.415 1.58a.25.25 0 0 1-.314.049l-1.684-1.002a.25.25 0 0 1-.036-.404l1.118-.97a1 1 0 0 0 .225-1.23l-1.159-2.143a1 1 0 0 0-.886-.524l-.316.002a1 1 0 0 0-.927.64l-.221.576a.25.25 0 0 1-.178.154l-1.908.433a.25.25 0 0 1-.293-.168l-.515-1.617a1 1 0 0 0-.542-.608l-2.402-1.083a1 1 0 0 1-.496-.491l-1.063-2.294a1 1 0 0 0-.386-.433l-.521-.319a1 1 0 0 1-.478-.885l.042-1.323a1 1 0 0 1 .176-.535L2.614 6.39a1 1 0 0 0 .168-.694Z\"/>";
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

/** Build a <Amazonia/> icon as a live SVGSVGElement (browser only). */
export function Amazonia(options: IconOptions = {}): SVGSVGElement {
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
