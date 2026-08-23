// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.875 1.728a.3.3 0 0 0-.343-.405l-3.618.796a1 1 0 0 0-.54.322L11.95 5.24a1 1 0 0 1-1.016.311l-1.332-.36a1 1 0 0 0-.92.215l-3.357 2.95a.3.3 0 0 0 .116.515l3.416.969a1 1 0 0 1 .552.396l2.68 3.905a.6.6 0 0 1 .047.598l-.423.89a.6.6 0 0 0 .072.63l1.13 1.421a1 1 0 0 1 .21.738l-.163 1.416a1 1 0 0 0 .169.681l1.217 1.77a.6.6 0 0 0 .855.14l3.183-2.393a1 1 0 0 0 .4-.796l.006-1.743a1 1 0 0 0-.438-.83l-2.672-1.82a1 1 0 0 1-.334-1.27l2.688-5.44a1 1 0 0 0 .04-.793l-.572-1.531a1 1 0 0 1 .01-.726z\"/>";
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

/** Build a <HnCortes/> icon as a live SVGSVGElement (browser only). */
export function HnCortes(options: IconOptions = {}): SVGSVGElement {
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
