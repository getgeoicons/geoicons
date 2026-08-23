// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.903 6.96-.661 1.493a.6.6 0 0 0 .044.568l3.442 5.347a1 1 0 0 1-.082 1.192l-.635.74a1 1 0 0 1-.898.34l-1.437-.202A1 1 0 0 1 4.982 16l-.493-.745a2 2 0 0 0-.493-.515l-1.519-1.102a.652.652 0 0 0-.934.875l1.665 2.647a1 1 0 0 0 .465.392l.722.297a1 1 0 0 1 .482.42l.441.754a1 1 0 0 0 .687.48l4.836.866a4 4 0 0 0 1.543-.025l3.45-.739q.411-.087.796-.259l5.567-2.488a1 1 0 0 0 .592-.93l-.006-.315a2 2 0 0 0-.478-1.265l-1.178-1.38a1 1 0 0 1-.19-.963l.39-1.183a1 1 0 0 0-.076-.8l-.419-.75a1 1 0 0 0-.498-.44l-1.518-.611a1 1 0 0 1-.615-1.07l.157-1.087a1 1 0 0 0-.68-1.094l-3.67-1.2a4 4 0 0 0-1.133-.196l-2.666-.073a1 1 0 0 0-.631.203L6.834 5.783a3 3 0 0 0-.931 1.177Z\"/>";
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

/** Build a <CuIsleOfYouth/> icon as a live SVGSVGElement (browser only). */
export function CuIsleOfYouth(options: IconOptions = {}): SVGSVGElement {
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
