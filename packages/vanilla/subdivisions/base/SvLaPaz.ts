// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.194 3.1a1 1 0 0 1-.701.176l-1.47-.186a1 1 0 0 0-.896.354l-.853 1.032a.6.6 0 0 1-.51.215l-1.71-.136a.3.3 0 0 0-.303.408l.89 2.286a1 1 0 0 1-.024.785l-1.342 2.884a.3.3 0 0 0 .183.413l1.232.38a.3.3 0 0 1 .192.394l-.917 2.365a.3.3 0 0 0 .13.368l5.095 2.92 5.587 2.382 4.17 2.254a1 1 0 0 0 1.27-.27l1.859-2.425a1 1 0 0 0 .197-.47l.537-3.831a1 1 0 0 0-.215-.77l-1.548-1.9a1 1 0 0 1-.194-.88l.62-2.422a2 2 0 0 0-.114-1.319l-1.053-2.333a1 1 0 0 0-.847-.587l-1.547-.1a.6.6 0 0 1-.556-.685l.287-1.955a.6.6 0 0 0-.15-.492l-.363-.396a.6.6 0 0 0-.747-.113l-1.481.871a1 1 0 0 1-.917.05l-1.16-.52a1 1 0 0 0-.986.095z\"/>";
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

/** Build a <SvLaPaz/> icon as a live SVGSVGElement (browser only). */
export function SvLaPaz(options: IconOptions = {}): SVGSVGElement {
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
