// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.313 8.89c.055.332.111.713.153 1.041.058.44.369.83.795.956l4.003 1.172a1 1 0 0 1 .354.189l3.3 2.72a1 1 0 0 0 .539.223l2.786.272a1 1 0 0 1 .83.62l.354.876a1 1 0 0 0 .625.579l3.535 1.122a.6.6 0 0 0 .777-.65l-.097-.742a1 1 0 0 1 .344-.891l.336-.286a1 1 0 0 0 .33-.975l-.175-.801a1 1 0 0 0-.477-.654l-.208-.12a1 1 0 0 1-.457-1.157l.617-2.022q.052-.172.162-.316l2.747-3.59a.6.6 0 0 0-.044-.781l-.241-.251a.6.6 0 0 0-.776-.076l-2.229 1.555a1 1 0 0 1-.956.103l-.646-.268a1 1 0 0 0-.876.053l-1.77 1a1 1 0 0 1-.622.121l-2.258-.296a1 1 0 0 0-.56.088l-1.039.494a1 1 0 0 1-.986-.073l-2.06-1.381a1 1 0 0 0-1.15.025l-.66.486a1 1 0 0 1-1.291-.09l-.458-.446a.6.6 0 0 0-.811-.024L1.656 7.904c-.28.242-.405.62-.343.986Z\"/>";
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

/** Build a <SicilyRegion/> icon as a live SVGSVGElement (browser only). */
export function SicilyRegion(options: IconOptions = {}): SVGSVGElement {
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
