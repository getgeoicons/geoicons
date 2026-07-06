// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.073 8.96 1.2 7.367h2.185a1 1 0 0 0 .714-.3l.881-.896a.6.6 0 0 1 .779-.066l1.23.887a1 1 0 0 0 .789.168l2.662-.552a1 1 0 0 0 .62-.41l1.288-1.863A1 1 0 0 1 12.741 4l.657-.313a1 1 0 0 1 .695-.06l1.586.436a1 1 0 0 0 .676-.053l2.36-1.063a1 1 0 0 1 .63-.064l1.455.326a1 1 0 0 1 .642.466L22.8 5.967l-1.638.216a.25.25 0 0 0-.168.098l-.643.864a.25.25 0 0 0 .106.381l.947.384a.6.6 0 0 1 .294.857l-1.186 2.05a1 1 0 0 1-.108.152l-1.696 1.97a1 1 0 0 0-.14.211l-.594 1.21a1 1 0 0 1-.987.554l-1.562-.14a1 1 0 0 0-.595.133l-1.038.609a.6.6 0 0 0-.169.888l1.287 1.64a1 1 0 0 1 .086 1.104l-.895 1.604a.6.6 0 0 1-.719.275l-1.197-.411a1 1 0 0 1-.652-.731l-.197-.896a1 1 0 0 0-.162-.366l-1.89-2.65a1 1 0 0 1-.185-.61l.044-1.485a1 1 0 0 0-.273-.716l-.75-.793a1 1 0 0 0-.265-.2l-3.073-1.6-2.296-1.202a1 1 0 0 1-.413-.406Z\"/>";
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

/** Build a <Balkans/> icon as a live SVGSVGElement (browser only). */
export function Balkans(options: IconOptions = {}): SVGSVGElement {
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
