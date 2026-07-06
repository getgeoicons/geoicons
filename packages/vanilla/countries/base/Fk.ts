// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.844 14.166 2.058 1.593a.5.5 0 0 0 .52.057l1.465-.69a.5.5 0 0 0 .26-.29l.25-.73a.5.5 0 0 1 .395-.33l1.183-.189a.5.5 0 0 0 .31-.178l2.534-3.113 1.288-1.98a.5.5 0 0 0-.137-.685l-1.572-1.072a.5.5 0 0 0-.281-.087H9.224a.5.5 0 0 0-.118.015l-4.303 1.04 1.981 2.038a.5.5 0 0 1-.302.845l-.688.078a.5.5 0 0 0-.408.681l.51 1.287a.5.5 0 0 1-.464.684h-.835a.5.5 0 0 1-.488-.392l-.183-.822a.5.5 0 0 0-.6-.378l-1.371.317a.5.5 0 0 0-.285.79l1.083 1.42a.5.5 0 0 0 .091.091Zm8.176 2.445.24-1.841a.5.5 0 0 1 .046-.152l.819-1.706a.5.5 0 0 1 .164-.193l2.438-1.707a.5.5 0 0 0 .067-.763l-.256-.256a.5.5 0 0 1-.11-.54l1.031-2.57 1.262.633a.5.5 0 0 0 .471-.011l.612-.347a.5.5 0 0 1 .558.043l.852.677a.5.5 0 0 0 .391.102l1.686-.277a.5.5 0 0 1 .55.323l.805 2.218a.5.5 0 0 1-.255.622l-3.877 1.856a.5.5 0 0 0-.228.22l-.77 1.479a.5.5 0 0 1-.443.27h-1.19a.5.5 0 0 0-.36.152l-1.717 1.783a.5.5 0 0 1-.26.143l-1.93.397a.5.5 0 0 1-.595-.555Z\"/>";
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

/** Build a <Fk/> icon as a live SVGSVGElement (browser only). */
export function Fk(options: IconOptions = {}): SVGSVGElement {
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
