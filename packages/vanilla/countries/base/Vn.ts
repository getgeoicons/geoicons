// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.667 22.8-.473-2.217a.5.5 0 0 1 .257-.547l1.13-.594a.5.5 0 0 0 .254-.321l.137-.548a.5.5 0 0 1 .285-.337l1.711-.747a.5.5 0 0 0 .3-.44l.128-3.481a.5.5 0 0 0-.116-.339L9.216 7.157l1.111-.44a.5.5 0 0 0 .26-.696l-.48-.918a.5.5 0 0 0-.525-.262l-.653.109a.5.5 0 0 1-.476-.185L6.655 2.47l4.432-1.235a.5.5 0 0 1 .25-.005l1.525.365a.5.5 0 0 1 .372.383l.197.93a.5.5 0 0 0 .31.364l1.863.715-2.976 2.17a1 1 0 0 0-.385.583l-.07.304a1 1 0 0 0-.002.441l.099.443a1 1 0 0 0 .235.454l3.066 3.386q.033.036.058.078l1.123 1.871q.08.136.116.29l.435 1.883q.042.181.015.366l-.21 1.47a1 1 0 0 1-.192.463l-.595.785a1 1 0 0 1-.244.23z\"/>";
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

/** Build a <Vn/> icon as a live SVGSVGElement (browser only). */
export function Vn(options: IconOptions = {}): SVGSVGElement {
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
