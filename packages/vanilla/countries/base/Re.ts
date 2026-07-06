// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m21.665 16.914.194 2.367a1 1 0 0 1-.2.688l-.225.294a1 1 0 0 1-.17.176l-.49.391a1 1 0 0 1-.514.213l-5.064.568a1 1 0 0 1-.385-.032l-2.95-.839-2.926-1.15a1 1 0 0 1-.404-.293l-.517-.623a1 1 0 0 0-.608-.349l-1.09-.179a1 1 0 0 1-.74-.558l-.194-.406a1 1 0 0 0-.27-.345l-.823-.674a1 1 0 0 1-.29-.39l-.203-.486a1 1 0 0 1-.066-.531l.12-.808a1 1 0 0 0-.155-.698l-.933-1.41a1 1 0 0 0-.105-.133L1.57 10.544a1 1 0 0 1-.266-.59l-.07-.736a1 1 0 0 1 .168-.654l.127-.187a1 1 0 0 1 .663-.425l.46-.077a1 1 0 0 0 .657-.415l.18-.26a1 1 0 0 0 .178-.637L3.58 5.25a.75.75 0 0 1 .748-.8h.748a1 1 0 0 0 .689-.275l1.147-1.089a1 1 0 0 1 .368-.222l1.135-.384a1 1 0 0 1 .666.009l1.211.446 1.784.408a1 1 0 0 0 .223.025h1.386a1 1 0 0 1 .297.045l1.753.545a1 1 0 0 1 .2.086l1.17.67a1 1 0 0 1 .385.395l.53.987a1 1 0 0 1 .12.473v1.137a1 1 0 0 0 .181.575l2.308 3.281a1 1 0 0 0 .371.32l1.065.532a1 1 0 0 1 .536.713l.14.763a1 1 0 0 1-.08.61l-.903 1.903a1 1 0 0 0-.093.511Z\"/>";
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

/** Build a <Re/> icon as a live SVGSVGElement (browser only). */
export function Re(options: IconOptions = {}): SVGSVGElement {
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
