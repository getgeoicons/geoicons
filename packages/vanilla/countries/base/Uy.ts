// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.159 16.818.754 2.306a.5.5 0 0 0 .118.195l1.245 1.272a.5.5 0 0 0 .358.15h2.374a.5.5 0 0 1 .262.074l3.028 1.86a.5.5 0 0 0 .43.045l1.876-.668a.5.5 0 0 1 .31-.009l2.34.697a.5.5 0 0 0 .384-.04l3.837-2.109a.5.5 0 0 0 .21-.222l1.292-2.694a.5.5 0 0 0 .04-.316l-.497-2.454a.5.5 0 0 1 .073-.375l1.09-1.648a.5.5 0 0 0-.058-.624L16.88 7.37a.5.5 0 0 0-.177-.118l-2.37-.92a.5.5 0 0 1-.243-.2l-.813-1.291a.5.5 0 0 0-.722-.135l-.628.468a.5.5 0 0 1-.689-.088L8.332 1.458a.5.5 0 0 0-.525-.17l-2.524.706a.5.5 0 0 0-.348.35L3.145 8.92a.5.5 0 0 0-.017.156l.243 4.86a.5.5 0 0 1-.053.25l-1.13 2.252a.5.5 0 0 0-.03.38Z\"/>";
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

/** Build a <Uy/> icon as a live SVGSVGElement (browser only). */
export function Uy(options: IconOptions = {}): SVGSVGElement {
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
