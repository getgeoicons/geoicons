// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.474 10.626 4 13.903a1 1 0 0 0-.313.778l.187 3.631a.6.6 0 0 0 .347.514l.949.439a.6.6 0 0 0 .591-.05l1.25-.858a.6.6 0 0 1 .86.196l1.848 3.224a1 1 0 0 0 1.5.277l.376-.307a1 1 0 0 0 .364-.855l-.15-1.872a1 1 0 0 1 .29-.787l.814-.814a.6.6 0 0 0-.033-.88l-.852-.73a1 1 0 0 1-.326-.548l-.402-1.86a1 1 0 0 1 .045-.57l1.61-4.17a1 1 0 0 1 .84-.634l.306-.029a1 1 0 0 1 .96.5l.324.566a1 1 0 0 1 .02.957L14.321 12.1a1 1 0 0 0-.1.62l.315 1.969a1 1 0 0 0 .616.77l.9.36a.6.6 0 0 0 .547-.051l2.293-1.468a1 1 0 0 0 .412-.535l.925-2.865a.6.6 0 0 0-.13-.591L17.74 7.75a1 1 0 0 1-.212-.355l-1.481-4.338a1 1 0 0 0-.14-.268l-.729-.994a1 1 0 0 0-1.135-.353l-1.683.585a1 1 0 0 0-.419.28L9.511 5.04a1 1 0 0 0-.202.355l-1.57 4.812a1 1 0 0 1-.265.418Z\"/>";
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

/** Build a <NorthernEuropeSimplified/> icon as a live SVGSVGElement (browser only). */
export function NorthernEuropeSimplified(options: IconOptions = {}): SVGSVGElement {
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
