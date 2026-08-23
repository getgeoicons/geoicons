// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.332 12.38a1 1 0 0 0-.432-.659l-2.28-1.51a1 1 0 0 1-.444-.75l-.187-2.27a1 1 0 0 0-.947-.916l-1.26-.063a1 1 0 0 1-.703-.342L13.64 3.076a.6.6 0 0 0-.83-.071L9.173 5.958a1 1 0 0 1-.579.222l-2.32.119a.6.6 0 0 0-.566.546l-.273 3.052a1 1 0 0 1-.434.738l-1.198.813a1 1 0 0 0-.339.391l-1.942 4.005a1 1 0 0 0 .218 1.168l1.907 1.777a1 1 0 0 0 1.153.15l1.054-.563a1 1 0 0 1 .923-.01l5.46 2.764a1 1 0 0 0 .909-.002l2.68-1.374a3 3 0 0 0 1.126-1.003l1.499-2.242a1 1 0 0 1 .552-.404l3.28-.954a.6.6 0 0 0 .422-.681z\"/>";
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

/** Build a <MxAguascalientes/> icon as a live SVGSVGElement (browser only). */
export function MxAguascalientes(options: IconOptions = {}): SVGSVGElement {
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
