// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.41 3.831.556-.461a.6.6 0 0 1 .785.016l3.381 3.05a1 1 0 0 0 1.386-.045l2.203-2.26a.6.6 0 0 1 .949.118l2.856 4.928a1 1 0 0 0 .792.495l1.923.142a1 1 0 0 1 .785.483l.297.497a.6.6 0 0 1-.444.904l-2.29.27a1 1 0 0 0-.873.85l-.47 3.267a1 1 0 0 1-.517.738l-.97.521a1 1 0 0 0-.526.899l.03 1.74a.87.87 0 0 1-1.459.654l-1.593-1.471a.6.6 0 0 1-.11-.745l1.05-1.785a1 1 0 0 0-.15-1.208l-.682-.692a.6.6 0 0 0-.804-.046l-4.142 3.344a.6.6 0 0 1-.96-.326l-.56-2.324a1 1 0 0 0-.48-.635l-1.662-.943a.6.6 0 0 1-.257-.756l.452-1.07a.6.6 0 0 0-.215-.73l-1.365-.928a.6.6 0 0 1-.177-.805l.345-.575a.6.6 0 0 0-.198-.819l-1.51-.937a.6.6 0 0 1-.144-.894l.592-.71a.6.6 0 0 1 .739-.148l3.452 1.805a1.008 1.008 0 0 0 1.403-.545 1.01 1.01 0 0 0-.35-1.17L6.443 4.78a.6.6 0 0 1-.033-.949Z\"/>";
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

/** Build a <AzMainland/> icon as a live SVGSVGElement (browser only). */
export function AzMainland(options: IconOptions = {}): SVGSVGElement {
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
