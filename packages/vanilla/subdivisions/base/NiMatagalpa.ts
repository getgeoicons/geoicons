// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.604 15.443a1 1 0 0 0-.29-.979l-.536-.496a1.5 1.5 0 0 1-.478-1.178l.041-.804a1.5 1.5 0 0 1 .464-1.009l1.147-1.091a1 1 0 0 0 .19-.25l.5-.925a.857.857 0 0 0-.967-1.238l-1.836.47a2 2 0 0 1-1.828-.446l-2.689-2.4a1 1 0 0 0-.784-.247l-1.482.178a1 1 0 0 0-.607.305l-4.44 4.682a2 2 0 0 1-1.828.588l-1.373-.264a1 1 0 0 0-.91.29l-2.507 2.61a.6.6 0 0 0-.164.474L1.547 17a.6.6 0 0 0 .399.508l4.288 1.502a1 1 0 0 0 .993-.193l1.195-1.055a2 2 0 0 1 .91-.457l6.727-1.418a1 1 0 0 1 .736.13l2.498 1.561a1 1 0 0 0 .956.057l.482-.227a1 1 0 0 0 .543-.66z\"/>";
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

/** Build a <NiMatagalpa/> icon as a live SVGSVGElement (browser only). */
export function NiMatagalpa(options: IconOptions = {}): SVGSVGElement {
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
