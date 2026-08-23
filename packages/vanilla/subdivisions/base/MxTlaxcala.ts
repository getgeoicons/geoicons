// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.506 7.908a1 1 0 0 0-.562.353l-.344.432a1 1 0 0 0-.11 1.075l.47.926a1 1 0 0 0 .849.547l1.565.066a1 1 0 0 1 .806.47l3.032 4.86a2 2 0 0 0 .942.793l2.204.899a1 1 0 0 0 1.082-.217l1.568-1.558a1 1 0 0 1 1.264-.12l.673.454a1 1 0 0 0 1.357-.225l1.176-1.555a1 1 0 0 1 .868-.394l1.667.117a1 1 0 0 0 .802-.317l.288-.31a1 1 0 0 0-.069-1.429l-1.967-1.745a1 1 0 0 0-.816-.24l-.713.109a.83.83 0 0 1-.956-.827l.006-.802a1 1 0 0 0-.365-.78l-2.86-2.354a1 1 0 0 0-.831-.208l-1.797.358a1 1 0 0 1-.532-.04l-1.627-.582a.8.8 0 0 0-.992.41L8.023 7.25a1 1 0 0 1-1.005.565l-2.327-.24a3 3 0 0 0-.97.058z\"/>";
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

/** Build a <MxTlaxcala/> icon as a live SVGSVGElement (browser only). */
export function MxTlaxcala(options: IconOptions = {}): SVGSVGElement {
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
