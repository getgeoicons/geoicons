// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.333 9.622-1.737 2.065a.5.5 0 0 0 .147.762l1.733.929a.5.5 0 0 1 .245.303l.092.323a.5.5 0 0 0 .444.361l4.078.302a.5.5 0 0 1 .18.048l4.343 2.087a.5.5 0 0 0 .156.045l7.697.945a.5.5 0 0 0 .415-.142l.945-.946a.5.5 0 0 0 .13-.226l.298-1.13a.5.5 0 0 0-.006-.275l-.331-1.071a.5.5 0 0 1 .004-.309l.556-1.638a.5.5 0 0 0-.056-.435l-.409-.623a.5.5 0 0 0-.542-.21l-1.225.315a.5.5 0 0 1-.542-.21l-.477-.723a.5.5 0 0 0-.637-.174l-2.638 1.29a.5.5 0 0 1-.56-.082l-5.25-4.89a.5.5 0 0 0-.344-.134l-3.49.03a.5.5 0 0 0-.489.582l.158.94a.5.5 0 0 1-.143.44L4.8 9.424a.5.5 0 0 1-.445.134l-.545-.105a.5.5 0 0 0-.477.169Z\"/>";
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

/** Build a <Sv/> icon as a live SVGSVGElement (browser only). */
export function Sv(options: IconOptions = {}): SVGSVGElement {
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
