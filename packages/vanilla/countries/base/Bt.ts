// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.732 13.678 6.28 7.626a2 2 0 0 1 .75-.61l.534-.25a2 2 0 0 1 1.458-.094l3.453 1.104a3 3 0 0 0 .914.143h3.961a2 2 0 0 1 1.026.283l.749.447a1 1 0 0 1 .47 1.043l-.185.983a1 1 0 0 0 .196.803l.07.088a1 1 0 0 0 .889.377l.696-.072a1 1 0 0 1 1.095.87l.32 2.554a1 1 0 0 1-.872 1.117l-3.555.43q-.284.035-.57.028l-3.263-.072a4 4 0 0 1-1.23-.223l-.842-.294a1 1 0 0 0-.841.085l-.816.486a3 3 0 0 1-.88.35l-.732.163a3 3 0 0 1-1.767-.142l-1.341-.536a2 2 0 0 0-.794-.142l-1.266.033a1 1 0 0 1-.719-.28L1.838 15a1 1 0 0 1-.106-1.322Z\"/>";
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

/** Build a <Bt/> icon as a live SVGSVGElement (browser only). */
export function Bt(options: IconOptions = {}): SVGSVGElement {
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
