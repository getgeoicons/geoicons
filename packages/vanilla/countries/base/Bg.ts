// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.952 18.516 3.956-.455a2 2 0 0 1 .976.131l1.496.602a2 2 0 0 0 1.07.119l2.237-.367a.6.6 0 0 0 .494-.695l-.089-.513a.6.6 0 0 1 .343-.649l3.082-1.404a.6.6 0 0 1 .65.1l.808.728a.6.6 0 0 0 .62.113l.729-.284a.6.6 0 0 0 .27-.908l-.864-1.21a1 1 0 0 1-.013-1.145l.61-.894a1 1 0 0 0 .172-.632l-.054-.791a1 1 0 0 1 .861-1.059l.963-.132a.6.6 0 0 0 .519-.589l.008-.843a.6.6 0 0 0-.388-.567l-3.459-1.31a3 3 0 0 0-1.358-.18l-2.25.224a3 3 0 0 0-1.716.76l-.6.542a2 2 0 0 1-1.562.505L3.857 6.87a.3.3 0 0 1-.264-.34l.116-.812a.3.3 0 0 0-.206-.328l-.99-.315a.3.3 0 0 0-.362.157l-.625 1.315a1 1 0 0 0 .062.97L3.02 9.744a1 1 0 0 1-.351 1.413l-.498.28a1 1 0 0 0-.49.667l-.356 1.704a1 1 0 0 0 .354.985l1.309 1.05a1 1 0 0 1 .372.843l-.075 1.197a.6.6 0 0 0 .667.634Z\"/>";
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

/** Build a <Bg/> icon as a live SVGSVGElement (browser only). */
export function Bg(options: IconOptions = {}): SVGSVGElement {
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
