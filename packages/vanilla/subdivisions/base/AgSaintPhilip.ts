// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.47 18.596a.6.6 0 0 0 .508.496l2.319.325a2 2 0 0 1 .732.254l4.435 2.593a3 3 0 0 0 1.444.41l4.842.114a1 1 0 0 0 .825-.401l1.462-1.958a3 3 0 0 1 .889-.794l1.954-1.143a1 1 0 0 0 .476-1.057l-1.198-6.069a.6.6 0 0 0-.887-.404l-.949.544a2 2 0 0 1-1.038.265l-1.12-.025a2 2 0 0 1-1.37-.585l-1.391-1.39a1 1 0 0 1 .17-1.552l2.234-1.42a1 1 0 0 1 .923-.079l1.134.475a.6.6 0 0 0 .826-.47l.288-2.048a3 3 0 0 1 .325-.998l.704-1.315a.6.6 0 0 0-.464-.88l-.97-.105a1 1 0 0 0-.596.121l-1.04.582a1 1 0 0 1-1.038-.038l-1.02-.672a1 1 0 0 0-.57-.166l-.962.02a1 1 0 0 0-.775.394l-1.037 1.36a1 1 0 0 1-1.644-.076l-.31-.496a.6.6 0 0 0-.71-.247L6.912 3.215a1 1 0 0 0-.541.462l-.813 1.484a3 3 0 0 1-.94 1.038L3.054 7.264a1 1 0 0 0-.435.867l.052 1.296a3 3 0 0 1-.261 1.351l-.657 1.462a2 2 0 0 0-.149 1.147z\"/>";
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

/** Build a <AgSaintPhilip/> icon as a live SVGSVGElement (browser only). */
export function AgSaintPhilip(options: IconOptions = {}): SVGSVGElement {
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
