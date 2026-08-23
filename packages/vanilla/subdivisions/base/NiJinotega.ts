// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.242 16.786a1.5 1.5 0 0 0-.857 1.057l-.32 1.497a1.5 1.5 0 0 0 .643 1.566l2.238 1.472a1 1 0 0 0 1.214-.088l3.877-3.448a1 1 0 0 1 .405-.219l1.074-.289a1 1 0 0 0 .71-.724l.678-2.723a2 2 0 0 1 .693-1.08l1.97-1.573a.6.6 0 0 1 .655-.06l1.238.655a.6.6 0 0 0 .755-.163l1.917-2.477a2 2 0 0 0 .393-.905l.616-3.802a.6.6 0 0 0-.6-.696l-.814.011a.6.6 0 0 1-.606-.554l-.152-1.994a1 1 0 0 0-1.124-.915l-.57.072a1 1 0 0 0-.863.847l-.334 2.277a2 2 0 0 1-.909 1.398L9.34 9.623a1 1 0 0 0-.442.628l-1.069 4.82a1 1 0 0 1-.852.776l-1.377.172a6 6 0 0 0-1.697.473z\"/>";
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

/** Build a <NiJinotega/> icon as a live SVGSVGElement (browser only). */
export function NiJinotega(options: IconOptions = {}): SVGSVGElement {
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
