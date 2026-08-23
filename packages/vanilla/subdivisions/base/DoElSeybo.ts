// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.923 5.083a.6.6 0 0 0-.292-.998l-2.281-.553a2 2 0 0 1-.773-.378l-1.132-.9a1 1 0 0 0-.548-.215l-1.834-.137a1 1 0 0 0-.83.343l-.525.606a2 2 0 0 1-1.404.689l-.333.018a2 2 0 0 1-1.466-.528l-1.24-1.147a1 1 0 0 0-1.418.06l-.605.663a1 1 0 0 0-.262.675v.367a1 1 0 0 0 .203.604l.457.602a1 1 0 0 0 .316.273l.919.503a.851.851 0 0 1-.74 1.532l-4.8-2.018a1 1 0 0 0-.926.079l-.518.33a1 1 0 0 0-.46.79l-.052.958a1 1 0 0 0 .25.716l4.113 4.651a1 1 0 0 1 .21.943l-.834 2.855a1 1 0 0 0 .261.996l2.027 1.977a1 1 0 0 0 .669.284l2.59.077a.3.3 0 0 1 .27.41l-.65 1.633a.602.602 0 0 0 .88.734l.67-.419a3 3 0 0 0 .95-.948l1.561-2.486a2 2 0 0 1 .639-.635l1.228-.763a1 1 0 0 0 .472-.88l-.026-.889a1 1 0 0 1 .9-1.024l.941-.095a1 1 0 0 0 .676-.364l1.945-2.39a1 1 0 0 0 .165-.97l-1.088-3.026a1 1 0 0 1 .218-1.03z\"/>";
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

/** Build a <DoElSeybo/> icon as a live SVGSVGElement (browser only). */
export function DoElSeybo(options: IconOptions = {}): SVGSVGElement {
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
