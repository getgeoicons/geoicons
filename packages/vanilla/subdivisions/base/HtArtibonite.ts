// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.093 21.937a1 1 0 0 0 1.468-.236l.286-.442a1 1 0 0 1 1.29-.351l2.695 1.356c.324.163.675.266 1.036.304l1.207.126a1 1 0 0 0 1.1-.911l.256-3.06a4 4 0 0 0-.12-1.358l-.398-1.5a2 2 0 0 1 .25-1.594l.67-1.042a1 1 0 0 0 .12-.812l-.59-2.091a1 1 0 0 0-.782-.712l-.413-.076a1 1 0 0 1-.808-1.136l.14-.905a.98.98 0 0 0-1.609-.894l-.815.701a1 1 0 0 1-1.337-.03l-1.033-.972a4 4 0 0 1-.76-.979L12.218 2.2a1 1 0 0 0-1.47-.32l-2.164 1.6a1 1 0 0 1-.742.184l-3.888-.582a1 1 0 0 0-.98.434l-.78 1.169a.72.72 0 0 0 .397 1.093c2.75.831 4.342 1.743 7.387 3.963a1 1 0 0 1 .354 1.128l-1.11 3.24a1 1 0 0 0 .375 1.144l1.462 1.019a.736.736 0 0 1-.352 1.337l-1.515.144a.837.837 0 0 0-.446 1.484z\"/>";
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

/** Build a <HtArtibonite/> icon as a live SVGSVGElement (browser only). */
export function HtArtibonite(options: IconOptions = {}): SVGSVGElement {
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
