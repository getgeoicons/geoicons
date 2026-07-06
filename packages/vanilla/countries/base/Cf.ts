// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.363 15.2 2.242 3.804a.25.25 0 0 0 .436-.01l.893-1.688a.5.5 0 0 1 .436-.267l2.069-.025a.5.5 0 0 0 .403-.213l1.365-1.946a.5.5 0 0 1 .57-.186l4.298 1.452a.5.5 0 0 0 .346-.01l4.508-1.803a.5.5 0 0 1 .244-.032l3.062.36a.25.25 0 0 0 .232-.395l-3.136-4.34a.5.5 0 0 0-.15-.138l-2.57-1.519a.5.5 0 0 1-.232-.543l.246-1.066a.5.5 0 0 0-.102-.43l-1.155-1.402a.5.5 0 0 0-.408-.181l-1.356.059a.5.5 0 0 0-.398.227L11.784 7.1a.5.5 0 0 1-.349.223l-2.558.367a.5.5 0 0 0-.382.284L7.811 9.44a.5.5 0 0 1-.388.284l-4.575.606a.5.5 0 0 0-.356.227l-1.208 1.898a.5.5 0 0 0-.078.288l.089 2.224a.5.5 0 0 0 .068.234Z\"/>";
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

/** Build a <Cf/> icon as a live SVGSVGElement (browser only). */
export function Cf(options: IconOptions = {}): SVGSVGElement {
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
