// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.104 9.14a.8.8 0 0 0 .501.662l.241.096a.8.8 0 0 1 .48.95l-.21.79a1 1 0 0 1-.513.634l-3.987 2.031a1 1 0 0 0-.546.88l-.016 1.43a1 1 0 0 0 .464.856l5.117 3.248q.062.04.13.07l3.931 1.746a1 1 0 0 0 1.083-.177l2.843-2.615a1 1 0 0 0 .323-.75l-.018-1.233a1 1 0 0 0-.454-.823l-1.33-.868a1 1 0 0 1-.438-.657l-.21-1.138a1 1 0 0 0-.322-.57l-.926-.816a.983.983 0 0 1 .503-1.71l1.83-.276a1 1 0 0 0 .844-.872l.4-3.38a2 2 0 0 0-.157-1.04l-.508-1.155a1 1 0 0 0-.84-.595l-1.457-.11a1 1 0 0 1-.785-.488l-.92-1.554a1 1 0 0 0-.89-.49l-.352.01a1 1 0 0 0-.914.666l-.374 1.05c-.092.26-.13.537-.11.813l.115 1.61a.6.6 0 0 1-.53.64l-1.706.198a.6.6 0 0 0-.528.657z\"/>";
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

/** Build a <HnLempira/> icon as a live SVGSVGElement (browser only). */
export function HnLempira(options: IconOptions = {}): SVGSVGElement {
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
