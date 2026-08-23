// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.897 18.494a1 1 0 0 0-.183.592l.014.817a1 1 0 0 0 .64.917l1.737.67a3 3 0 0 0 1.107.201l1.31-.011a3 3 0 0 1 1.43.348l1.275.675a.597.597 0 0 0 .876-.494l.144-2.565-.25-7.726a.6.6 0 0 1 .395-.583l.39-.142a.6.6 0 0 0 .347-.325l.702-1.617a1 1 0 0 0-.652-1.363l-2.963-.814a10 10 0 0 1-1.58-.583 2.97 2.97 0 0 1-1.166-.977l-.232-.328a6 6 0 0 1-.995-2.362l-.116-.62a1 1 0 0 0-.563-.725l-.07-.033a.988.988 0 0 0-1.371 1.147l.334 1.284.411 1.18a6 6 0 0 0 .911 1.687l.334.434a3 3 0 0 0 1.356.991l1.091.396a.6.6 0 0 1 .396.574l-.02 1.159a.6.6 0 0 1-.224.458l-3.246 2.6a1 1 0 0 0-.36.957l.28 1.552a1 1 0 0 1-.167.754z\"/>";
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

/** Build a <MxTamaulipas/> icon as a live SVGSVGElement (browser only). */
export function MxTamaulipas(options: IconOptions = {}): SVGSVGElement {
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
