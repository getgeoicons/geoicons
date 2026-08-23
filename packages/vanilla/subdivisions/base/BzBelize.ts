// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.507 13.26a.3.3 0 0 0 .381.265l.76-.216a.3.3 0 0 1 .381.272l.33 6.014a3 3 0 0 1-.074.841l-.358 1.546a.6.6 0 0 0 .575.735l4.89.08a.6.6 0 0 0 .321-.087l.6-.363a.6.6 0 0 0 .289-.503l.05-2.86q.006-.4.092-.79l.852-3.872c.09-.41.5-.667.91-.57l.027.007a.914.914 0 0 0 .548-1.74l-1.338-.526a1 1 0 0 1-.58-1.254l.937-2.736q.09-.263.13-.537l.384-2.613q.05-.34.176-.66l.553-1.409a.6.6 0 0 0-.484-.814l-1.796-.225a2 2 0 0 0-.706.037L9.155 2.504a1 1 0 0 0-.71.627l-.28.758a1 1 0 0 0-.062.361l.048 3.123a1 1 0 0 1-.216.635l-1.421 1.8a1 1 0 0 0-.213.694z\"/>";
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

/** Build a <BzBelize/> icon as a live SVGSVGElement (browser only). */
export function BzBelize(options: IconOptions = {}): SVGSVGElement {
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
