// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.358 1.552-2.188-.287a.5.5 0 0 0-.561.433l-.25 1.98a.5.5 0 0 1-.102.243L8.4 5.025a.5.5 0 0 0-.092.418l.421 1.841a.5.5 0 0 0 .083.182l.903 1.247a.5.5 0 0 1 .02.556l-.406.659a.5.5 0 0 0-.011.507l.858 1.53a.5.5 0 0 0 .462.255l.794-.04a.5.5 0 0 1 .522.561l-.228 1.824a.5.5 0 0 0 .133.406l1.709 1.803a.5.5 0 0 1-.14.792l-1.385.687a.5.5 0 0 0-.236.246l-.605 1.372a.5.5 0 0 0 .13.58l.377.325a.5.5 0 0 0 .74-.098l.637-.938a.5.5 0 0 1 .433-.219l1.188.045a.5.5 0 0 1 .478.556l-.105.922a.5.5 0 0 0 .224.476l1.522.992a.5.5 0 0 0 .706-.169l.192-.332a.5.5 0 0 0 .011-.48l-.287-.555a.5.5 0 0 1 .002-.463l.016-.031a.5.5 0 0 1 .63-.23l.741.301a.5.5 0 0 0 .633-.233l.235-.455a.5.5 0 0 0 .04-.356l-.685-2.633a.5.5 0 0 0-.089-.18l-1.486-1.912a.5.5 0 0 1-.009-.602l.507-.693a.5.5 0 0 0 .091-.36l-.168-1.281a.5.5 0 0 0-.38-.422l-1.196-.282a.5.5 0 0 1-.384-.528l.129-1.543a.5.5 0 0 0-.414-.534l-3.547-.61a.5.5 0 0 1-.382-.673l1.165-3.02a.5.5 0 0 0 .033-.215l-.138-2.008a.5.5 0 0 0-.434-.461ZM7.882 13.584 4.5 17.074a.5.5 0 0 0-.046.642l.238.328a.5.5 0 0 0 .758.06l3.476-3.463a.5.5 0 0 0 .012-.696l-.33-.354a.5.5 0 0 0-.725-.007Z\"/>";
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

/** Build a <Ph/> icon as a live SVGSVGElement (browser only). */
export function Ph(options: IconOptions = {}): SVGSVGElement {
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
