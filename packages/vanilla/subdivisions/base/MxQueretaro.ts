// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.17 19.74a1 1 0 0 1 .418.91l-.074.786a1 1 0 0 0 .59 1.007l.416.185a1 1 0 0 0 .78.014l.812-.328a1 1 0 0 0 .59-1.198l-.205-.727a.6.6 0 0 1 .29-.69l.615-.334a.6.6 0 0 0 .31-.467l.267-2.665a.8.8 0 0 1 .49-.66l2.62-1.082a1 1 0 0 0 .55-.561l1.94-4.976a1 1 0 0 1 .687-.606l2.532-.637a.6.6 0 0 0 .431-.746l-1.328-4.669a.6.6 0 0 0-1.04-.218l-1.356 1.637a1 1 0 0 1-1.198.265L13.62 2.707a.6.6 0 0 0-.85.462l-.216 1.58a1 1 0 0 0 .103.594l.198.382a1 1 0 0 1-.78 1.454l-1.648.179a1 1 0 0 0-.872.795L9.2 9.893a1 1 0 0 1-.998.8l-3.691-.064a1 1 0 0 0-.934.599l-.814 1.86a1 1 0 0 0-.02.753l1.31 3.48a1 1 0 0 0 .357.465z\"/>";
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

/** Build a <MxQueretaro/> icon as a live SVGSVGElement (browser only). */
export function MxQueretaro(options: IconOptions = {}): SVGSVGElement {
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
