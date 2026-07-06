// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.861 7.748-1.365.985a1 1 0 0 1-1.522-.46L1.216 6.25a1 1 0 0 1 .024-.76l.613-1.364a1 1 0 0 1 .426-.464l2.186-1.215a1 1 0 0 1 .642-.113l1.897.299a1 1 0 0 0 .62-.102l2.134-1.118a1 1 0 0 1 .836-.042l2.11.844a1 1 0 0 1 .62.806l.065.52a1 1 0 0 1-.673 1.07l-1.041.352a1 1 0 0 0-.678 1.024l.127 1.647a1 1 0 0 0 .534.81l1.463.764a1 1 0 0 1 .413.404l1.319 2.396a1 1 0 0 0 .766.512l1.755.194a1 1 0 0 1 .825.639l.18.476a1 1 0 0 0 .572.577l3.22 1.259a.835.835 0 1 1-.628 1.548l-1.208-.51a.826.826 0 0 0-1.056 1.139l.673 1.314a1 1 0 0 1-.028.964l-1.198 2.031a.844.844 0 0 1-1.529-.695l.563-1.69a1 1 0 0 0-.03-.71l-.63-1.474a1 1 0 0 0-.473-.5l-4.184-2.092a1 1 0 0 1-.215-.145l-3.692-3.266a1 1 0 0 1-.3-.481l-.583-2.096a1 1 0 0 0-.467-.6L5.942 7.69a1 1 0 0 0-1.08.057Z\"/>";
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

/** Build a <ItalianPeninsula/> icon as a live SVGSVGElement (browser only). */
export function ItalianPeninsula(options: IconOptions = {}): SVGSVGElement {
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
