// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.2 10.524-1.183 1.578 1.361.922a1 1 0 0 1 .368.456l.572 1.431a1 1 0 0 0 .418.489l2.392 1.42a1 1 0 0 0 .87.073l1.276-.49a1 1 0 0 1 .549-.05l.775.15a.6.6 0 0 1 .417.87L10.946 19.4a1 1 0 0 0-.062.787l.886 2.613 2.012-2.846a1 1 0 0 1 .205-.214l3.09-2.388a1 1 0 0 0 .27-.32l3.513-6.593a1 1 0 0 0 .117-.491l-.045-2.196L15.283 9.7a1 1 0 0 1-.584.02l-.655-.174a1 1 0 0 1-.718-.747l-.252-1.118a1 1 0 0 0-.346-.557L9.244 4.3a1 1 0 0 1-.355-.601l-.265-1.486a.6.6 0 0 0-.974-.357l-.944.783a1 1 0 0 0-.362.77v2.912a1 1 0 0 1-.12.475l-1.943 3.602q-.036.066-.08.125Z\"/>";
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

/** Build a <HornOfAfrica/> icon as a live SVGSVGElement (browser only). */
export function HornOfAfrica(options: IconOptions = {}): SVGSVGElement {
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
