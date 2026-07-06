// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.907 15.292-3.288.311a.5.5 0 0 1-.48-.746l.6-1.05a.5.5 0 0 0 .042-.401l-.87-2.716a.5.5 0 0 0-.215-.275L1.578 7.901a.5.5 0 0 1-.195-.633l.286-.632a.5.5 0 0 1 .645-.256l4.172 1.711a.5.5 0 0 0 .177.037l3.695.096a.5.5 0 0 1 .31.117l2.827 2.38a.5.5 0 0 0 .473.093l2.546-.81a.5.5 0 0 1 .336.011l2.39.947a.5.5 0 0 1 .295.605l-.156.536a.5.5 0 0 0 .276.597l1.623.723a.5.5 0 0 1 .169.79l-.215.24a.5.5 0 0 0 .056.722l1.183.962a.5.5 0 0 1 .119.636l-.335.587a.5.5 0 0 1-.69.183l-3.061-1.818a.5.5 0 0 0-.598.066l-.773.727a.5.5 0 0 1-.286.132l-4.388.497a.5.5 0 0 1-.39-.126l-1.78-1.602a.5.5 0 0 0-.382-.127Z\"/>";
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

/** Build a <Ge/> icon as a live SVGSVGElement (browser only). */
export function Ge(options: IconOptions = {}): SVGSVGElement {
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
