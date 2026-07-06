// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.984 6.666-.889-.881a.5.5 0 0 0-.634-.057l-.512.35a.5.5 0 0 0-.218.422l.028 1.57a.5.5 0 0 0 .207.397L6.57 9.626a.5.5 0 0 1 .152.176l4.797 9.319a.5.5 0 0 0 .184.198l5.301 3.231a.5.5 0 0 0 .676-.15l1.162-1.742a.5.5 0 0 0 .063-.422l-.43-1.429a.5.5 0 0 1-.001-.285l.716-2.431a.5.5 0 0 0-.131-.5l-1.514-1.475a.5.5 0 0 1-.143-.27l-.202-1.121a.5.5 0 0 0-.628-.393l-1.169.33a.5.5 0 0 1-.558-.214l-1.441-2.283a.5.5 0 0 1-.017-.507l1.17-2.142a.5.5 0 0 1 .317-.246l2.584-.649a.5.5 0 0 0 .378-.473l.03-1.339a.5.5 0 0 0-.355-.49l-1.238-.374a.5.5 0 0 0-.171-.02l-1.25.066a1 1 0 0 1-.778-.31L11.72 1.2l-.102 1.823a.5.5 0 0 1-.153.333l-.9.864a.5.5 0 0 1-.199.117l-1.537.474a.5.5 0 0 0-.299.252l-.747 1.474a.5.5 0 0 1-.798.129Z\"/>";
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

/** Build a <Pe/> icon as a live SVGSVGElement (browser only). */
export function Pe(options: IconOptions = {}): SVGSVGElement {
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
