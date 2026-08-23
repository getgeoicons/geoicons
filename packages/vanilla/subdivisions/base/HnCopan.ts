// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.947 1.678a.6.6 0 0 0-.839-.119l-4.606 3.46q-.4.3-.863.493l-3.883 1.62a1 1 0 0 0-.606.79l-.378 2.85a1 1 0 0 1-.339.625l-.607.523a1 1 0 0 0-.259 1.167l1.471 3.277a1 1 0 0 0 .915.59l2.376-.004a1 1 0 0 1 .855.477l2.844 4.636a1 1 0 0 0 .62.45l.587.14a1 1 0 0 0 1.014-.35l1.656-2.078a.8.8 0 0 0 .049-.929l-.862-1.35a.6.6 0 0 1 .47-.922l2.087-.123a.6.6 0 0 0 .544-.756l-.427-1.574a1 1 0 0 1 .058-.682l.59-1.274a1 1 0 0 0-.272-1.192l-.515-.424A1 1 0 0 1 18.36 9.8l1.066-2.261a2 2 0 0 0 .156-1.223l-.201-1.071a2 2 0 0 0-.37-.836z\"/>";
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

/** Build a <HnCopan/> icon as a live SVGSVGElement (browser only). */
export function HnCopan(options: IconOptions = {}): SVGSVGElement {
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
