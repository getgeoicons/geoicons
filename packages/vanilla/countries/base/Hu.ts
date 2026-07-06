// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.243 16.743-3.567 1.82a.5.5 0 0 1-.374.033l-2.98-.917a.5.5 0 0 1-.212-.13l-3.608-3.736a.5.5 0 0 1-.034-.656l.798-1.02a.5.5 0 0 0 .107-.32l-.05-1.92a.5.5 0 0 1 .544-.512l1.106.098A.5.5 0 0 0 4.47 9.2l.388-.818a.5.5 0 0 1 .809-.135l1.01 1.031a.5.5 0 0 0 .386.15l1.997-.116a.5.5 0 0 0 .448-.349l.29-.922a.5.5 0 0 1 .332-.328l2.013-.609a.5.5 0 0 1 .258-.008l1.22.281a.5.5 0 0 0 .53-.212l.966-1.467a.5.5 0 0 1 .392-.224l2.279-.116a.5.5 0 0 1 .422.195l.541.704a.5.5 0 0 0 .501.185l1.112-.238a.5.5 0 0 1 .426.106l1.73 1.45a.5.5 0 0 1 .14.576l-.232.561a.5.5 0 0 1-.39.303l-1.133.164a.5.5 0 0 0-.367.257l-3.618 6.683a.5.5 0 0 1-.424.262l-4.04.122a.5.5 0 0 0-.212.055Z\"/>";
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

/** Build a <Hu/> icon as a live SVGSVGElement (browser only). */
export function Hu(options: IconOptions = {}): SVGSVGElement {
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
