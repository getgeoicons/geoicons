// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.39 4.045-.057-.726a1 1 0 0 1 .12-.562l.152-.275a1 1 0 0 1 .314-.345l.56-.381a.6.6 0 0 1 .934.426l.031.264c.046.388.34.7.725.77a.89.89 0 0 1 .698.632l.073.262a1 1 0 0 1-.065.712l-.643 1.307a1 1 0 0 1-.513.482l-.14.058a1 1 0 0 0-.613.998l.002.029a1 1 0 0 0 .783.901l.152.034a1 1 0 0 1 .782.898l.056.718a1 1 0 0 0 .09.341l.676 1.465a1 1 0 0 1 .079.584l-.481 2.874a1 1 0 0 0-.014.153l-.049 4.133a.6.6 0 0 0 .284.518l.866.535-.022 2.088-.906-.18a1 1 0 0 1-.208-.066l-.577-.255a1 1 0 0 1-.43-.363l-.45-.677a1 1 0 0 1-.162-.474l-.108-1.377-.032-2.645.328-5.022a1 1 0 0 0-.498-.931l-.92-.53a1 1 0 0 1-.34-.322L9.363 7.78a1 1 0 0 1-.16-.596l.048-.95a1 1 0 0 1 .208-.561l.725-.937a1 1 0 0 0 .206-.691Z\"/>";
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

/** Build a <WesternSouthAmerica/> icon as a live SVGSVGElement (browser only). */
export function WesternSouthAmerica(options: IconOptions = {}): SVGSVGElement {
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
