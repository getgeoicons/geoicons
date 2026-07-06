// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.306 8.723-1.938 1.403a.5.5 0 0 0 .067.85l1.172.597a.5.5 0 0 1 .2.707l-.472.769a.5.5 0 0 0-.067.338l.237 1.518a.5.5 0 0 0 .179.312l1.363 1.104a.5.5 0 0 1-.05.812l-1.338.84a.25.25 0 0 0 .058.45l1.474.467a.5.5 0 0 0 .245.014l2.632-.506a.5.5 0 0 0 .233-.114l1.308-1.133a.5.5 0 0 1 .559-.065l3.242 1.694a.5.5 0 0 0 .369.037l.883-.252a.5.5 0 0 0 .344-.617l-.452-1.6a.5.5 0 0 1 .338-.616l1.886-.561a.5.5 0 0 0 .333-.326l.442-1.366a.5.5 0 0 0-.101-.486l-.62-.7a.5.5 0 0 1 .187-.795l3.55-1.436a.5.5 0 0 0 .313-.45l.007-.233a.5.5 0 0 1 .582-.478l1.835.307-2.007-3.83a.5.5 0 0 0-.502-.265l-1.251.147a.5.5 0 0 0-.435.575l.11.696a.5.5 0 0 1-.462.577l-6.534.422a.5.5 0 0 0-.328.152l-1.672 1.731a.5.5 0 0 1-.449.145l-5.088-.922a.5.5 0 0 0-.382.087Z\"/>";
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

/** Build a <Si/> icon as a live SVGSVGElement (browser only). */
export function Si(options: IconOptions = {}): SVGSVGElement {
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
