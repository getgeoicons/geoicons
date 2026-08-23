// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.811 9.866a1 1 0 0 0-.343.68l-.1 1.3a1 1 0 0 0 .154.613l.474.744a1 1 0 0 1 .013 1.055l-.403.666a1 1 0 0 0 .15 1.226l1.323 1.317a.8.8 0 0 0 .628.23l4.683-.371a2 2 0 0 0 1.147-.479l1.4-1.204a2 2 0 0 1 1.229-.483l7.707-.29a2 2 0 0 0 1.339-.585l1.148-1.147a1 1 0 0 0 .285-.58l.073-.575a1 1 0 0 0-.459-.974l-.797-.502a1 1 0 0 0-.738-.132l-.998.209a2 2 0 0 1-1.056-.065l-1.32-.451a2 2 0 0 1-1.019-.784l-.621-.933a3 3 0 0 0-.717-.751l-1.248-.92a.6.6 0 0 0-.881.191l-.597 1.076a1 1 0 0 1-1.003.507l-4.5-.582a1 1 0 0 0-.902.359l-.268.328a1 1 0 0 1-1.176.283l-.365-.16a1 1 0 0 0-1.056.16z\"/>";
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

/** Build a <CuGuantanamo/> icon as a live SVGSVGElement (browser only). */
export function CuGuantanamo(options: IconOptions = {}): SVGSVGElement {
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
