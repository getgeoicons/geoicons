// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.308 22.07-.57-.523a1 1 0 0 1-.283-1.019l.538-1.827q.048-.166.039-.339l-.125-2.182a1 1 0 0 0-.21-.558L8.69 14.33a1 1 0 0 1-.184-.844l.058-.247a1 1 0 0 1 1.2-.745l.747.174a1 1 0 0 0 .953-.288l.751-.795a1 1 0 0 1 1.002-.275l.575.165a1 1 0 0 1 .633.542l.964 2.09a1 1 0 0 1-.037.912l-.61 1.078a1 1 0 0 0-.129.49l-.008 3.628a1 1 0 0 1-1.154.986l-.393-.061a1 1 0 0 0-.94.37l-.348.442a1 1 0 0 1-1.462.118Zm1.277-12.898.418.19a1 1 0 0 0 1.031-.122l.26-.203a1 1 0 0 0 .384-.788v-.755a1 1 0 0 1 .175-.564l.5-.732a1 1 0 0 0 .175-.591l-.091-3.477a.909.909 0 1 0-1.814.108l.016.174a1 1 0 0 1-.778 1.068l-.289.064a1 1 0 0 0-.556.343l-.51.623a1 1 0 0 0-.201.859l.72 3.118a1 1 0 0 0 .56.685Z\"/>";
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

/** Build a <CorsicaSardiniaRegion/> icon as a live SVGSVGElement (browser only). */
export function CorsicaSardiniaRegion(options: IconOptions = {}): SVGSVGElement {
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
