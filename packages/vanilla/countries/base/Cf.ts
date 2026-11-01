// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.584 18.993-1.931-3.547a3 3 0 0 1-.36-1.24l-.072-1.115a1 1 0 0 1 .158-.607l1.283-1.99a1 1 0 0 1 .73-.452l3.854-.427a.8.8 0 0 0 .558-.324l.787-1.079a.8.8 0 0 1 .504-.315l1.532-.277a2 2 0 0 0 1.342-.91l1.012-1.624a1 1 0 0 1 .84-.47l.659-.006a1 1 0 0 1 .774.356l.744.886a1 1 0 0 1 .223.796l-.123.797a.8.8 0 0 0 .383.81l2.178 1.288a2 2 0 0 1 .474.39l3.44 3.856a.541.541 0 0 1-.503.892l-2.792-.523a2 2 0 0 0-1.11.11l-3.513 1.404a2 2 0 0 1-1.307.062L9.79 14.69a1 1 0 0 0-1.216.603l-.357.934a.8.8 0 0 1-.728.514l-1.542.038a1 1 0 0 0-.952.782l-.284 1.274a.608.608 0 0 1-1.127.159Z\"/>";
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

/** Build a <Cf/> icon as a live SVGSVGElement (browser only). */
export function Cf(options: IconOptions = {}): SVGSVGElement {
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
