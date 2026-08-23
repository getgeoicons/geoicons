// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.37 12.619a1 1 0 0 1 .69-.213l4.992.36a1 1 0 0 1 .638.294l3.396 3.424a1 1 0 0 0 1.354.06l.56-.47a5 5 0 0 0 1.124-1.352l.197-.348a1 1 0 0 0-.347-1.347l-3.011-1.842a3 3 0 0 0-.936-.374l-4.799-1.032a1 1 0 0 0-.866.224l-.098.084a1 1 0 0 1-1.093.146L7.623 8.509a1 1 0 0 0-.649-.078L5.88 8.67a1 1 0 0 1-.853-.21l-1.002-.836a.6.6 0 0 0-.984.425l-.104 1.748a1 1 0 0 1-.296.652l-.944.932a.92.92 0 0 0 .587 1.572l.14.009a1 1 0 0 0 .393-.054l1.095-.383a1 1 0 0 1 .967.173L6.4 13.956a1 1 0 0 0 1.257.014z\"/>";
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

/** Build a <BsMayaguana/> icon as a live SVGSVGElement (browser only). */
export function BsMayaguana(options: IconOptions = {}): SVGSVGElement {
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
