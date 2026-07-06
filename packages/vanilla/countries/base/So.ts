// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.99 21.614.948 1.186 4.32-4.779a.5.5 0 0 1 .124-.098l2.203-1.259a.5.5 0 0 0 .11-.085l3.14-3.212a.5.5 0 0 0 .075-.097l4.169-7.155a.5.5 0 0 0 .053-.132l.891-3.61a.5.5 0 0 0-.274-.573l-.846-.394a.5.5 0 0 0-.66.231l-.4.81a.5.5 0 0 1-.356.268l-8.149 1.54a.5.5 0 0 1-.479-.174l-.894-1.089a.5.5 0 0 0-.81.053l-.45.718a.5.5 0 0 0 .017.554l1.493 2.1a.5.5 0 0 0 .276.194l5.924 1.61-4.282 4.346a.5.5 0 0 1-.218.13L5.81 13.879a.5.5 0 0 0-.24.153l-1.506 1.737a.5.5 0 0 0-.122.322l-.062 5.205a.5.5 0 0 0 .11.318Z\"/>";
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

/** Build a <So/> icon as a live SVGSVGElement (browser only). */
export function So(options: IconOptions = {}): SVGSVGElement {
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
