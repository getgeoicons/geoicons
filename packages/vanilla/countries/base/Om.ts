// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.244 16.84 4.91 22.8l2.17-.807a.5.5 0 0 1 .245-.026l1.654.236a.5.5 0 0 0 .32-.061l.626-.36a.5.5 0 0 0 .235-.306l.367-1.4a.5.5 0 0 1 .452-.373l1.78-.112a.5.5 0 0 0 .453-.372l.297-1.13a.5.5 0 0 1 .19-.28l.808-.584a.5.5 0 0 1 .236-.091l1.13-.129a.5.5 0 0 0 .437-.576l-.26-1.621a.5.5 0 0 1 .042-.297l.46-.957a.5.5 0 0 1 .451-.283h.583a.5.5 0 0 0 .407-.21l3.357-4.715a.5.5 0 0 0-.266-.77l-.854-.252a.5.5 0 0 1-.283-.215l-1.417-2.28a.5.5 0 0 0-.377-.233l-1.406-.137a.5.5 0 0 1-.113-.024l-1.56-.533a.5.5 0 0 1-.143-.076l-.633-.484a.5.5 0 0 1-.115-.123l-1.124-1.716a.5.5 0 0 0-.39-.225l-.754-.044a.5.5 0 0 0-.527.544l.112 1.241a.5.5 0 0 1-.036.236L9.966 6.87a.5.5 0 0 0 .043.464l.988 1.52a.5.5 0 0 1 .059.421l-1.474 4.749a.5.5 0 0 1-.31.323z\"/>";
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

/** Build a <Om/> icon as a live SVGSVGElement (browser only). */
export function Om(options: IconOptions = {}): SVGSVGElement {
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
