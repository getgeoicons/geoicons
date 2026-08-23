// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.834 18.015a1 1 0 0 1 .42-1.094l.224-.146a1 1 0 0 0 .287-1.39l-.854-1.292a2 2 0 0 1-.293-.706l-.56-2.764a1 1 0 0 1 .241-.872l1.513-1.66a1 1 0 0 0 .221-.953l-.58-1.992a2 2 0 0 0-.392-.731L17.735 1.66a.8.8 0 0 0-.937-.215l-2.007.896a1 1 0 0 0-.506.507L13.71 4.14a1 1 0 0 1-.54.521l-1.231.495a1 1 0 0 0-.505.45L9.56 9.036a1 1 0 0 1-.46.43l-4.013 1.84a1 1 0 0 0-.297.21l-1.914 1.95a.6.6 0 0 0-.171.398l-.014.343a.6.6 0 0 0 .245.506l3.324 2.444a1 1 0 0 0 .184.107l5.52 2.47a1 1 0 0 1 .38.298l1.848 2.372a1 1 0 0 0 .808.386l2.682-.051a1 1 0 0 0 .764-.377l1.656-2.081a.8.8 0 0 0 .147-.704z\"/>";
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

/** Build a <GdSaintMark/> icon as a live SVGSVGElement (browser only). */
export function GdSaintMark(options: IconOptions = {}): SVGSVGElement {
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
