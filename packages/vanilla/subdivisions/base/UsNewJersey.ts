// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.184 14.875a2 2 0 0 0-.418 1l-.092.753a1 1 0 0 0 .267.809l1.107 1.169a2 2 0 0 0 .923.553l1.03.282a.6.6 0 0 1 .385.833l-.472 1.011a.933.933 0 0 0 1.655.857l3.292-5.77c.58-1.018.994-2.12 1.226-3.268l.632-3.12a.6.6 0 0 0-.313-.653L15.4 8.812a.6.6 0 0 1-.182-.92l1.01-1.192a4 4 0 0 0 .654-1.08l.306-.755a.6.6 0 0 0-.25-.742l-4.495-2.658a.6.6 0 0 0-.774.143L9.716 4.056a2 2 0 0 0-.401.873l-.406 2.13a1 1 0 0 0 .218.83l2.261 2.686a.9.9 0 0 1-.1 1.261l-1.636 1.415a2 2 0 0 1-.618.364l-.675.248a2 2 0 0 0-.876.635z\"/>";
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

/** Build a <UsNewJersey/> icon as a live SVGSVGElement (browser only). */
export function UsNewJersey(options: IconOptions = {}): SVGSVGElement {
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
