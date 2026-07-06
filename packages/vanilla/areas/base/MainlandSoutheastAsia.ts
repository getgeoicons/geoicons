// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.583 5.674-.4.794a1 1 0 0 0 .093 1.05l.979 1.305a1 1 0 0 1 .09 1.055l-.29.568a1 1 0 0 0 .173 1.15l.403.417a1 1 0 0 1 .266.523l.157.897a1 1 0 0 1-.03.469l-1.314 4.23a1 1 0 0 0-.007.568l.24.85a1 1 0 0 0 .278.457l2.483 2.33a1 1 0 0 0 .53.259l.592.092a.871.871 0 0 0 .908-1.262l-.152-.292a1 1 0 0 0-.546-.48l-.82-.298a1 1 0 0 1-.568-.527l-.884-1.95a1 1 0 0 1-.035-.739l.862-2.493a1 1 0 0 1 1.397-.566l.93.471a1 1 0 0 1 .297.23l1.77 2a1 1 0 0 1 .247.582l.082 1.027a.6.6 0 0 0 .896.473l.894-.511a1 1 0 0 0 .352-.338L16.09 17a1 1 0 0 1 .413-.37l1.891-.913a1 1 0 0 0 .562-.824l.125-1.624a1 1 0 0 0-.044-.382l-.609-1.902a1 1 0 0 0-.22-.376l-3.243-3.487a1 1 0 0 1-.223-.976l.21-.684a1 1 0 0 1 .347-.498l1.463-1.126a.6.6 0 0 0-.043-.981L14.471 1.42a1 1 0 0 0-.745-.135l-3.309.698a1 1 0 0 0-.6.387l-1.19 1.623a1 1 0 0 1-.424.333l-2.11.874a1 1 0 0 0-.51.474Z\"/>";
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

/** Build a <MainlandSoutheastAsia/> icon as a live SVGSVGElement (browser only). */
export function MainlandSoutheastAsia(options: IconOptions = {}): SVGSVGElement {
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
