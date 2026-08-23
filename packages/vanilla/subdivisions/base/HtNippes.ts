// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.098 10.925a.6.6 0 0 0-.459-.647L18.205 9.7a3 3 0 0 0-.879-.075l-2.376.148a4 4 0 0 1-.857-.039L9.95 9.098a3 3 0 0 0-.977.01l-3.8.67a.742.742 0 0 1-.279-1.456l2.03-.421a.841.841 0 0 0-.297-1.655l-2.778.422a2 2 0 0 0-.849.34l-.136.096a2 2 0 0 0-.797 1.176l-.718 3.04a.6.6 0 0 0 .493.732l1.444.22a1 1 0 0 0 .68-.14l.477-.297a1 1 0 0 1 .766-.123l1.59.388a1 1 0 0 1 .743 1.173l-.06.294a.6.6 0 0 0 .617.72l4.07-.203a1 1 0 0 0 .634-.268l.441-.413a1 1 0 0 1 .775-.265l4.787.44a1 1 0 0 1 .776.499l1.983 3.46a.6.6 0 0 0 .494.302l.061.003a.6.6 0 0 0 .627-.59l.045-2.716a1 1 0 0 0-.31-.74l-1.178-1.122a1 1 0 0 1-.305-.83z\"/>";
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

/** Build a <HtNippes/> icon as a live SVGSVGElement (browser only). */
export function HtNippes(options: IconOptions = {}): SVGSVGElement {
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
