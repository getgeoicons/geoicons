// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.644 21.576a2 2 0 0 0 1.016.496l3.86.654a.6.6 0 0 0 .636-.32l.83-1.633c.377-.74.66-1.524.843-2.334l.943-4.18a10 10 0 0 0 .242-2.447l-.135-5.46a.6.6 0 0 0-.808-.549l-2.391.885a2 2 0 0 1-.88.116l-4.484-.417a2 2 0 0 0-.917.13l-.821.322a.819.819 0 0 1-.828-1.387l2.69-2.274a.8.8 0 0 0 .134-1.076l-.382-.534a.8.8 0 0 0-.645-.334l-5.2-.032a1 1 0 0 0-.62.21l-1.088.846a1 1 0 0 0-.353.535L4.435 6.02a2 2 0 0 1-.357.72L2.563 8.681a2 2 0 0 0-.405.96l-.138 1.01a.6.6 0 0 0 .375.639l3.632 1.426a1 1 0 0 1 .574.588l.835 2.286a2 2 0 0 0 .529.79z\"/>";
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

/** Build a <BzCorozal/> icon as a live SVGSVGElement (browser only). */
export function BzCorozal(options: IconOptions = {}): SVGSVGElement {
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
