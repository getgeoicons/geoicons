// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.792 9.575a1 1 0 0 0-.202-.627l-.482-.637a1 1 0 0 0-.59-.375l-.789-.168a1 1 0 0 1-.57-.35l-1.3-1.614a2 2 0 0 0-.473-.426l-2.714-1.751a1 1 0 0 0-1.068-.01l-2.583 1.596a3 3 0 0 1-.844.357l-2.526.637a1 1 0 0 1-.747-.105L7.213 5.7a1 1 0 0 0-.841-.077L3.109 6.796a1 1 0 0 0-.546.474L1.428 9.422a1 1 0 0 0-.026.88L4.09 16.22a1 1 0 0 0 .52.507l2.612 1.107a1 1 0 0 0 .706.028l1.478-.492a1 1 0 0 1 .952.177l2.206 1.82a1 1 0 0 0 .847.206l1.691-.365a1 1 0 0 1 1.004.369l.333.432a.8.8 0 0 0 1.186.092l.73-.695a3 3 0 0 1 1.464-.767l.323-.067a1 1 0 0 0 .772-1.208l-.15-.64a1 1 0 0 1 .255-.924l1.392-1.436a1 1 0 0 0 .282-.672z\"/>";
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

/** Build a <HnOlancho/> icon as a live SVGSVGElement (browser only). */
export function HnOlancho(options: IconOptions = {}): SVGSVGElement {
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
