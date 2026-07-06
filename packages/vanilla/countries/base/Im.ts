// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.375 19.045-1.962 2.582a.626.626 0 0 0 .743.954l.907-.386a1 1 0 0 0 .39-.298l.838-1.053a.973.973 0 0 1 1.607.123l.087.152a1 1 0 0 0 .524.443l1.036.38a.6.6 0 0 0 .772-.364l.459-1.299a1 1 0 0 1 .424-.522l3.33-2.02a1 1 0 0 0 .477-.76l.066-.688a1 1 0 0 1 .494-.77l1.694-.982a1 1 0 0 0 .47-1.106l-.121-.486a1 1 0 0 1 .187-.863l2.268-2.856a1 1 0 0 0-.343-1.52l-1.255-.616a1 1 0 0 1-.542-1.086l.758-3.945a.5.5 0 0 0-.66-.565L15.4 2.43a1 1 0 0 0-.278.153L12.74 4.436a1 1 0 0 0-.322.437l-1.692 4.494a1 1 0 0 1-.293.413l-2.88 2.42a1 1 0 0 0-.261.339l-1.271 2.693a1 1 0 0 0-.089.308l-.361 3.019a1 1 0 0 1-.197.486Z\"/>";
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

/** Build a <Im/> icon as a live SVGSVGElement (browser only). */
export function Im(options: IconOptions = {}): SVGSVGElement {
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
