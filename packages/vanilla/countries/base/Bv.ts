// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.602 8.868.708-.889a2 2 0 0 1 1.5-.753l2.148-.07a4 4 0 0 0 1.046-.174l3.036-.935a1 1 0 0 0 .672-.698l.192-.722a.6.6 0 0 1 1.034-.238l.705.815a1 1 0 0 0 .803.344l1.314-.061a3 3 0 0 1 1.359.255l2.546 1.132a3 3 0 0 1 1.147.896l2.035 2.608c.19.243.341.515.448.805l.268.724a2 2 0 0 1 .031 1.295l-1.004 3.184c-.107.34-.274.658-.493.94l-.274.351a3 3 0 0 1-2.008 1.137l-3.966.478a2 2 0 0 1-.637-.026l-1.517-.308a2 2 0 0 0-1.292.171L9.19 20.235a2 2 0 0 1-.983.21l-1.402-.064a1 1 0 0 1-.912-.707l-.266-.875a1 1 0 0 0-.268-.434L2.963 16.09a3 3 0 0 1-.713-1.045l-.328-.804a3 3 0 0 1-.202-1.478l.19-1.638a1 1 0 0 0-.104-.572l-.311-.606a1 1 0 0 1 .107-1.08Z\"/>";
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

/** Build a <Bv/> icon as a live SVGSVGElement (browser only). */
export function Bv(options: IconOptions = {}): SVGSVGElement {
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
