// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.547 14.741a.6.6 0 0 0 .157-.59l-.591-2.112a1 1 0 0 1-.027-.414l.55-3.783a1 1 0 0 0-.171-.719l-1.588-2.26a1 1 0 0 0-1.264-.32l-2.314 1.153a1 1 0 0 1-.752.057l-3.525-1.131a.6.6 0 0 0-.754.386l-.723 2.234a1 1 0 0 1-.801.681l-6.452.98a1 1 0 0 0-.332.112l-2.18 1.2a.3.3 0 0 0 .041.545l2.992 1.088a1 1 0 0 0 .457.054l1.665-.194a.6.6 0 0 1 .419.108l.374.267a.6.6 0 0 1 .249.533l-.051.685a.6.6 0 0 0 .372.6c3.401 1.406 5.396 2.493 9.184 5.368.42.32 1.017.263 1.365-.133l1.22-1.387a.3.3 0 0 0 .047-.323l-.424-.925a.3.3 0 0 1 .044-.32l.354-.415a.3.3 0 0 1 .328-.089l.693.243a.3.3 0 0 0 .309-.07z\"/>";
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

/** Build a <MxColima/> icon as a live SVGSVGElement (browser only). */
export function MxColima(options: IconOptions = {}): SVGSVGElement {
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
