// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.995 11.473-.594-2.556a1 1 0 0 1 .173-.824l.88-1.181a1 1 0 0 0 0-1.197L1.849 3.569a.6.6 0 0 1 .395-.953l9.404-1.348a1 1 0 0 1 .825.26l3.542 3.313a.6.6 0 0 1-.05.92l-.794.59a1 1 0 0 0-.266 1.307l.63 1.078a2 2 0 0 0 1.153.907l1.04.311a1 1 0 0 1 .574 1.468l-.69 1.165a1 1 0 0 0 .333 1.36l4.261 2.642a.6.6 0 0 1 .257.688l-.352 1.136a2 2 0 0 0-.072.856l.35 2.626a.6.6 0 0 1-.536.677l-1.829.18a.6.6 0 0 1-.628-.405l-1.716-5.094a1 1 0 0 0-.993-.68l-2.275.103a1 1 0 0 1-.884-.454l-.697-1.073a1 1 0 0 0-1.075-.427l-1.07.26a1 1 0 0 1-.988-.31l-1.67-1.897a1 1 0 0 0-.695-.338l-3.42-.192a1 1 0 0 1-.918-.772Z\"/>";
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

/** Build a <Am/> icon as a live SVGSVGElement (browser only). */
export function Am(options: IconOptions = {}): SVGSVGElement {
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
