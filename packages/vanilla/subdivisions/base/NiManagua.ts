// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.106 3.992a1 1 0 0 0-.548-.634L13.61 1.566a4 4 0 0 0-1.694-.357l-1.528.016a1 1 0 0 0-.905.597l-.596 1.354a1 1 0 0 0 .015.837l.03.064a1 1 0 0 0 .684.541l.728.163a1 1 0 0 1 .7.577l1.383 3.189a.6.6 0 0 0 .967.193l.501-.483a.889.889 0 0 1 1.476.867l-.48 1.815a1 1 0 0 1-.795.73l-2.235.387a.92.92 0 0 1-1.056-1.098l.056-.263A1.284 1.284 0 0 0 9.33 9.17l-2.55.558a1 1 0 0 0-.711.594l-1.24 2.993a1 1 0 0 1-.898.617l-.925.024a1 1 0 0 0-.963.848l-.175 1.14a.6.6 0 0 0 .129.47l4.956 6.064a.3.3 0 0 0 .486-.03l3.27-5.17a1 1 0 0 1 .658-.447l1.155-.218a1 1 0 0 0 .811-.907l.067-.876a1 1 0 0 1 .694-.878l6.939-2.199a1 1 0 0 0 .635-.605l.342-.92a.6.6 0 0 0-.22-.701l-2.024-1.403a2 2 0 0 1-.783-1.09z\"/>";
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

/** Build a <NiManagua/> icon as a live SVGSVGElement (browser only). */
export function NiManagua(options: IconOptions = {}): SVGSVGElement {
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
