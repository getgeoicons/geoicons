// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.086 4.635 1.207.06a1.5 1.5 0 0 0 1.203-.509l.284-.323c.289-.33.42-.772.356-1.206a1 1 0 0 1 .666-1.092l.517-.177a1 1 0 0 1 .984.195l1.53 1.345a2 2 0 0 1 .607.972l.841 3.06a2 2 0 0 1-.15 1.445l-1.976 3.835a.8.8 0 0 1-.462.394l-.706.231a.8.8 0 0 0-.55.77l.09 7.927a1 1 0 0 1-.896 1.006l-1.607.166a1 1 0 0 1-.963-.485l-.266-.448a2 2 0 0 1-.28-1.012l-.023-6.86a2 2 0 0 0-.24-.942l-.465-.863a2 2 0 0 1-.239-.87l-.039-.971a1 1 0 0 0-.474-.81l-.874-.541a1 1 0 0 1-.434-1.133l.44-1.498a1 1 0 0 1 .238-.41l.91-.95a1 1 0 0 1 .771-.306Z\"/>";
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

/** Build a <Bj/> icon as a live SVGSVGElement (browser only). */
export function Bj(options: IconOptions = {}): SVGSVGElement {
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
