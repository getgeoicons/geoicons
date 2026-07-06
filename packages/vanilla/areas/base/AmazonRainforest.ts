// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.49 8.673-.258 1.873a1 1 0 0 0 .04.448l.558 1.702a1 1 0 0 0 .476.569l1.094.588a1 1 0 0 1 .317.27L4.86 15.6a1 1 0 0 0 .375.298l2.974 1.362a1 1 0 0 1 .435.383l.541.877a1 1 0 0 0 .496.41l1.53.58a1 1 0 0 0 1.035-.203l.845-.784a1 1 0 0 0 .277-1.024l-.012-.038a1 1 0 0 0-.482-.59l-1.123-.606a1 1 0 0 1-.524-.835l-.027-.606a1 1 0 0 1 1.105-1.04l.064.008a1 1 0 0 1 .69.388l1.127 1.48a.654.654 0 0 0 1.174-.367l.04-.88a.6.6 0 0 1 .702-.563l3.339.585a.9.9 0 0 0 .856-1.453l-.233-.287a.804.804 0 0 1 .602-1.308l.458-.014a1 1 0 0 0 .656-.27l.695-.653a1 1 0 0 0 .315-.752l-.025-1.064a1 1 0 0 0-.168-.531l-.128-.192a1 1 0 0 0-.832-.446H19.75a1 1 0 0 1-.41-.088l-2.318-1.044a1 1 0 0 0-.898.038l-.652.364a1 1 0 0 1-1.242-.217l-.932-1.073a1 1 0 0 0-.518-.315l-3.248-.792a1 1 0 0 0-.563.026L4.458 5.921a1 1 0 0 0-.319.18L1.836 8.046a1 1 0 0 0-.346.628Z\"/>";
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

/** Build a <AmazonRainforest/> icon as a live SVGSVGElement (browser only). */
export function AmazonRainforest(options: IconOptions = {}): SVGSVGElement {
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
