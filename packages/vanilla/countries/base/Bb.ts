// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path d=\"m7.264 20.654 3.412.618a1 1 0 0 1 .6.356l.524.65a1 1 0 0 0 1.056.333l.746-.216a4 4 0 0 0 1.323-.667l2.305-1.766c.352-.27.657-.595.902-.965l1.783-2.689a2 2 0 0 0 .227-1.75l-.01-.03a2 2 0 0 0-.91-1.098l-1.59-.898-4.483-2.298a3 3 0 0 1-1.125-1.002l-1.838-2.75a3 3 0 0 1-.359-.736l-.574-1.762a3 3 0 0 0-1.068-1.481L7.15 1.738a2 2 0 0 0-1.624-.344l-.04.009a2 2 0 0 0-1.173.763l-.33.447A2 2 0 0 0 3.6 3.975l1.206 13.871a2 2 0 0 0 .44 1.087l.821 1.013a2 2 0 0 0 1.197.708Z\"/>";
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

/** Build a <Bb/> icon as a live SVGSVGElement (browser only). */
export function Bb(options: IconOptions = {}): SVGSVGElement {
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
