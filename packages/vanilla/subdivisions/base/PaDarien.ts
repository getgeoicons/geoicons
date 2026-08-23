// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.797 22.371c-2.775-2.093-4.751-5.96-5.656-8.317a.955.955 0 0 1 .532-1.216l.6-.258a2 2 0 0 0 1.039-1.027l.559-1.26A.923.923 0 0 0 6.546 9.13l-.588.358a.6.6 0 0 1-.889-.344l-.74-2.536a2 2 0 0 1-.005-1.107l.156-.55a1 1 0 0 1 .848-.72l2.046-.235a1 1 0 0 0 .738-.47l1.056-1.72a.6.6 0 0 1 .907-.137l2.953 2.587a.6.6 0 0 1-.01.911l-1.474 1.238a1 1 0 0 0-.187 1.324l3.164 4.713a1 1 0 0 0 1.399.265l1.78-1.23a.6.6 0 0 1 .892.253l.995 2.284a.6.6 0 0 1-.326.795l-1.056.427a2 2 0 0 0-.96.817l-1.628 2.681a.6.6 0 0 1-.894.153l-.85-.698a.6.6 0 0 0-.947.267l-1.261 3.631c-.127.365-.56.517-.868.284Z\"/>";
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

/** Build a <PaDarien/> icon as a live SVGSVGElement (browser only). */
export function PaDarien(options: IconOptions = {}): SVGSVGElement {
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
