// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.201 22.798a.6.6 0 0 0 .556-.829l-.382-.927a.6.6 0 0 0-.63-.367l-1.136.144a.6.6 0 0 1-.654-.436l-.123-.446a1 1 0 0 0-.516-.628l-.916-.459a1 1 0 0 1-.526-.668l-.643-2.768a1 1 0 0 0-.302-.514l-1.902-1.725a.6.6 0 0 1-.19-.532l.174-1.189a.8.8 0 0 0-.327-.767l-.69-.493a.6.6 0 0 1-.25-.457l-.08-1.503a.3.3 0 0 0-.299-.284H8.742a.3.3 0 0 1-.3-.281l-.254-4.112a.6.6 0 0 0-.252-.453L6.16 1.85a2 2 0 0 0-.738-.324l-1.16-.248a.3.3 0 0 0-.363.294l.01 20.426a.3.3 0 0 0 .214.287l1.524.457a.6.6 0 0 0 .17.025z\"/>";
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

/** Build a <CaYukon/> icon as a live SVGSVGElement (browser only). */
export function CaYukon(options: IconOptions = {}): SVGSVGElement {
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
