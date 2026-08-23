// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.788 22.792a.6.6 0 0 0 .587-.433l1.044-3.606q.109-.379.143-.77l.255-2.98a3 3 0 0 0-.2-1.362l-.551-1.389a1 1 0 0 1 .022-.789l.548-1.184a1 1 0 0 0-.087-.993l-1.275-1.824a3 3 0 0 0-.943-.87L7.077 1.758a.6.6 0 0 0-.903.546l.064 1.347a2 2 0 0 0 .506 1.239l.915 1.023a2 2 0 0 0 .565.44l3.756 1.962a3 3 0 0 1 .57.386l1.257 1.083a1 1 0 0 1 .266 1.152l-.16.371a1 1 0 0 0 .213 1.102l.643.643a1 1 0 0 1 .291.758l-.275 5.397a3 3 0 0 1-.068.502l-.522 2.333a.6.6 0 0 0 .575.731z\"/>";
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

/** Build a <BsCentralEleuthera/> icon as a live SVGSVGElement (browser only). */
export function BsCentralEleuthera(options: IconOptions = {}): SVGSVGElement {
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
