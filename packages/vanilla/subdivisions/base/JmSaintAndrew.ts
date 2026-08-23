// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.335 3.563a1 1 0 0 0-.226.683l.151 3.099a1 1 0 0 1-.015.225l-.357 1.985-1.262-.246-.426 1.17 1.068.713-.601 2.12a.6.6 0 0 0 .294.693l1.891 1.014a1 1 0 0 1 .492.615l.73 2.643a.8.8 0 0 0 .568.56l.515.136a.8.8 0 0 0 .92-.421l.176-.356a.8.8 0 0 1 .865-.434l6.152 1.155a.6.6 0 0 1 .469.744l-.186.697a.6.6 0 0 0 .453.742l3.616.78a1 1 0 0 0 .874-.23l.616-.546a1 1 0 0 0 .33-.864l-.135-1.153a.6.6 0 0 1 .505-.663l1.211-.185a.6.6 0 0 0 .457-.837l-1.772-3.982a1 1 0 0 1-.067-.598l.565-2.887a.8.8 0 0 0-.572-.925l-2.157-.598a.8.8 0 0 0-.824.253L16.64 9.857a1 1 0 0 1-1.013.321l-.954-.247a1 1 0 0 1-.659-.554l-2.123-4.659a1 1 0 0 0-.618-.541l-1.566-.479a1 1 0 0 1-.554-.424l-.466-.742a1 1 0 0 0-.831-.468l-2.767-.042a1 1 0 0 0-.788.365z\"/>";
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

/** Build a <JmSaintAndrew/> icon as a live SVGSVGElement (browser only). */
export function JmSaintAndrew(options: IconOptions = {}): SVGSVGElement {
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
