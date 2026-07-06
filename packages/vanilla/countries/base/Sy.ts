// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m18.853 12.795-13.84 8.977a.5.5 0 0 1-.51.02l-2.878-1.548a.5.5 0 0 1-.261-.399l-.151-1.791a.5.5 0 0 1 .064-.29l.868-1.518a.5.5 0 0 1 .137-.154l1.559-1.15a.5.5 0 0 0 .172-.575l-.422-1.15a.5.5 0 0 0-.47-.328h-.82a.5.5 0 0 1-.494-.423l-.494-3.18a.5.5 0 0 1 .023-.245l.358-1a.5.5 0 0 1 .227-.27L3.9 6.67a.5.5 0 0 0 .256-.455L4.1 4.687a.5.5 0 0 1 .694-.479l1.644.696a.5.5 0 0 0 .407-.007L9.213 3.79a.5.5 0 0 1 .491.038l1.271.856a.5.5 0 0 0 .32.084l3.046-.25a.5.5 0 0 0 .219-.071l2.512-1.524a.5.5 0 0 1 .377-.059l1.347.328a.5.5 0 0 0 .285-.014l2.707-.958a.5.5 0 0 1 .622.264l.246.544a.5.5 0 0 1-.103.56l-1.478 1.468a.5.5 0 0 1-.252.135l-1.263.259a.5.5 0 0 0-.4.483l-.079 6.447a.5.5 0 0 1-.228.414Z\"/>";
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

/** Build a <Sy/> icon as a live SVGSVGElement (browser only). */
export function Sy(options: IconOptions = {}): SVGSVGElement {
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
