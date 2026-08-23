// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.831 22.64-2.24-.907a1 1 0 0 1-.468-.39l-3.042-4.77a2 2 0 0 0-1.005-.805l-.688-.249a1 1 0 0 1-.658-.98l.176-4.447a1 1 0 0 1 .722-.921l.654-.189a2 2 0 0 0 .97-.626l1.203-1.414a1 1 0 0 0 .164-1.025l-.337-.828a1 1 0 0 1 .597-1.322l1.146-.398a2 2 0 0 0 .906-.642l.862-1.08a1 1 0 0 1 .922-.367l1.6.227a3 3 0 0 0 .8.006l2.176-.278a1 1 0 0 1 .53.077l3.588 1.58a1 1 0 0 1 .491.468l.667 1.333a2 2 0 0 0 1.046.962l1.057.423a.6.6 0 0 1 .303.846l-.553 1.008a1 1 0 0 1-.945.517l-1.223-.084a2 2 0 0 0-1.197.3l-.113.07a2 2 0 0 0-.894 1.272l-.205.944a1 1 0 0 1-.522.678l-.762.39a1 1 0 0 0-.453 1.307l.87 1.904a1 1 0 0 1 .045.718l-.342 1.08a1 1 0 0 1-.607.636l-1.221.45a1 1 0 0 0-.534.464l-.876 1.624a2 2 0 0 1-.258.37l-1.676 1.908a.6.6 0 0 1-.676.16Z\"/>";
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

/** Build a <PaHerrera/> icon as a live SVGSVGElement (browser only). */
export function PaHerrera(options: IconOptions = {}): SVGSVGElement {
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
