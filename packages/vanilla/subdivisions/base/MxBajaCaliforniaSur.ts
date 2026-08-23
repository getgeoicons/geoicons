// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.798 1.522a1 1 0 0 0-.569.178l-.486.336a1 1 0 0 1-.74.162L2.07 1.862a.55.55 0 0 0-.439.97l4.754 3.822a1 1 0 0 0 .767.21l1.075-.151a1.5 1.5 0 0 1 1.213.37l1.757 1.582a4.45 4.45 0 0 1 1.458 3.642l-.007.089a5 5 0 0 1-.273 1.276l-.19.524a1 1 0 0 0 .414 1.188l2.88 1.789q.697.434 1.324.967l2.408 2.05a2 2 0 0 1 .577.822l.358.959a.7.7 0 0 0 1.085.31l1.152-.888a1 1 0 0 0 .39-.844l-.03-.561a1 1 0 0 0-.236-.596l-2.13-2.511a1 1 0 0 0-.68-.35l-.719-.06a1 1 0 0 1-.916-.983l-.017-1.277a1 1 0 0 0-.151-.514l-1.756-2.821a3 3 0 0 1-.39-.973l-.318-1.527a3 3 0 0 0-.586-1.252L10.7 1.9a1 1 0 0 0-.784-.379z\"/>";
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

/** Build a <MxBajaCaliforniaSur/> icon as a live SVGSVGElement (browser only). */
export function MxBajaCaliforniaSur(options: IconOptions = {}): SVGSVGElement {
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
