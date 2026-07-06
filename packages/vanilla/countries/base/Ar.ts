// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.695 14.824-1.026 3.9a.5.5 0 0 0 .23.558l1.686.987a.5.5 0 0 1 .247.436l-.018 2.054 2.589.041-1.807-3.672a.5.5 0 0 1 .035-.503l1.013-1.48a.5.5 0 0 0 .006-.556l-.528-.81a.5.5 0 0 1-.017-.52l2.274-4.02a.5.5 0 0 1 .375-.25l1.52-.186a.5.5 0 0 0 .36-.226l.447-.694a.5.5 0 0 0-.005-.55l-.666-.991a.5.5 0 0 1-.072-.392l.481-2.074a.5.5 0 0 1 .228-.315l2.015-1.219a.5.5 0 0 0 .204-.617l-.2-.492a.5.5 0 0 0-.678-.262l-1.702.808a.5.5 0 0 1-.61-.147l-1.72-2.233a.5.5 0 0 0-.405-.195l-1.463.025a.5.5 0 0 0-.459.32L8.483 5.571a.5.5 0 0 0-.024.276l.331 1.696a.5.5 0 0 1-.021.267l-1.217 3.336a.5.5 0 0 0-.03.2l.188 3.323a.5.5 0 0 1-.015.155Z\"/>";
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

/** Build a <Ar/> icon as a live SVGSVGElement (browser only). */
export function Ar(options: IconOptions = {}): SVGSVGElement {
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
