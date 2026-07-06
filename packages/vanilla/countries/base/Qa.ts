// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.395 1.355-2.256 1.32a.5.5 0 0 0-.202.223l-3.105 6.75a.5.5 0 0 0-.046.213l.052 5.724a.5.5 0 0 0 .101.297l.875 1.158a.5.5 0 0 1 .085.427l-.434 1.664a.5.5 0 0 0 .036.348l1.106 2.227c.05.1.13.18.23.229l1.685.81a.5.5 0 0 0 .24.05l2.5-.112a.5.5 0 0 0 .351-.166l.56-.626a.5.5 0 0 0 .092-.15l1.378-3.506a.5.5 0 0 1 .043-.084l1.444-2.283a.5.5 0 0 0 .076-.295l-.14-2.578a.5.5 0 0 0-.239-.4l-.753-.46a.5.5 0 0 1-.23-.326l-.455-2.226a.5.5 0 0 1 .05-.336l1.189-2.218a.5.5 0 0 0 .059-.25l-.057-1.982a.5.5 0 0 0-.402-.476l-1.302-.26a.5.5 0 0 1-.382-.349l-.421-1.43a.5.5 0 0 0-.21-.279l-.995-.638a.5.5 0 0 0-.523-.01Z\"/>";
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

/** Build a <Qa/> icon as a live SVGSVGElement (browser only). */
export function Qa(options: IconOptions = {}): SVGSVGElement {
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
