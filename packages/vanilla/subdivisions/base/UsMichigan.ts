// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.42 16.118c1.01 2.565-.36 4.78-1.206 5.863a.502.502 0 0 0 .392.819h8.16a.6.6 0 0 0 .507-.28l2.216-3.525a1 1 0 0 0 .137-.709l-.518-2.883a.942.942 0 0 0-1.663-.42l-.612.771a.817.817 0 1 1-1.253-1.047l1.194-1.359a1 1 0 0 0 .248-.634l.04-1.566a1 1 0 0 0-.614-.948l-2.343-.977a1 1 0 0 0-1.06.184l-2.144 1.96a3 3 0 0 0-.886 1.485l-.65 2.593c-.056.223-.03.458.055.673ZM5.575 3.36 2.816 5.176a.296.296 0 0 0 .07.528l3.036.997A3 3 0 0 1 7.67 8.209l.608 1.214a.6.6 0 0 0 1.022.085l.848-1.166a2 2 0 0 1 1.228-.785l2.577-.512a3 3 0 0 1 1.025-.025l3.086.458a.59.59 0 0 0 .4-1.083L15.328 4.43a1 1 0 0 0-.803-.115l-3.375.955a2 2 0 0 1-1.481-.157l-1.233-.654a1 1 0 0 1-.112-1.697l.386-.276a.6.6 0 0 0-.169-1.06l-.147-.047a1 1 0 0 0-.997.237L5.722 3.242a1 1 0 0 1-.147.119Z\"/>";
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

/** Build a <UsMichigan/> icon as a live SVGSVGElement (browser only). */
export function UsMichigan(options: IconOptions = {}): SVGSVGElement {
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
