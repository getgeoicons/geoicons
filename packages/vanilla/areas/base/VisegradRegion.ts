// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.966 22.402-2.037-1.253a1 1 0 0 1-.315-1.395l.724-1.12a1 1 0 0 0 .139-.749l-.253-1.2a1 1 0 0 0-1.199-.77l-2.68.605a1 1 0 0 1-.96-.302l-2.313-2.54a.9.9 0 0 1 .256-1.408l2.857-1.46a1 1 0 0 0 .512-1.145l-1.341-5.08a.6.6 0 0 1 .257-.66l3.681-2.352a1 1 0 0 1 1.139.043l.723.542a1 1 0 0 0 .806.179l4.027-.848a1 1 0 0 1 1.082.497l.957 1.741a1 1 0 0 1 .094.725l-.358 1.432a1 1 0 0 0 .089.714l1.506 2.812a1 1 0 0 1-.196 1.201l-.846.795a1 1 0 0 0-.28.468l-.62 2.294a1 1 0 0 0 .303 1.01l.725.64a.6.6 0 0 1 .157.678l-1.543 3.747a1 1 0 0 1-.748.603l-1.682.302a1 1 0 0 0-.502.25l-.958.886a1 1 0 0 1-1.203.118Z\"/>";
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

/** Build a <VisegradRegion/> icon as a live SVGSVGElement (browser only). */
export function VisegradRegion(options: IconOptions = {}): SVGSVGElement {
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
