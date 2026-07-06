// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.988 15.718 1.386 11.31a1 1 0 0 1-.125-.676l.386-2.275a1 1 0 0 1 .171-.412l.862-1.212a1 1 0 0 1 .352-.307l.52-.271a1 1 0 0 1 .8-.055l1.168.418a1 1 0 0 0 .838-.077l.819-.474a1 1 0 0 1 .564-.133l1.439.09a1 1 0 0 0 .48-.09l2.51-1.152a.6.6 0 0 1 .848.5l.042.572a1 1 0 0 0 1.174.91l1.22-.219a1 1 0 0 0 .807-.806l.022-.12a.982.982 0 0 1 1.925-.032l.298 1.376a1 1 0 0 0 .6.716l3.194 1.3a.6.6 0 0 1 .35.723l-.321 1.108a1 1 0 0 1-.852.716l-.352.039a1 1 0 0 0-.835.662l-.096.276a1 1 0 0 0-.046.482l.453 2.96a.6.6 0 0 1-.356.642l-3.296 1.424a.6.6 0 0 1-.78-.296l-.625-1.33a.6.6 0 0 0-.613-.34l-1.262.147a.6.6 0 0 0-.485.368l-.815 1.985a1 1 0 0 1-.47.512l-1.102.561a.6.6 0 0 1-.593-.027l-1.041-.656a1 1 0 0 1-.361-.398l-.968-1.93a1 1 0 0 0-.345-.388l-.131-.086a1 1 0 0 0-1.253.126l-.09.089a.6.6 0 0 1-.579.153l-.848-.23a1 1 0 0 1-.6-.456Z\"/>";
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

/** Build a <AmazonBasin/> icon as a live SVGSVGElement (browser only). */
export function AmazonBasin(options: IconOptions = {}): SVGSVGElement {
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
