// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.748 8.045-.323.864a1 1 0 0 0 .23 1.057l.744.744a1 1 0 0 0 .981.254l.882-.252a.75.75 0 0 1 .933.538l.111.442a.75.75 0 0 1-.584.92l-.392.075a.6.6 0 0 0-.361.956l.554.718a1 1 0 0 1 .192.431l.61 3.347a.6.6 0 0 0 .854.431l.863-.422a1 1 0 0 1 .948.037l1.428.843a1 1 0 0 1 .27.233l.462.573a1 1 0 0 0 1.522.04l.974-1.086a1 1 0 0 1 .627-.325l1.668-.196a.6.6 0 0 1 .637.397l.094.268a.6.6 0 0 0 .745.374l1.507-.472a.6.6 0 0 0 .297-.937l-.613-.8a1 1 0 0 1 .348-1.503l1.845-.919a1 1 0 0 0 .527-1.124l-.162-.692a1 1 0 0 1 .534-1.128l.696-.34a1 1 0 0 0 .386-.332l.719-1.047a1 1 0 0 0 .172-.487l.074-.924a1 1 0 0 0-.55-.973l-1.175-.589a1 1 0 0 0-.406-.105l-1.248-.052a1 1 0 0 1-.748-.385l-1.459-1.876a1 1 0 0 0-1.236-.28l-.357.179a1 1 0 0 1-.996-.058l-1.432-.939a1 1 0 0 0-.88-.106L9.32 4.454a1 1 0 0 0-.667.97l.032 1.133a1 1 0 0 1-1 1.028h-1.82a1 1 0 0 1-.52-.146L4.29 6.797a1 1 0 0 0-1.085.03L2.12 7.57a1 1 0 0 0-.372.475Z\"/>";
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

/** Build a <CentralAsia/> icon as a live SVGSVGElement (browser only). */
export function CentralAsia(options: IconOptions = {}): SVGSVGElement {
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
