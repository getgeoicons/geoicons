// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.053 22.224-1.338-2.409a1 1 0 0 1 .19-1.215l2.01-1.886a1 1 0 0 0 .314-.676l.22-4.134a1 1 0 0 1 .384-.736l1.022-.796a1 1 0 0 0 .309-.403l1.063-2.543a1 1 0 0 0 .077-.363l.076-3.33a1 1 0 0 1 .204-.582l.917-1.207a1 1 0 0 1 1.346-.231L17.68 4.89a1 1 0 0 1 .368 1.234l-.508 1.17a1 1 0 0 0 0 .798l1.433 3.283a1 1 0 0 1-.058.912l-.56.937a.954.954 0 0 0 .427 1.359c.485.22.697.793.471 1.275l-.062.133a1 1 0 0 1-.617.533l-1.549.468a1 1 0 0 0-.564.435l-.674 1.1a1 1 0 0 1-1.248.397l-1.414-.61a1 1 0 0 0-1.335.574l-.215.588a1 1 0 0 1-.836.65l-.89.093a1 1 0 0 0-.83.634l-.492 1.275a1 1 0 0 1-.979.64l-.666-.031a1 1 0 0 1-.83-.513Z\"/>";
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

/** Build a <GranChaco/> icon as a live SVGSVGElement (browser only). */
export function GranChaco(options: IconOptions = {}): SVGSVGElement {
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
