// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.878 22.026-.068-.58a1 1 0 0 1 .816-1.101l1.076-.193a1 1 0 0 0 .784-.706l.449-1.551a1 1 0 0 1 .502-.611l1.398-.72a1 1 0 0 0 .474-.528l.306-.79a1 1 0 0 1 .848-.636l.971-.082a1 1 0 0 0 .73-.417l.674-.947a1 1 0 0 1 .56-.387l.574-.152a1 1 0 0 0 .619-.482l.517-.936a1 1 0 0 0-.15-1.172l-.015-.017a1 1 0 0 0-.674-.31l-1.399-.073a1 1 0 0 1-.242-.042l-.757-.233a1 1 0 0 1-.606-.522l-.477-.988a1 1 0 0 0-.748-.554l-3.64-.56a1 1 0 0 0-.939.37l-3.128 3.98a.975.975 0 1 1-1.467-1.281l2.077-2.146a3 3 0 0 0 .457-.612l.18-.318a2.64 2.64 0 0 0-.126-2.796l-.756-1.097a.99.99 0 0 1 1.374-1.38l3.197 2.182c.38.26.802.452 1.247.567l3.145.819a4 4 0 0 0 2.037-.006l2.502-.666a1 1 0 0 1 .953.247l.068.066a1 1 0 0 1 .231 1.096L19.9 7.12a1 1 0 0 0-.047.605l.677 2.888a1 1 0 0 1-.203.866l-2.329 2.813a5 5 0 0 0-.67 1.054l-.634 1.345a3 3 0 0 1-1.945 1.62l-1.809.479a3 3 0 0 0-1.551.997l-1.092 1.33c-.34.414-.783.729-1.285.913l-1.33.489a.6.6 0 0 1-.803-.493Z\"/>";
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

/** Build a <BsCrookedIsland/> icon as a live SVGSVGElement (browser only). */
export function BsCrookedIsland(options: IconOptions = {}): SVGSVGElement {
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
