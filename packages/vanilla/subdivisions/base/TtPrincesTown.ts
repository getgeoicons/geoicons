// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.728 6.83a1 1 0 0 0 .69 1.174l2.562.765a1 1 0 0 1 .308.154l1.558 1.151a1 1 0 0 1 .337 1.168l-.861 2.207a1 1 0 0 0-.069.358l-.045 8.29a.6.6 0 0 0 .69.596l8.626-1.322a1 1 0 0 1 .475.042l2.533.867a2 2 0 0 0 .843.098l2.342-.23a.6.6 0 0 0 .54-.585l.216-10.355-.413-3.526a1 1 0 0 0-.562-.786l-.887-.425a1 1 0 0 0-.812-.023l-.545.224a1 1 0 0 1-1.285-.499l-1.213-2.579a1 1 0 0 0-.624-.534l-5.807-1.699a2 2 0 0 0-1.103-.006l-3.47.977-2.78 1.018a1 1 0 0 0-.633.723z\"/>";
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

/** Build a <TtPrincesTown/> icon as a live SVGSVGElement (browser only). */
export function TtPrincesTown(options: IconOptions = {}): SVGSVGElement {
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
