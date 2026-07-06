// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.45 10.903-2.25.56 2.77 3.09a.5.5 0 0 1 .122.407l-.07.477a.5.5 0 0 0 .242.503l.868.51a.5.5 0 0 0 .588-.06l.303-.274a.5.5 0 0 1 .7.03l.205.218a.5.5 0 0 1 .135.31l.114 1.742a.5.5 0 0 0 .431.463l5.156.7a.5.5 0 0 0 .386-.11l1.215-1.006a.5.5 0 0 1 .243-.11l2.397-.368a.5.5 0 0 1 .27.033l2.8 1.18.368-2.481a.5.5 0 0 1 .325-.397l1.36-.492a.5.5 0 0 0 .293-.28l.237-.58a.5.5 0 0 0-.15-.58l-.493-.394a.5.5 0 0 0-.525-.063l-.985.462a.5.5 0 0 1-.503-.046l-.91-.65a.5.5 0 0 1-.206-.472l.42-3.211a.5.5 0 0 0-.061-.311l-2.776-4.897a.5.5 0 0 0-.34-.244l-.563-.108a.5.5 0 0 0-.508.21l-.432.635a.5.5 0 0 1-.297.206l-2.322.557a.5.5 0 0 1-.245-.003l-3.518-.936a.5.5 0 0 0-.358.039L5.75 6.266a.5.5 0 0 0-.23.25l-1.73 4.096a.5.5 0 0 1-.34.291Z\"/>";
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

/** Build a <Ro/> icon as a live SVGSVGElement (browser only). */
export function Ro(options: IconOptions = {}): SVGSVGElement {
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
