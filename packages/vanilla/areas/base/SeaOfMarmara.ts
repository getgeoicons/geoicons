// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.14 11.022-3.144 1.11a1 1 0 0 0-.403.265L1.737 14.41a.775.775 0 0 0 1.118 1.071l1.784-1.795a1 1 0 0 1 .468-.266l1.887-.469a.93.93 0 0 1 .874.236.93.93 0 0 0 .492.25l.838.143a.595.595 0 0 0 .676-.738.595.595 0 0 1 .621-.744l.537.041a.6.6 0 0 1 .548.517l.01.068a.6.6 0 0 0 .575.519l3.247.104a.6.6 0 0 0 .601-.746l-.058-.233a.6.6 0 0 1 .368-.707l.622-.237a1 1 0 0 1 .32-.065l4.787-.18a.736.736 0 0 0-.009-1.472l-2.678-.068a1 1 0 0 1-.478-.136l-1.49-.868a1 1 0 0 0-.824-.084l-.746.252a1 1 0 0 1-.631.003l-2.081-.681a1 1 0 0 0-.74.047l-.968.46a1 1 0 0 1-.703.058l-.497-.141a1 1 0 0 0-.416-.029l-.58.083a1 1 0 0 0-.813.692l-.101.326a1 1 0 0 1-.138.278l-.534.757a1 1 0 0 1-.484.366Z\"/>";
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

/** Build a <SeaOfMarmara/> icon as a live SVGSVGElement (browser only). */
export function SeaOfMarmara(options: IconOptions = {}): SVGSVGElement {
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
