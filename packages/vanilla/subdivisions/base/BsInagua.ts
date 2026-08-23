// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.337 19.967a4 4 0 0 1 1.112-.222l2.64-.145a1 1 0 0 0 .812-.499l3.125-5.422a1 1 0 0 0 .126-.379l.475-3.918a.6.6 0 0 0-.8-.636l-1.11.403a.6.6 0 0 0-.34.314l-1.307 2.855a3 3 0 0 1-1.779 1.597l-.924.308a2.946 2.946 0 0 1-3.52-1.39l-.344-.633a.6.6 0 0 0-.968-.121l-.504.545a2 2 0 0 1-1.146.616l-1.203.197a1 1 0 0 0-.687.458l-.24.385a2 2 0 0 1-1.225.885l-1.069.26a.6.6 0 0 0-.457.615l.035.648a1 1 0 0 1-.63.985l-.609.24a.6.6 0 0 0-.32.82l1.09 2.251a.6.6 0 0 0 .734.307l1.65-.564a3 3 0 0 1 1.378-.134l2.568.352a2 2 0 0 0 .937-.096z\"/>";
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

/** Build a <BsInagua/> icon as a live SVGSVGElement (browser only). */
export function BsInagua(options: IconOptions = {}): SVGSVGElement {
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
