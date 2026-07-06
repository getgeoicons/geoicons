// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.29 12.014 1.728 6.94a.5.5 0 0 0 .597.366l4.717-1.082a.5.5 0 0 0 .187-.087l2.111-1.573a.5.5 0 0 1 .79.31l.46 2.506q.017.089.063.166l1.575 2.641a.25.25 0 0 0 .462-.09l.7-4.604a.5.5 0 0 0-.004-.177l-.964-4.601a.5.5 0 0 0-.896-.188l-1.025 1.436a.5.5 0 0 1-.862-.084l-1.004-2.205a.5.5 0 0 1 .256-.666l3.097-1.344a.5.5 0 0 0 .241-.221l.867-1.61a.5.5 0 0 0-.217-.684l-1.348-.674a.5.5 0 0 0-.225-.053l-6.308.02a.5.5 0 0 1-.501-.529l.105-1.839a.5.5 0 0 0-.093-.32l-.786-1.095a.25.25 0 0 0-.383-.027l-.488.506a.5.5 0 0 1-.655.057L6.264 1.582a.5.5 0 0 0-.76.218l-.68 1.71a.5.5 0 0 0 .149.571l2.161 1.767a.5.5 0 0 1-.039.803l-2.06 1.374a.5.5 0 0 0 .06.866l1.513.73a.5.5 0 0 1 .251.626l-.551 1.47a.5.5 0 0 0-.017.297Z\"/>";
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

/** Build a <Bd/> icon as a live SVGSVGElement (browser only). */
export function Bd(options: IconOptions = {}): SVGSVGElement {
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
