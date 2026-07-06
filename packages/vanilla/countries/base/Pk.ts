// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.925 13.416-6.254.038 2.567 3.6a.5.5 0 0 1-.116.696l-1.237.887a.5.5 0 0 0-.197.3l-.181.824a.5.5 0 0 0 .546.604l5.128-.59a.5.5 0 0 1 .49.249l1.183 2.06a.5.5 0 0 0 .519.245l3.782-.655a.5.5 0 0 0 .326-.778l-1.965-2.828a.5.5 0 0 1-.011-.554l.693-1.086a.5.5 0 0 1 .406-.231l1.82-.055a.5.5 0 0 0 .392-.208l4.248-5.913a.5.5 0 0 0-.132-.71l-1.342-.88a.5.5 0 0 1-.226-.398l-.084-2.007a.5.5 0 0 1 .61-.508l1.484.333a.5.5 0 0 0 .316-.033l1.05-.476a.5.5 0 0 0 .182-.77l-2.219-2.74a.5.5 0 0 0-.46-.18l-2.99.438a.5.5 0 0 0-.2.076l-1.519.987.602 1.169a.5.5 0 0 1 .03.387l-.41 1.232a.5.5 0 0 1-.364.33l-1.13.256a.5.5 0 0 0-.372.358l-.728 2.721a.5.5 0 0 1-.29.332L8.77 11.24a.5.5 0 0 0-.306.444l-.041 1.249a.5.5 0 0 1-.497.483Z\"/>";
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

/** Build a <Pk/> icon as a live SVGSVGElement (browser only). */
export function Pk(options: IconOptions = {}): SVGSVGElement {
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
