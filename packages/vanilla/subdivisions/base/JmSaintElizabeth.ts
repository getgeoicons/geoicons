// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.194 1.219a1 1 0 0 0-.404.046L5.173 3.109a1 1 0 0 0-.477.335L2.755 5.93a.6.6 0 0 0 .045.79l.57.58a.6.6 0 0 1 .128.646L2.02 11.594a1 1 0 0 0-.022.692l.153.459a1 1 0 0 0 1.07.676l2.043-.25a1 1 0 0 1 .562.095l1.246.61a1 1 0 0 1 .56.876l.063 2.72a1 1 0 0 0 .506.846l1.163.66a1 1 0 0 1 .477.625l.166.663a1 1 0 0 0 .344.535l2.191 1.763a1 1 0 0 0 .672.22l7.781-.347a1 1 0 0 0 .942-1.16l-1.147-7.026-1.94-6.925a1 1 0 0 1-.037-.226l-.201-4.679a.6.6 0 0 0-.545-.571z\"/>";
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

/** Build a <JmSaintElizabeth/> icon as a live SVGSVGElement (browser only). */
export function JmSaintElizabeth(options: IconOptions = {}): SVGSVGElement {
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
