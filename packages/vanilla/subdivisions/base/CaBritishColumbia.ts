// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.67 4.047a.3.3 0 0 0-.3-.297H1.742a.3.3 0 0 0-.254.46l1.033 1.645a.3.3 0 0 0 .325.132l1.597-.388a.6.6 0 0 1 .662.285l1.93 3.363a1 1 0 0 0 .377.374l1.009.567a1 1 0 0 1 .494.694l.062.343a1 1 0 0 1-.066.574l-.46 1.067a1 1 0 0 0 .124 1.002l1.974 2.587a1 1 0 0 1 .201.693l-.053.617a1 1 0 0 0 .279.782l1.5 1.546a3 3 0 0 0 .927.649l.53.237a1 1 0 0 0 1.076-.168l.382-.341a1 1 0 0 1 .673-.256l6.308.04a.3.3 0 0 0 .284-.4l-.492-1.382a2 2 0 0 0-.51-.78l-3.587-3.395a1 1 0 0 1-.313-.718z\"/>";
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

/** Build a <CaBritishColumbia/> icon as a live SVGSVGElement (browser only). */
export function CaBritishColumbia(options: IconOptions = {}): SVGSVGElement {
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
