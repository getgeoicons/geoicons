// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M14.39 2.194a1 1 0 0 0-.611.468l-1.175 2.042a1 1 0 0 0-.055.886l.807 1.921a1 1 0 0 1-.278 1.152l-2.365 1.992q-.628.53-1.335.95l-3.516 2.089a.6.6 0 0 0-.292.474l-.044.641a.6.6 0 0 0 .488.63l4.15.776a1 1 0 0 1 .757.644l.18.499a1 1 0 0 1-.008.697l-.177.46a.76.76 0 0 0 .21.842 8.3 8.3 0 0 1 1.689 2.022l.545.916a.6.6 0 0 0 .812.214l.623-.354a.6.6 0 0 0 .303-.495l.123-2.781a7 7 0 0 0-.067-1.322l-.542-3.709a3 3 0 0 1 .175-1.53l.36-.916a3 3 0 0 0 .207-1.084l.016-3.977a2 2 0 0 1 .463-1.272l2.452-2.946a.511.511 0 0 0-.524-.822z\"/>";
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

/** Build a <BsSouthAbaco/> icon as a live SVGSVGElement (browser only). */
export function BsSouthAbaco(options: IconOptions = {}): SVGSVGElement {
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
