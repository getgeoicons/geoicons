// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.101 9.758 2.764 21.374a.5.5 0 0 0 .398.59l4.174.783a.5.5 0 0 0 .471-.165l2.613-3.037a.5.5 0 0 1 .291-.166l2.65-.47a.5.5 0 0 0 .385-.328l.473-1.359a.5.5 0 0 1 .224-.27l.96-.549a.5.5 0 0 0 .128-.764l-3.892-4.427 8.409-2.286a.5.5 0 0 0 .244-.153l.862-.98a.5.5 0 0 0 .104-.472l-1.625-5.482a.5.5 0 0 0-.75-.279L10.887 6.7a.5.5 0 0 1-.333.075l-1.587-.203a.5.5 0 0 1-.312-.164L7.29 4.863a.5.5 0 0 0-.412-.168l-1.239.092a.5.5 0 0 0-.463.491l-.064 4.389a.5.5 0 0 1-.01.091Z\"/>";
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

/** Build a <Jo/> icon as a live SVGSVGElement (browser only). */
export function Jo(options: IconOptions = {}): SVGSVGElement {
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
