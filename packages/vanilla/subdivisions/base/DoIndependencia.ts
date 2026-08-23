// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.037 4.386a.3.3 0 0 0-.325.313l.037.746a.3.3 0 0 1-.373.305l-3.598-.907a.6.6 0 0 0-.493.092l-.492.348a.6.6 0 0 0-.068.923L4.683 9.04a.3.3 0 0 1 .019.414l-.615.706a.3.3 0 0 0 .078.458l5.384 3.063a.3.3 0 0 1 .109.416l-.499.821a.3.3 0 0 0 .114.42l7.27 3.949a.6.6 0 0 0 .864-.36l.982-3.396a.6.6 0 0 1 .815-.384l1.387.604a.6.6 0 0 0 .66-.122l1.124-1.102a.6.6 0 0 0 .012-.845l-1.616-1.674a1 1 0 0 0-1.086-.237l-1.752.69a1 1 0 0 1-.99-.149l-.736-.587a.88.88 0 0 1-.308-.882.88.88 0 0 0-.535-1.012l-3.206-1.259a.6.6 0 0 1-.327-.804l.94-2.093a.6.6 0 0 0-.496-.844z\"/>";
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

/** Build a <DoIndependencia/> icon as a live SVGSVGElement (browser only). */
export function DoIndependencia(options: IconOptions = {}): SVGSVGElement {
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
