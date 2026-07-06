// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.583 22.654 8.136 21.6a.5.5 0 0 1-.205-.394l-.073-3.638a.5.5 0 0 1 .113-.326l3.667-4.49a.5.5 0 0 0-.074-.706l-.834-.669a.5.5 0 0 1-.184-.338l-.438-4.185a.5.5 0 0 0-.187-.34L7.219 4.373a.5.5 0 0 1-.045-.744l.673-.68a.5.5 0 0 1 .787.099l.72 1.227a.5.5 0 0 0 .272.222l1.423.474a.5.5 0 0 0 .653-.399l.353-2.325a.5.5 0 0 1 .28-.376l1.124-.535a.5.5 0 0 1 .528.061l1 .802a.5.5 0 0 1 .154.567l-.777 2.05a.5.5 0 0 0 .073.484l1.22 1.57a.5.5 0 0 1 .026.576l-.69 1.081a.5.5 0 0 0-.033.476l.844 1.857a.5.5 0 0 1 .044.223l-.137 4.188a.5.5 0 0 0 .122.344l1.116 1.288a.5.5 0 0 1 .015.636L13.88 21.47a.5.5 0 0 1-.249.17l-3.609 1.088a.5.5 0 0 1-.439-.074Z\"/>";
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

/** Build a <Fi/> icon as a live SVGSVGElement (browser only). */
export function Fi(options: IconOptions = {}): SVGSVGElement {
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
