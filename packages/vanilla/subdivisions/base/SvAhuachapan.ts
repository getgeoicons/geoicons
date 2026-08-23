// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.358 3.794a1 1 0 0 0-.705-.327l-1.406-.05a2 2 0 0 1-1.094-.375l-.715-.513a2 2 0 0 0-1.711-.3l-2.196.62a2 2 0 0 0-.965.614L10.46 5.886a2 2 0 0 1-.475.4L7.14 8.006a1 1 0 0 0-.423.515l-.531 1.47a1 1 0 0 1-.393.497l-2.031 1.33a2 2 0 0 0-.835 1.15l-.36 1.326a2 2 0 0 0 .107 1.343l.16.355a1 1 0 0 1-.333 1.224l-.878.625a.3.3 0 0 0 .05.517l7.633 3.496a.6.6 0 0 0 .687-.135l1.617-1.721a1 1 0 0 1 1.267-.159l1.762 1.125a1 1 0 0 0 .882.096l.718-.263a1 1 0 0 0 .566-.523l1.193-2.61a1 1 0 0 0 .078-.253l.82-4.986a1 1 0 0 0-.083-.591l-.43-.907a.3.3 0 0 1 .214-.423l2.468-.473a.6.6 0 0 0 .461-.416l1.111-3.69a1 1 0 0 0-.217-.96z\"/>";
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

/** Build a <SvAhuachapan/> icon as a live SVGSVGElement (browser only). */
export function SvAhuachapan(options: IconOptions = {}): SVGSVGElement {
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
