// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.204 21.547a2 2 0 0 0 .84.588l.836.306a1.986 1.986 0 0 0 2.508-1.082l1.077-2.51a1 1 0 0 0 .004-.78l-.456-1.089a1 1 0 0 1-.029-.693l1.087-3.364a1 1 0 0 1 .282-.435l.975-.88a1 1 0 0 0 .326-.834l-.232-2.517a1 1 0 0 1 .398-.893l.336-.251a1 1 0 0 0 .328-1.182l-.062-.15a1 1 0 0 0-1.13-.598l-.906.19a.782.782 0 0 1-.514-1.463l1.496-.757a.948.948 0 0 0-.598-1.777l-1.804.329a1 1 0 0 1-.38-.004l-1.077-.22a1 1 0 0 0-.952.323l-1.111 1.271a1 1 0 0 1-.753.342h-.266a1 1 0 0 1-.598-.199l-1.222-.912a1 1 0 0 0-1.005-.112L7.31 3.659a3 3 0 0 0-.681.42l-1.71 1.4a1 1 0 0 0-.236.28l-2.191 3.86a.6.6 0 0 0 .18.79l2.4 1.663c.217.15.413.33.583.53z\"/>";
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

/** Build a <LcMicoud/> icon as a live SVGSVGElement (browser only). */
export function LcMicoud(options: IconOptions = {}): SVGSVGElement {
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
