// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.287 11.268-.955 2.12a.5.5 0 0 0 .08.535L4.2 17.095a.5.5 0 0 0 .393.17l3.666-.132a.5.5 0 0 0 .47-.387l.186-.808a.5.5 0 0 1 .303-.353l2.217-.875a.5.5 0 0 1 .388.008l.979.437a.5.5 0 0 0 .609-.163l1.369-1.891a.5.5 0 0 1 .372-.206l2.893-.193a.5.5 0 0 1 .47.256l.448.805a.5.5 0 0 0 .499.254l1.226-.154a.5.5 0 0 0 .392-.286l1.72-3.728-3.733-1.903a.5.5 0 0 0-.355-.038l-1.715.452a.5.5 0 0 1-.298-.013l-1.354-.492a.5.5 0 0 0-.388.02l-1.859.897a.5.5 0 0 1-.628-.166l-1.024-1.482a.5.5 0 0 0-.68-.137l-.985.628a.5.5 0 0 1-.314.076l-1.675-.153a.5.5 0 0 0-.43.178L4.615 11.01a.5.5 0 0 1-.46.174l-1.335-.205a.5.5 0 0 0-.532.289Z\"/>";
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

/** Build a <Sk/> icon as a live SVGSVGElement (browser only). */
export function Sk(options: IconOptions = {}): SVGSVGElement {
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
