// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.46 11.697-2.988-.636a.3.3 0 0 1-.229-.363l.232-.973a1 1 0 0 0-.266-.938l-.85-.852a.3.3 0 0 1-.052-.355L2.7 5.007a.3.3 0 0 1 .538.022l1.726 3.925a1 1 0 0 0 1.296.522l1.195-.492a3 3 0 0 1 1.058-.224l2.79-.077a.3.3 0 0 0 .21-.506L9.241 5.78a.928.928 0 0 1 1.346-1.276l5.145 5.419a3 3 0 0 0 1.838.916l2.998.339a1 1 0 0 1 .86.759l1.26 5.227a.3.3 0 0 1-.354.364l-2.544-.534a1 1 0 0 0-.837.203l-2.322 1.891a3 3 0 0 1-1.335.622l-2.157.408a1 1 0 0 1-.758-.162l-1.012-.705a1 1 0 0 0-.715-.17l-1.197.173a1 1 0 0 1-1.077-.632l-.54-1.414a.6.6 0 0 0-.692-.37l-1.07.238a.6.6 0 0 1-.73-.633l.347-4.429a.3.3 0 0 0-.236-.317Z\"/>";
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

/** Build a <PaNgabeBugle/> icon as a live SVGSVGElement (browser only). */
export function PaNgabeBugle(options: IconOptions = {}): SVGSVGElement {
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
