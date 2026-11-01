// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.87 22.46 2.175.266a3 3 0 0 0 1.191-.094l5.947-1.703a1 1 0 0 1 .78.098l.973.569a2 2 0 0 0 1.096.271l.862-.037a.8.8 0 0 0 .647-.379l2.769-4.49a1 1 0 0 0-.06-1.136l-.654-.846a1 1 0 0 0-.934-.38l-3.183.461a1 1 0 0 1-1.084-1.328l.164-.457a1 1 0 0 1 .722-.638l2.382-.535a2 2 0 0 0 1.107-.682l.302-.367a2 2 0 0 1 1.351-.72l1.06-.104a1 1 0 0 0 .842-.652l.22-.604a2 2 0 0 0 .04-1.252l-.817-2.775a3 3 0 0 0-.456-.922l-1.593-2.179a1 1 0 0 0-1.205-.327l-1.87.81a1 1 0 0 0-.578.697l-.207.912a1 1 0 0 1-.324.537l-.974.837a.6.6 0 0 1-.76.017l-1.828-1.431a.8.8 0 0 0-1.16.187L4.795 11.64a2 2 0 0 1-.563.562l-.784.518a2 2 0 0 0-.849 1.232l-.24 1.074a3 3 0 0 0-.027 1.174l.24 1.365a3 3 0 0 0 .568 1.3l.32.419a.6.6 0 0 1-.115.841l-.485.369a1 1 0 0 0-.377.603l-.128.651a.6.6 0 0 0 .516.712Z\"/>";
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

/** Build a <Dj/> icon as a live SVGSVGElement (browser only). */
export function Dj(options: IconOptions = {}): SVGSVGElement {
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
