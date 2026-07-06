// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.954 21.933-1.159.654a1 1 0 0 1-.793.082l-.125-.04a1 1 0 0 1-.645-1.277l.291-.851a1 1 0 0 0 .026-.56l-.808-3.338a1 1 0 0 0-.236-.441l-1.28-1.391a1 1 0 0 1-.227-.406l-1.175-4.161a1 1 0 0 1 .25-.974l3.42-3.47a1 1 0 0 0 .283-.594l.23-2.12a1 1 0 0 1 .692-.845l2.942-.934a1 1 0 0 1 .43-.04l4.281.547a1 1 0 0 1 .754.517l1.966 3.644a1 1 0 0 1 .118.418l.08 1.387a1 1 0 0 0 .058.287l.742 2.028a1 1 0 0 1-.372 1.167l-8.532 5.874a1 1 0 0 0-.365.46l-.693 1.776a1 1 0 0 0 .021.778l.245.538a1 1 0 0 1-.419 1.285Z\"/>";
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

/** Build a <Tv/> icon as a live SVGSVGElement (browser only). */
export function Tv(options: IconOptions = {}): SVGSVGElement {
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
