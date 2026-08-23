// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.743 11.301a.3.3 0 0 0-.105-.39l-3.08-1.964a2 2 0 0 1-.83-1.078l-.62-1.937a2 2 0 0 0-.599-.906L11.373 1.46a1 1 0 0 0-.65-.243l-4.536-.016a.3.3 0 0 0-.301.3v1.012a.3.3 0 0 1-.305.3L4.323 2.79a.6.6 0 0 0-.604.51l-.158 1.043a1 1 0 0 0 .238.81l.612.697a1 1 0 0 1 .244.77l-.346 3.143a3 3 0 0 0 .092 1.133l.483 1.732a.6.6 0 0 1-.476.753l-.57.098a.6.6 0 0 0-.46.797l1.104 3.028a1 1 0 0 0 .458.534l1.202.661a1 1 0 0 1 .462.547l.419 1.2a1.5 1.5 0 0 0 .485.683l1.945 1.54a1 1 0 0 0 .924.168l.081-.026a1 1 0 0 0 .66-.686l.717-2.59a1 1 0 0 1 1.307-.671L16.52 19.9a1 1 0 0 0 .81-.054l1.621-.854a1 1 0 0 0 .526-1.014l-.359-2.748a2 2 0 0 1 .206-1.176z\"/>";
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

/** Build a <MxChihuahua/> icon as a live SVGSVGElement (browser only). */
export function MxChihuahua(options: IconOptions = {}): SVGSVGElement {
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
