// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.784 6.897a1 1 0 0 0-.605.222l-.1.082a1 1 0 0 0-.369.854l.115 1.489a1 1 0 0 0 .2.526l2.183 2.885a1 1 0 0 0 .91.39l.411-.046a1 1 0 0 1 1.06.673l1.624 4.804a.6.6 0 0 0 .396.383l2 .6a.6.6 0 0 1 .426.604l-.038.778a.6.6 0 0 0 .338.57l1.74.841a.6.6 0 0 0 .788-.25l.913-1.659a1 1 0 0 0 .123-.432l.107-2.142a1 1 0 0 1 .265-.63l.754-.814a1 1 0 0 0 .264-.758l-.062-.786a1 1 0 0 1 .363-.851l1.372-1.125a1 1 0 0 1 .709-.224l3.281.243a.3.3 0 0 0 .318-.346l-.47-2.967a.584.584 0 0 0-1.08-.207l-.458.77a.6.6 0 0 1-.965.09l-1.34-1.518a1 1 0 0 1-.244-.778l.57-4.85a1 1 0 0 0-.696-1.071l-2.562-.8a1 1 0 0 0-1.178.48l-.51.946a1 1 0 0 1-1.224.464l-4.875-1.79a1 1 0 0 0-1.287.603L4.5 6.214a1 1 0 0 1-.917.663z\"/>";
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

/** Build a <MxDurango/> icon as a live SVGSVGElement (browser only). */
export function MxDurango(options: IconOptions = {}): SVGSVGElement {
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
