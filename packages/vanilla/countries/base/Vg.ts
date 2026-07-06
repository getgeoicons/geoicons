// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.377 11.663-2.765 2.81 1.832.475a.5.5 0 0 0 .402-.067l1.6-1.06a.5.5 0 0 1 .241-.081l1.245-.085a.5.5 0 0 0 .266-.1l.97-.73a.5.5 0 0 1 .412-.088l1.043.24a.5.5 0 0 0 .576-.3l.18-.447a.5.5 0 0 0-.316-.665l-1.605-.496a.5.5 0 0 0-.213-.018l-3.576.466a.5.5 0 0 0-.292.146Zm10.635-2.294L18.2 12.17l4.6-3.059-3.292-.103a.5.5 0 0 0-.496.36ZM3.856 12.17H1.43l-.085-.233a.5.5 0 0 1 .223-.606l1.09-.619a.5.5 0 0 1 .313-.06l1.865.247-.54 1.008a.5.5 0 0 1-.44.264Z\"/>";
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

/** Build a <Vg/> icon as a live SVGSVGElement (browser only). */
export function Vg(options: IconOptions = {}): SVGSVGElement {
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
