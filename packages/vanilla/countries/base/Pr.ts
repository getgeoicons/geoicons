// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m20.483 13.265-.697 1.479a.5.5 0 0 1-.339.274l-3.872.899a.5.5 0 0 1-.214.003l-3.336-.686a.5.5 0 0 0-.151-.008l-1.761.178a.5.5 0 0 1-.101 0l-1.709-.175a.5.5 0 0 0-.208.023l-1.912.638a.5.5 0 0 1-.313 0l-1.364-.443a.5.5 0 0 0-.237-.018l-2.177.362.551-3.308a.5.5 0 0 0-.078-.362L1.2 10.099l.991-.406a.56.56 0 0 0 .333-.453c.04-.295.139-.712.376-.912.32-.27.622-.238 1.04-.269.618-.045 1.477.308 1.782.445a.54.54 0 0 0 .24.048l6.118-.224 5.827.534a.5.5 0 0 1 .15.038l2.38 1.016a.5.5 0 0 0 .263.036l1.742-.232.301 2.036a.5.5 0 0 1-.297.533l-1.707.73a.5.5 0 0 0-.256.247Z\"/>";
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

/** Build a <Pr/> icon as a live SVGSVGElement (browser only). */
export function Pr(options: IconOptions = {}): SVGSVGElement {
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
