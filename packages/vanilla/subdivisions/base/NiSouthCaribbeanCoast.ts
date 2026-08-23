// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.076 12.351a2 2 0 0 0 .391.655l1.28 1.43a1 1 0 0 1 .25.774l-.264 2.443a1 1 0 0 0 .335.859l2.61 2.291c.313.276.668.5 1.051.666l2.696 1.166a.596.596 0 0 0 .8-.74l-.544-1.596a2 2 0 0 1 .371-1.943L18 17.244a1 1 0 0 0 .227-.8l-.34-2.219a6 6 0 0 1-.024-1.655l.192-1.532a1 1 0 0 1 .775-.852l.273-.06a1.095 1.095 0 0 0 .756-1.528l-.201-.437a5 5 0 0 1-.407-2.822l.086-.587a1 1 0 0 0-.676-1.095l-.86-.284a1 1 0 0 1-.625-.606l-.258-.705a1 1 0 0 0-.865-.655l-2.144-.158a6 6 0 0 0-1.305.045l-4.061.59a6 6 0 0 0-1.094.265l-2.58.89a1 1 0 0 0-.665.813L4.043 5.06a1 1 0 0 0 .57 1.04l1.07.495a1 1 0 0 1 .52.568z\"/>";
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

/** Build a <NiSouthCaribbeanCoast/> icon as a live SVGSVGElement (browser only). */
export function NiSouthCaribbeanCoast(options: IconOptions = {}): SVGSVGElement {
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
