// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.955 7.109a.6.6 0 0 0-.979.396l-.17 1.528a1 1 0 0 0 .068.487l.537 1.318a1 1 0 0 1-.042.843l-.882 1.671a1 1 0 0 0 .07 1.047l1.697 2.383a1 1 0 0 0 .72.415l3.57.341c.425.041.854.013 1.27-.082l3.425-.781a2 2 0 0 1 1.104.061l1.92.67a1 1 0 0 0 .65.003l4.299-1.454a3 3 0 0 1 1.023-.158l.35.007a1 1 0 0 0 1.005-1.172l-.016-.095a1 1 0 0 0-.91-.824l-.448-.034a1 1 0 0 1-.826-.567l-.665-1.393a1 1 0 0 0-1.058-.558l-1.193.188a2 2 0 0 1-1.019-.104l-5.733-2.168a2 2 0 0 0-.88-.122l-3.804.331a1 1 0 0 1-.724-.226z\"/>";
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

/** Build a <JmSaintThomas/> icon as a live SVGSVGElement (browser only). */
export function JmSaintThomas(options: IconOptions = {}): SVGSVGElement {
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
