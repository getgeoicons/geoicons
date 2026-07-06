// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.245 12.958 3.437 19.5a.5.5 0 0 0 .439.34l6.646.472a.5.5 0 0 0 .396-.151l2.761-2.86a.5.5 0 0 1 .37-.153l5.388.098a.5.5 0 0 0 .503-.42l.198-1.233a.5.5 0 0 1 .456-.42l1.15-.086a.5.5 0 0 0 .457-.423l.579-3.794a.5.5 0 0 0-.03-.258l-1.149-2.923a.5.5 0 0 0-.295-.287l-2.292-.828a.5.5 0 0 1-.219-.156l-2.044-2.53a.5.5 0 0 0-.451-.182l-6.17.78a.5.5 0 0 0-.344.206l-.99 1.391a.5.5 0 0 1-.611.167L6.68 5.579a.5.5 0 0 0-.353-.02l-1.975.62a.5.5 0 0 0-.344.55l.26 1.758a.5.5 0 0 1-.454.572l-1.408.111a.5.5 0 0 0-.448.386l-.727 3.13a.5.5 0 0 0 .013.272Z\"/>";
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

/** Build a <Mk/> icon as a live SVGSVGElement (browser only). */
export function Mk(options: IconOptions = {}): SVGSVGElement {
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
