// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.38 11.421a.6.6 0 0 0 .219.875l1.072.554a.6.6 0 0 1 .303.694l-.612 2.188a1 1 0 0 0 .06.698l2.617 5.507a.6.6 0 0 0 1.009.118l.876-1.088a.7.7 0 0 1 .506-.257l1.366-.062a.6.6 0 0 0 .56-.724l-1.015-4.8a1 1 0 0 1-.016-.314l.318-2.923a1 1 0 0 0-.045-.423l-.93-2.807a1 1 0 0 1 .434-1.172l.498-.3a1 1 0 0 1 .656-.132l3.419.489a.6.6 0 0 0 .685-.594V4.47a1 1 0 0 1 .219-.625l.968-1.21a.6.6 0 0 0-.195-.91l-.63-.322a.6.6 0 0 0-.709.121l-1.46 1.538a1 1 0 0 1-.591.302l-1.378.188a1 1 0 0 0-.627.342l-.765.897a1 1 0 0 1-1.1.292L9.246 4.42a1 1 0 0 0-.988.18l-.98.836a1 1 0 0 0-.35.766l.013 2.648a1 1 0 0 1-.177.574z\"/>";
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

/** Build a <TtSanJuanLaventille/> icon as a live SVGSVGElement (browser only). */
export function TtSanJuanLaventille(options: IconOptions = {}): SVGSVGElement {
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
