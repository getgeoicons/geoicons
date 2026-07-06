// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.288 18.822-1.007 2.57a.5.5 0 0 0 .612.66l1.889-.583a.5.5 0 0 1 .412.054l1.89 1.18a.5.5 0 0 0 .334.072l4.727-.663a.5.5 0 0 0 .409-.639l-.234-.783a.5.5 0 0 1 .234-.58l1.123-.63a.5.5 0 0 0 .142-.753l-2.63-3.208a.5.5 0 0 1 .18-.771l4.715-2.158a.5.5 0 0 0 .249-.657l-1.897-4.29a.5.5 0 0 1-.03-.314l.576-2.487a.5.5 0 0 0-.078-.4l-1.51-2.155a.5.5 0 0 0-.647-.152l-3.161 1.711a.5.5 0 0 1-.47.004L11.29 2.9a.5.5 0 0 1-.24-.278l-.34-.965a.5.5 0 0 0-.447-.333l-1.545-.079a.5.5 0 0 0-.47.731l.568 1.086a.5.5 0 0 1-.025.504l-.923 1.418a.5.5 0 0 1-.415.227l-1.858.016a.5.5 0 0 0-.495.533l.172 2.663a.5.5 0 0 1-.155.396l-1.462 1.385a.5.5 0 0 0-.15.434l.947 6.626a.5.5 0 0 0 .385.417l2.095.472a.5.5 0 0 1 .356.67Z\"/>";
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

/** Build a <De/> icon as a live SVGSVGElement (browser only). */
export function De(options: IconOptions = {}): SVGSVGElement {
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
