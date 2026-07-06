// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.002 16.513-.6-.826a1 1 0 0 1-.189-.515l-.159-2.164a1 1 0 0 0-.515-.802l-.23-.127a1 1 0 0 1-.468-1.183l.157-.487a1 1 0 0 0-.15-.907l-.398-.53a1 1 0 0 0-.634-.388L3.181 8.31a1 1 0 0 1-.31-.108l-1.106-.6a1 1 0 0 1-.52-.948l.043-.628a1 1 0 0 1 .59-.844l.838-.374a1 1 0 0 1 .622-.063l.466.102a1 1 0 0 1 .71.596l.33.8a1 1 0 0 0 .115.206l.411.567a.75.75 0 0 0 1.3-.154l.049-.117a.75.75 0 0 1 1-.397l.156.07a.75.75 0 0 1 .422.859l-.04.17a1 1 0 0 0 .832 1.222l.675.096a.98.98 0 0 0 1.096-.781.733.733 0 0 1 .829-.585l2.166.325a1 1 0 0 1 .576.3l.615.644a1 1 0 0 0 .522.29l.984.203a1 1 0 0 1 .724.602l.916 2.251a1 1 0 0 0 .347.44l1.927 1.366a1 1 0 0 0 .222.12l2.112.805-3.897 1.585a.86.86 0 0 1-1-.267l-.064-.082a.768.768 0 0 0-1.287.826l.06.115a.94.94 0 0 1-.138 1.068l-.667.737a1 1 0 0 1-.556.311l-1.216.23a1 1 0 0 1-.61-.077l-5.038-2.36a1 1 0 0 1-.385-.317Z\"/>";
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

/** Build a <Hm/> icon as a live SVGSVGElement (browser only). */
export function Hm(options: IconOptions = {}): SVGSVGElement {
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
