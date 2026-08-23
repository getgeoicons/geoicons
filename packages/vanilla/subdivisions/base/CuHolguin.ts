// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.097 16.32a1 1 0 0 0 1.164-.069l.659-.533a1 1 0 0 1 1.274.014l.892.753a1 1 0 0 0 .954.188l3.414-1.107a1 1 0 0 1 1.023.252l.66.675a1 1 0 0 0 1.05.243l.841-.3a2 2 0 0 1 .71-.116l2.639.051a1 1 0 0 0 .922-.568l.08-.167a1 1 0 0 0-.45-1.323l-1.467-.743a2 2 0 0 0-.673-.202l-5.03-.586a1 1 0 0 1-.613-.308l-.848-.902a.8.8 0 0 1-.112-.945l.12-.21a.8.8 0 0 0-.105-.937l-.205-.224a2 2 0 0 0-1.96-.59l-2.083.52a1 1 0 0 1-.884-.203l-1.99-1.665a.3.3 0 0 0-.472.121l-.352.904a2 2 0 0 1-.535.769l-1.035.92a1 1 0 0 1-.595.251l-.793.055a.8.8 0 0 0-.734.67l-.277 1.694a.8.8 0 0 0 .362.806z\"/>";
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

/** Build a <CuHolguin/> icon as a live SVGSVGElement (browser only). */
export function CuHolguin(options: IconOptions = {}): SVGSVGElement {
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
