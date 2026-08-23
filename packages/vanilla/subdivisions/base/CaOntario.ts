// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.46 7.04 4.328-5.13a.6.6 0 0 1 .748-.138l2.268 1.25a2 2 0 0 0 1.026.248l1.45-.044a.6.6 0 0 1 .6.453l.437 1.736a2 2 0 0 0 .722 1.098l1.673 1.285a1 1 0 0 1 .347.498L16.508 13a2 2 0 0 0 1.188 1.276l1.5.58a1 1 0 0 0 .87-.07l1.344-.796a.6.6 0 0 1 .804.183l.333.5a.6.6 0 0 1-.044.724l-1.592 1.848a1 1 0 0 1-.597.335l-.838.137a1 1 0 0 0-.82 1.18l.065.328a.8.8 0 0 1-.467.889l-1.278.553a2 2 0 0 0-.668.472l-.924.992a.6.6 0 0 1-.718.122l-.527-.276a.6.6 0 0 1-.205-.885l.803-1.103a2 2 0 0 0 .357-.849l.158-.949a2 2 0 0 0-.105-1.044l-.14-.363a1 1 0 0 0-.917-.642l-1.147-.019a1 1 0 0 1-.362-.074l-.644-.264a1 1 0 0 1-.489-.428l-.902-1.572a1 1 0 0 0-.702-.489l-1.389-.233a1 1 0 0 0-.921.332l-.603.695a1 1 0 0 1-.932.329l-3.71-.665a1 1 0 0 1-.673-.458l-.265-.428a1 1 0 0 1-.15-.531l.022-4.656a1 1 0 0 1 .236-.64Z\"/>";
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

/** Build a <CaOntario/> icon as a live SVGSVGElement (browser only). */
export function CaOntario(options: IconOptions = {}): SVGSVGElement {
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
