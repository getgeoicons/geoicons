// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.245 13.548 1.2 11.144l3.176.05.081-3.39h2.166v1.388a.6.6 0 0 0 .298.519l.773.45c.15.088.32.135.493.137l1.986.02.024-2.514c1.74.166 8.243-.764 11.65-1.256a.6.6 0 0 1 .631.35l.156.353a.6.6 0 0 1-.12.663l-2.408 2.456a1 1 0 0 0-.285.729l.025.876a1 1 0 0 0 .125.457l1.116 2.012a1 1 0 0 1 .118.358l.12.937a.902.902 0 0 1-1.671.574l-.813-1.375a1 1 0 0 1-.132-.39l-.07-.584a1 1 0 0 0-.261-.563l-.418-.447a1 1 0 0 0-.707-.318l-2.205-.053a1 1 0 0 0-.92.554l-.19.382a.6.6 0 0 1-.673.317l-1.88-.439a1 1 0 0 0-.768.133l-1.57 1.01a1 1 0 0 0-.46.855l.016 1.11a.6.6 0 0 1-.816.568L7 16.769a.6.6 0 0 1-.351-.365l-.7-2.044a1 1 0 0 0-1.245-.63l-.398.125a1 1 0 0 1-1.06-.307Z\"/>";
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

/** Build a <DeepSouthUs/> icon as a live SVGSVGElement (browser only). */
export function DeepSouthUs(options: IconOptions = {}): SVGSVGElement {
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
