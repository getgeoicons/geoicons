// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.283 17.706.734.407a1 1 0 0 0 .827.067l6.308-2.286a1 1 0 0 1 1.01.198l1.439 1.297a2 2 0 0 0 .748.426l1.04.322a1 1 0 0 1 .604.52l.548 1.137a1 1 0 0 0 .636.53l1.082.297a2 2 0 0 0 1.233-.057l1.902-.716a1 1 0 0 0 .589-.599l1.646-4.592c.112-.312.145-.648.095-.977l-.214-1.396a2 2 0 0 0-.496-1.042l-2.601-2.867a3 3 0 0 1-.588-.962L17.426 3.68a.699.699 0 0 0-1.352.2l-.191 2.863a.6.6 0 0 1-.233.435l-.036.028a.6.6 0 0 1-.623.066l-1.674-.794a.6.6 0 0 1-.206-.923l.443-.539a.6.6 0 0 0-.367-.973l-1.324-.215a1 1 0 0 0-.984.419l-.764 1.108a.6.6 0 0 1-.695.225l-.882-.314a1 1 0 0 0-1.138.346L5.751 7.83a2 2 0 0 1-1.035.724l-2.57.764a1 1 0 0 0-.708.847l-.188 1.666a2 2 0 0 0 .095.869l.782 2.295a1 1 0 0 1-.003.653l-.299.851a1 1 0 0 0 .458 1.206Z\"/>";
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

/** Build a <AuMainland/> icon as a live SVGSVGElement (browser only). */
export function AuMainland(options: IconOptions = {}): SVGSVGElement {
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
