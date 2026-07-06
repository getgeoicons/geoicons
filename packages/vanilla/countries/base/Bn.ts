// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.545 13.093 1.2 11.073l6.293-1.946a.5.5 0 0 0 .148-.074l5.412-3.96a.5.5 0 0 1 .134-.069l4.388-1.491-2.003 3.643a.5.5 0 0 1-.259.226l-2.862 1.101a.5.5 0 0 0-.317.527l.492 4.089a.5.5 0 0 0 .374.425l.737.185a.5.5 0 0 1 .335.687l-2.178 4.936a.5.5 0 0 1-.249.253l-1.468.674a.5.5 0 0 1-.64-.202l-2.183-3.719a.5.5 0 0 0-.493-.243l-1.272.16a.5.5 0 0 1-.56-.445l-.245-2.36a.5.5 0 0 0-.239-.377Zm17.026 2.855-3.214-1.164a.5.5 0 0 1-.325-.396l-.819-5.493a.5.5 0 0 1 .12-.405l1.57-1.782a.5.5 0 0 1 .837.138l1.472 3.528a.5.5 0 0 1 .035.246l-.25 2.306a.5.5 0 0 0 .143.407l1.336 1.336a.5.5 0 0 1 .03.675l-.381.455a.5.5 0 0 1-.554.149Z\"/>";
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

/** Build a <Bn/> icon as a live SVGSVGElement (browser only). */
export function Bn(options: IconOptions = {}): SVGSVGElement {
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
