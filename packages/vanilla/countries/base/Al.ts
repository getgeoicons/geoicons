// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.347 4.388.157 2.356a.5.5 0 0 0 .196.365l.937.714a.5.5 0 0 1 .185.508L7.19 15.553a.5.5 0 0 0-.01.169l.267 2.253a.5.5 0 0 0 .236.368l2.28 1.393a.5.5 0 0 1 .226.311l.478 2.007a.5.5 0 0 0 .29.344l.636.274a.5.5 0 0 0 .538-.094l.905-.843a.5.5 0 0 0 .138-.51l-.23-.765a.5.5 0 0 1 .334-.622l1.17-.354a.5.5 0 0 0 .272-.203l1.976-2.988a.5.5 0 0 0 .055-.438l-.572-1.668a.5.5 0 0 0-.495-.337l-.87.038a.5.5 0 0 1-.509-.386l-.892-3.834a.5.5 0 0 1 .008-.257l.803-2.668a.5.5 0 0 0 .01-.248l-.35-1.647a.5.5 0 0 0-.237-.328l-1.242-.725a.5.5 0 0 1-.22-.269l-.43-1.247a.25.25 0 0 0-.336-.147l-.867.378a.5.5 0 0 1-.656-.252L9.415 1.2l-1.98 2.871a.5.5 0 0 0-.088.317Z\"/>";
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

/** Build a <Al/> icon as a live SVGSVGElement (browser only). */
export function Al(options: IconOptions = {}): SVGSVGElement {
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
