// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.432 4.248a3 3 0 0 0-1.021.534l-.65.52a1 1 0 0 0-.345.534l-.017.067a1 1 0 0 0 .52 1.14l1.12.563a3 3 0 0 1 1.303 1.272l.74 1.39q.185.346.453.634l3.708 3.986a3 3 0 0 1 .654 1.107l1.209 3.678a.6.6 0 0 0 .433.396l1.339.314a.6.6 0 0 0 .516-.12l6.042-4.94a2 2 0 0 0 .59-.804l.523-1.303a3 3 0 0 1 .773-1.11l1.246-1.126a.3.3 0 0 0 .012-.433l-4.4-4.474a1 1 0 0 0-.697-.298l-4.26-.068a.6.6 0 0 1-.502-.287l-.756-1.237a.6.6 0 0 0-.475-.286l-5.171-.315a3 3 0 0 0-1.036.118z\"/>";
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

/** Build a <UsSouthCarolina/> icon as a live SVGSVGElement (browser only). */
export function UsSouthCarolina(options: IconOptions = {}): SVGSVGElement {
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
