// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.039 8.429 1.34 1.116a.915.915 0 0 0 1.37-.231l.925-1.54a1.05 1.05 0 0 0-1.03-1.584l-2.02.25a1.13 1.13 0 0 0-.585 1.989Zm7.407 1.424.032.73a2 2 0 0 0 .133.634l.697 1.803a2 2 0 0 0 1.197 1.163l1.685.597a2 2 0 0 0 1.125.063l1.434-.337a2 2 0 0 1 2.252 1.065l.141.288c.109.22.257.42.437.586l.573.53a2 2 0 0 0 .916.483l1 .226A1.42 1.42 0 0 0 22.8 16.3v-.43a1.955 1.955 0 0 0-1.286-1.837l-1.246-.454a2 2 0 0 0-.414-.102l-.267-.037a1.957 1.957 0 0 1-1.65-2.345l.06-.282a2 2 0 0 0-.221-1.41l-.36-.63a2 2 0 0 0-1-.864l-1.469-.582a2 2 0 0 0-.332-.1l-1.133-.233a2 2 0 0 0-1.18.116l-1.243.523a2 2 0 0 0-.417.237l-.39.29a2 2 0 0 0-.806 1.693Z\"/>";
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

/** Build a <Pf/> icon as a live SVGSVGElement (browser only). */
export function Pf(options: IconOptions = {}): SVGSVGElement {
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
