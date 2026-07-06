// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.481 7.785-.937-1.288a1 1 0 0 0-.974-.398l-.578.096a.6.6 0 0 1-.694-.664l.139-1.135a1 1 0 0 1 .453-.72l1.77-1.133a1 1 0 0 1 .614-.155l.81.06a1 1 0 0 1 .767.456l.983 1.527a1 1 0 0 0 .302.301l1.897 1.211a1 1 0 0 0 .527.157l3.2.037a.6.6 0 0 1 .54.847l-.74 1.634a1 1 0 0 0 .404 1.274l1.89 1.112a.6.6 0 0 0 .888-.652l-.4-1.732a.6.6 0 0 1 .52-.732l1.825-.195a1 1 0 0 1 .65.155l3.281 2.127a1 1 0 0 1 .069 1.63l-2.243 1.739a1 1 0 0 0-.38.664l-.267 2.112a1 1 0 0 1-.123.368l-.974 1.716a1 1 0 0 0 .02 1.023l.579.93a.6.6 0 0 1-.084.74l-.231.232a.6.6 0 0 1-.82.03l-1.156-1.006a1 1 0 0 0-.919-.211l-1.72.467c-.15.041-.289.117-.405.221l-.783.703a.6.6 0 0 1-.724.059L8.922 19.77a1 1 0 0 0-.494-.157l-1.997-.088a1 1 0 0 1-.734-.37l-.683-.845a1 1 0 0 1-.202-.429l-.438-2.142a1 1 0 0 1 .029-.511l.862-2.638a1 1 0 0 0 .036-.473L4.66 8.211a1 1 0 0 0-.178-.426Z\"/>";
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

/** Build a <NorthernAmericaWithoutGreenland/> icon as a live SVGSVGElement (browser only). */
export function NorthernAmericaWithoutGreenland(options: IconOptions = {}): SVGSVGElement {
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
