// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.663 3.172-1.362 1.365a1 1 0 0 0 .123 1.518l1.102.794a1 1 0 0 0 .78.17l.753-.15a1 1 0 0 1 .953.328l.377.439a1 1 0 0 1 .073 1.21l-.641.954a2 2 0 0 1-.706.642l-1.573.855q-.287.156-.51.394l-2.706 2.907a1 1 0 0 1-.295.219L8.594 16a1 1 0 0 0-.504.562l-.63 1.757a1 1 0 0 1-.634.614l-1.771.572a1 1 0 0 0-.675.763l-.328 1.706a.662.662 0 0 0 1.036.663l2.9-2.079c.195-.14.365-.315.498-.516l1.107-1.66a2 2 0 0 1 1.07-.8l3.909-1.217a1 1 0 0 0 .606-.526l1.17-2.467a4 4 0 0 1 .489-.783l2.79-3.491c.267-.335.285-.802.086-1.182-1.178-2.25-.926-4.412-.407-5.566.134-.297.099-.663-.142-.881a.64.64 0 0 0-.667-.118l-2.844 1.162a3 3 0 0 0-.99.659Z\"/>";
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

/** Build a <BsAcklins/> icon as a live SVGSVGElement (browser only). */
export function BsAcklins(options: IconOptions = {}): SVGSVGElement {
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
