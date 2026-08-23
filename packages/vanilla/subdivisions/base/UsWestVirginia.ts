// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.726 10.238a.3.3 0 0 0-.03-.302l-1.23-1.701a1 1 0 0 0-.922-.407l-1.932.216a2 2 0 0 0-1.022.423l-2.803 2.23a.3.3 0 0 1-.487-.243l.067-2.433a.3.3 0 0 0-.301-.309l-2.99.02a.3.3 0 0 1-.301-.299l-.02-4.914a.6.6 0 0 0-.599-.597h-.191a.6.6 0 0 0-.586.465l-1.306 5.7a2 2 0 0 1-.745 1.15l-3.18 2.397a1 1 0 0 0-.181.176L1.51 14.9a1 1 0 0 0-.216.573L1.22 16.97a1 1 0 0 0 .229.687l2.803 3.39a2 2 0 0 0 2.134.636l4.286-1.33a1 1 0 0 0 .601-.513l2.466-5.012a.6.6 0 0 1 .744-.299l1.069.39a.6.6 0 0 0 .69-.211l3.285-4.523a.3.3 0 0 1 .438-.051l1.706 1.467a.3.3 0 0 0 .467-.101z\"/>";
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

/** Build a <UsWestVirginia/> icon as a live SVGSVGElement (browser only). */
export function UsWestVirginia(options: IconOptions = {}): SVGSVGElement {
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
