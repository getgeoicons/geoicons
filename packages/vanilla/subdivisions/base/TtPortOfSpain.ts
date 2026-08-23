// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.11 7.054a2 2 0 0 1 1.06.592l.744.791a2 2 0 0 1 .514 1.039l.207 1.237a2 2 0 0 1-.067.938l-.308.967a1 1 0 0 0 .534 1.212l1.109.51a1 1 0 0 0 1.2-.286l.033-.04a1 1 0 0 1 1.292-.239l6.71 3.968a1 1 0 0 1 .47.661l.2.98a1 1 0 0 0 .433.636l.297.195a1 1 0 0 0 .754.141l2.604-.55a.6.6 0 0 0 .472-.657l-.508-4.374a.6.6 0 0 1 .486-.66l.953-.177a.6.6 0 0 0 .49-.585l.008-.939a.6.6 0 0 0-.182-.437l-1.372-1.328a.6.6 0 0 1-.183-.433l.013-3.082a.6.6 0 0 0-.78-.575l-3.595 1.136a1 1 0 0 1-.613-.003l-3.072-1.007a1 1 0 0 1-.624-.596l-.566-1.495a.6.6 0 0 0-.445-.376L8.74 3.7a.6.6 0 0 0-.715.594v.036a1 1 0 0 1-.99 1.01l-4.773.05a.6.6 0 0 0-.517.306l-.142.253a.6.6 0 0 0 .404.881z\"/>";
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

/** Build a <TtPortOfSpain/> icon as a live SVGSVGElement (browser only). */
export function TtPortOfSpain(options: IconOptions = {}): SVGSVGElement {
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
