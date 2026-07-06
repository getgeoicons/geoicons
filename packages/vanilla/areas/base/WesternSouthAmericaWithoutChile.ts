// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m15.972 21.342-.466.905a.6.6 0 0 1-.828.248l-2.79-1.569a1 1 0 0 1-.384-.385L9.129 16.27a1 1 0 0 0-.363-.373l-1.235-.735a.6.6 0 0 1-.266-.336l-.194-.615a.6.6 0 0 1 .114-.566l.48-.57a.6.6 0 0 0 .116-.556l-.397-1.346a1 1 0 0 1 .201-.935L9.319 8.22a1 1 0 0 0 .237-.755l-.217-2.094a1 1 0 0 1 .193-.7l1.382-1.857a1 1 0 0 1 .353-.296l2.159-1.084a.75.75 0 0 1 .782 1.272l-1.174.869a.6.6 0 0 0-.151.8l.489.781a.6.6 0 0 0 .408.273l2.54.43a.6.6 0 0 1 .497.54l.16 1.83a.6.6 0 0 1-.515.647l-.724.1a.6.6 0 0 0-.517.595v2.626a1 1 0 0 1-.8.98l-.704.144a1 1 0 0 0-.676.499l-.337.614a1 1 0 0 0 .05 1.042l.447.66a1 1 0 0 0 .428.355l1.427.622a1 1 0 0 1 .428.354l.506.744a1 1 0 0 1 .172.6l-.08 2.11a1 1 0 0 1-.11.42Z\"/>";
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

/** Build a <WesternSouthAmericaWithoutChile/> icon as a live SVGSVGElement (browser only). */
export function WesternSouthAmericaWithoutChile(options: IconOptions = {}): SVGSVGElement {
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
