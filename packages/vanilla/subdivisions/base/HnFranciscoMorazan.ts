// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.208 22.024c.843.273 1.717.443 2.6.507l3.227.232a.6.6 0 0 0 .63-.475l.256-1.213a.6.6 0 0 1 .686-.468l.636.106a.6.6 0 0 0 .682-.45l.59-2.445c.068-.28.075-.57.02-.853l-.252-1.29a1 1 0 0 1 .243-.865l3.388-3.714a1 1 0 0 0 .24-.876l-.266-1.293a2 2 0 0 0-.545-1.01L17.295 6.87a2 2 0 0 1-.543-1.004l-.637-3.044a1 1 0 0 0-.178-.395l-.597-.797a1 1 0 0 0-.857-.398l-1.747.1a1 1 0 0 0-.908.737l-.993 3.67a2 2 0 0 1-.553.928L7.986 8.845a1 1 0 0 0-.302.866l.504 3.523a1 1 0 0 1-.545 1.037l-1.686.838a1 1 0 0 0-.548.779L4.8 21.06a.6.6 0 0 0 .411.64z\"/>";
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

/** Build a <HnFranciscoMorazan/> icon as a live SVGSVGElement (browser only). */
export function HnFranciscoMorazan(options: IconOptions = {}): SVGSVGElement {
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
