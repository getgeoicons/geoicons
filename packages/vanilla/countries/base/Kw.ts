// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.538 16.142 1.2 14.839l3.809-4.466a.5.5 0 0 0 .08-.13L7.966 3.46a.5.5 0 0 1 .207-.236l2.315-1.357a.5.5 0 0 1 .248-.069l3.703-.041a.5.5 0 0 1 .213.045l2.761 1.259a.5.5 0 0 0 .317.033l1.689-.38a.5.5 0 0 1 .514.195l2.159 2.978a.5.5 0 0 1-.01.6l-1.854 2.39a.5.5 0 0 1-.563.164l-1.873-.67a.5.5 0 0 0-.49.089l-2.564 2.154a.5.5 0 0 0 .068.814l1.114.654a.5.5 0 0 0 .588-.06l.827-.744a.5.5 0 0 1 .52-.093l.791.317a.5.5 0 0 1 .304.365l.9 4.453a.5.5 0 0 0 .096.21l2.162 2.744a.5.5 0 0 1 .096.201l.596 2.683-7.928.086a.5.5 0 0 1-.385-.174l-1.102-1.28a.5.5 0 0 1-.12-.326v-2.006a.5.5 0 0 0-.093-.289l-1.289-1.82a.5.5 0 0 0-.345-.206Z\"/>";
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

/** Build a <Kw/> icon as a live SVGSVGElement (browser only). */
export function Kw(options: IconOptions = {}): SVGSVGElement {
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
