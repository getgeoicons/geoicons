// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.867 10.24-1.155.479a.678.678 0 0 0-.136 1.177l.72.516a1 1 0 0 1 .389.576l.235.969a1 1 0 0 0 .422.598l1.372.904a1 1 0 0 0 .426.157l1.278.16a1 1 0 0 0 .634-.132l1.064-.63a1 1 0 0 1 .987-.018l.298.162a1 1 0 0 1 .414 1.333l-.073.142a.97.97 0 0 0 1.243 1.332l.72-.305a1 1 0 0 1 .941.085l.613.405a1 1 0 0 0 .835.124l1.229-.365q.18-.054.329-.169l1.243-.966a1 1 0 0 0 .319-.427l.443-1.14a1 1 0 0 0-.047-.827l-.737-1.402a.6.6 0 0 1 .175-.762l.67-.494a.6.6 0 0 1 .93.31l.297.984a.6.6 0 0 0 .853.358l.785-.41a.6.6 0 0 0 .29-.726l-.339-.989a1 1 0 0 1 .294-1.082l1.358-1.17a1 1 0 0 0 .301-.457l.313-.997-2.085-.037a1 1 0 0 1-.836-.48l-.541-.888a1 1 0 0 0-.8-.478l-.55-.03a1 1 0 0 0-.964.587l-.124.273a1 1 0 0 1-.81.583l-2.507.255a1 1 0 0 1-.453-.058l-2.41-.904a1 1 0 0 0-1.091.263l-.153.169a1 1 0 0 1-.994.295l-.891-.234a1 1 0 0 0-.576.02l-1.281.437a1 1 0 0 0-.203.095l-1.54.95a1 1 0 0 0-.465.716l-.051.374a1 1 0 0 1-.608.79Z\"/>";
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

/** Build a <NortheastAsiaSimplified/> icon as a live SVGSVGElement (browser only). */
export function NortheastAsiaSimplified(options: IconOptions = {}): SVGSVGElement {
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
