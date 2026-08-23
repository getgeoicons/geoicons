// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.428 15.9 1.74 13.748a.6.6 0 0 1-.297-.792l1.23-2.736a1 1 0 0 1 .46-.482l1.382-.698a1 1 0 0 0 .415-.392l.533-.923A7.6 7.6 0 0 1 7.46 5.461l.212-.16a6.1 6.1 0 0 1 1.814-.946l.538-.173c.623-.2 1.286-.24 1.928-.116.568.11 1.154.091 1.714-.055l1.3-.337a1 1 0 0 0 .626-.49l.185-.341a1 1 0 0 1 .72-.51l1.22-.196a.6.6 0 0 1 .696.58l.034 1.763a4 4 0 0 0 .28 1.397l.598 1.509a4 4 0 0 1 .255 1.932l-.078.673a4 4 0 0 1-.467 1.464l-.353.643a3 3 0 0 0-.358 1.18l-.074.84a2 2 0 0 1-.424 1.066l-.562.709a1.166 1.166 0 0 0 .46 1.798l1.7.717 2.744 1.399a1 1 0 0 1 .544.825l.031.483a.6.6 0 0 1-.768.615l-7.504-2.215a2 2 0 0 1-.505-.229l-2.381-1.51a2 2 0 0 0-1.07-.31H9.61a.6.6 0 0 1-.59-.704l.245-1.404a.6.6 0 0 0-.43-.681l-.707-.197a.6.6 0 0 0-.747.454l-.116.545a.6.6 0 0 1-.837.42Z\"/>";
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

/** Build a <KnSaintPaulCapisterre/> icon as a live SVGSVGElement (browser only). */
export function KnSaintPaulCapisterre(options: IconOptions = {}): SVGSVGElement {
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
