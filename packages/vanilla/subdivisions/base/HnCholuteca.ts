// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.513 9.668a1 1 0 0 1-.23 1.199L1.895 13.86a1 1 0 0 0-.134 1.354l.828 1.09a2 2 0 0 1 .35.736l.401 1.64a2 2 0 0 0 .535.945l2.628 2.604a1 1 0 0 0 .76.288l6.765-.384a1 1 0 0 0 .613-.256l2.074-1.871a1 1 0 0 0 .329-.693l.192-3.88a1 1 0 0 1 .453-.79l.948-.617a1 1 0 0 1 1.078-.009l1.053.662a1 1 0 0 0 1.109-.03l.409-.29a1 1 0 0 0 .409-.982l-1.542-9.156a1 1 0 0 0-1.226-.804l-2.932.724a1 1 0 0 0-.53.332L13.7 7.806a1 1 0 0 1-1.128.294l-2.123-.816a1 1 0 0 1-.615-.706l-.44-1.886a1 1 0 0 0-.825-.761l-2.728-.41a1 1 0 0 1-.804-.684l-.198-.62a1 1 0 0 0-1.04-.691l-.23.02a1 1 0 0 0-.883.759l-.112.459a2 2 0 0 0 .156 1.373z\"/>";
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

/** Build a <HnCholuteca/> icon as a live SVGSVGElement (browser only). */
export function HnCholuteca(options: IconOptions = {}): SVGSVGElement {
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
