// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.68 2.428a.6.6 0 0 0-.58-.457L1.502 1.896a.3.3 0 0 0-.302.3l.006 4.529a1 1 0 0 0 .09.413l2.047 4.498a1 1 0 0 1 .05.692l-1.445 4.99a.6.6 0 0 0 .636.764l1.54-.154a4 4 0 0 1 1.528.143l2.627.774c.353.104.718.159 1.085.163l1.89.021a1 1 0 0 1 .682.28l1.081 1.042a1 1 0 0 0 .914.255l3.783-.85a1 1 0 0 1 .756.131l2.508 1.594a1 1 0 0 0 1.452-.441l.023-.054a1 1 0 0 0-.38-1.248l-1.536-.972a1 1 0 0 1-.462-.924l.133-1.682a1 1 0 0 0-.224-.714l-.916-1.113a1 1 0 0 1-.193-.894l.34-1.272a.3.3 0 0 0-.29-.378h-6.858a.6.6 0 0 1-.578-.76l.814-2.934a1 1 0 0 1 .152-.318l1.731-2.402a.6.6 0 0 0 .096-.494z\"/>";
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

/** Build a <UsLouisiana/> icon as a live SVGSVGElement (browser only). */
export function UsLouisiana(options: IconOptions = {}): SVGSVGElement {
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
