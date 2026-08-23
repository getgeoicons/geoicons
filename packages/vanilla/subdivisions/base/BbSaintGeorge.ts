// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.588 13.456a1 1 0 0 0-.134-.98L19.66 8.828a.6.6 0 0 0-.445-.234l-.853-.045a.6.6 0 0 1-.568-.57l-.073-1.516a.6.6 0 0 0-.139-.355L14.44 2.34a1 1 0 0 0-.705-.357l-2.818-.178a1 1 0 0 0-1.002.654l-.157.427a2 2 0 0 1-1.003 1.111l-2.162 1.05a3 3 0 0 1-1.225.301l-2.292.066a1 1 0 0 0-.626.244l-.875.758a1 1 0 0 0-.344.817l.256 4.156a5 5 0 0 0 .183 1.067l2.652 9.277a.6.6 0 0 0 .564.435l2.698.061a.6.6 0 0 0 .613-.585l.012-.475a.6.6 0 0 1 .608-.586l2.804.039c.311.004.622-.04.92-.132l1.72-.527c.307-.094.598-.237.86-.424l2.93-2.085a2 2 0 0 1 1.098-.37l1.356-.042a1 1 0 0 0 .897-.627z\"/>";
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

/** Build a <BbSaintGeorge/> icon as a live SVGSVGElement (browser only). */
export function BbSaintGeorge(options: IconOptions = {}): SVGSVGElement {
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
