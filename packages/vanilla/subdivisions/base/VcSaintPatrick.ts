// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.387 8.12a1 1 0 0 0-.168-1.145l-.915-.958A1 1 0 0 0 20.1 5.83l-1.334.734a3 3 0 0 1-.956.33l-4.314.716a1 1 0 0 1-.693-.139L5.467 2.893a.6.6 0 0 0-.812.17l-.232.338a.6.6 0 0 0 .024.712l.625.789a.6.6 0 0 1-.093.84L2.574 7.683a1 1 0 0 0-.368.684L1.181 19.234a1 1 0 0 0 .641 1.03l1.964.743a1 1 0 0 0 .918-.11l2.983-2.035a3 3 0 0 1 .997-.441l3.903-.928a1 1 0 0 0 .74-.74l.362-1.503a1 1 0 0 1 .339-.54l1.342-1.1a1 1 0 0 1 .624-.226l2.452-.024a1 1 0 0 0 .636-.236l.862-.73c.304-.257.554-.572.735-.927z\"/>";
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

/** Build a <VcSaintPatrick/> icon as a live SVGSVGElement (browser only). */
export function VcSaintPatrick(options: IconOptions = {}): SVGSVGElement {
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
