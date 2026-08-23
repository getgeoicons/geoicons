// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.775 15.644-.93-2.826a1 1 0 0 1 .043-.736l1.172-2.51a2 2 0 0 0 .18-.67l.1-1.137a1 1 0 0 1 .382-.7l1.297-1.012a1 1 0 0 1 .8-.195l.753.142a.6.6 0 0 0 .71-.597l-.025-2.184a1 1 0 0 1 .727-.974l3.19-.907a1 1 0 0 1 .887.172l1.292 1.002a1 1 0 0 1 .322 1.145l-.587 1.548a1 1 0 0 0 .079.87l1.19 1.973a1 1 0 0 1 .134.658l-.219 1.532a1 1 0 0 1-.365.64l-.87.695a3 3 0 0 0-.73.854l-1.136 1.988a1 1 0 0 0-.044.906l1.093 2.432a1 1 0 0 0 .436.47l.53.288a1 1 0 0 1 .427.449l1.272 2.67a.7.7 0 0 1-.59 1l-2.466.149a1 1 0 0 1-.642-.185l-.025-.018a1 1 0 0 1-.333-1.217l.169-.384a2 2 0 0 0 .052-1.483l-1.504-4.188a.967.967 0 0 0-1.849.096l-.383 1.556a.6.6 0 0 1-.782.422l-3.14-1.104a1 1 0 0 1-.617-.63ZM4.77 17.387l-.618.652a1 1 0 0 0-.17 1.136l.402.804a2 2 0 0 0 1.127.992l1.216.427a.788.788 0 0 0 .947-1.13l-1.526-2.71a.863.863 0 0 0-1.377-.17Z\"/>";
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

/** Build a <PaVeraguas/> icon as a live SVGSVGElement (browser only). */
export function PaVeraguas(options: IconOptions = {}): SVGSVGElement {
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
