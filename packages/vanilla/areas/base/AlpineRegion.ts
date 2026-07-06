// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.04 19.036-1.107-.134a1 1 0 0 1-.652-.358l-.778-.945a1 1 0 0 1-.207-.836l.493-2.407a1 1 0 0 1 .307-.54l1.11-1.007q.162-.149.249-.352l.655-1.558a1 1 0 0 1 .307-.4l2.282-1.781a1 1 0 0 1 .286-.156L10.6 7.3a1 1 0 0 1 .196-.047l7.708-1.042a1 1 0 0 0 .393-.141l1.495-.927a1 1 0 0 1 .831-.103l.73.233a1 1 0 0 1 .694.868l.122 1.458a1 1 0 0 1-.18.662l-1.551 2.19a1 1 0 0 1-.524.378l-2.292.7a1 1 0 0 1-.562.007l-1.26-.356a1 1 0 0 0-.862.158l-1.97 1.448a1 1 0 0 1-.828.167l-3.84-.927a1 1 0 0 0-.717.096l-1.034.568a1 1 0 0 0-.375.362l-.403.672a1 1 0 0 0-.133.656l.054.373a1 1 0 0 0 1.106.852l.039-.005a.6.6 0 0 1 .614.85l-.083.177a1 1 0 0 1-.64.542l-1.162.32a1 1 0 0 0-.5.32l-.74.878a1 1 0 0 1-.885.348Z\"/>";
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

/** Build a <AlpineRegion/> icon as a live SVGSVGElement (browser only). */
export function AlpineRegion(options: IconOptions = {}): SVGSVGElement {
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
