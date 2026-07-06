// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.8 19.49.715-1.67a1 1 0 0 1 1.262-.546l1.415.517a1 1 0 0 0 1.27-.566l.09-.22a1 1 0 0 0-.102-.937l-.748-1.097a.6.6 0 0 1 .47-.937l1.058-.046a1 1 0 0 0 .682-.311l1.169-1.233a1 1 0 0 1 .565-.3l4.946-.803a1 1 0 0 0 .835-.892l.125-1.296a.904.904 0 0 1 1.737-.252l.224.554a1 1 0 0 1-.005.763l-.531 1.264a1 1 0 0 0-.078.356l-.075 2.368a.6.6 0 0 0 .717.607l.85-.17a1 1 0 0 1 .99.374l.742.97a1 1 0 0 1 .16.905l-.426 1.372a1 1 0 0 1-.43.554l-.309.19a1 1 0 0 0-.37 1.299l.21.419a.83.83 0 0 1-1.48.75l-.571-1.112a1 1 0 0 1-.019-.876l.175-.38a1 1 0 0 0-.18-1.104l-.836-.889a1 1 0 0 0-1.1-.243l-1.195.479a.6.6 0 0 0-.163 1.016l1.237 1.038a1 1 0 0 1 .26 1.197l-.751 1.57a.826.826 0 1 1-1.402-.858l.092-.12a.93.93 0 0 0-.194-1.318l-1.864-1.346a1 1 0 0 0-.781-.17l-1.371.275a1 1 0 0 0-.638.429l-1.448 2.19a1 1 0 0 1-.634.429l-2.167.443a1 1 0 0 1-.98-.355l-1.01-1.262a1 1 0 0 1-.139-1.019Z\"/><path stroke-linejoin=\"round\" d=\"m14.789 1.587 1.33-.242a1 1 0 0 1 1.105.608l1.033 2.54a1 1 0 0 1 .017.708l-.267.761a1 1 0 0 1-.68.634l-.068.019a1.006 1.006 0 0 1-1.24-1.205l.227-.943a.734.734 0 0 0-1.397-.441l-.534 1.349a1 1 0 0 0 .024.792l.45.96a1 1 0 0 1 .074.628l-.332 1.593a.825.825 0 0 1-1.452.347l-.174-.217a1 1 0 0 1-.212-.51l-.14-1.219a1 1 0 0 1-.006-.147l.1-2.967a1 1 0 0 1 .153-.5l1.322-2.097a1 1 0 0 1 .667-.45Zm-8.975 10.43-.118.016a1 1 0 0 1-1.13-1.09l.02-.2a1 1 0 0 1 .81-.884l.06-.011a1 1 0 0 1 1.164.787l.04.195a1 1 0 0 1-.846 1.187Z\"/>";
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

/** Build a <EuropeanUnionEu/> icon as a live SVGSVGElement (browser only). */
export function EuropeanUnionEu(options: IconOptions = {}): SVGSVGElement {
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
