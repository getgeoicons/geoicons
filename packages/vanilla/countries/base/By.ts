// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.56 18.859-2.55 1.32a.5.5 0 0 1-.73-.461l.035-.99a.5.5 0 0 0-.124-.347l-.654-.747a.5.5 0 0 1 .056-.714l1.282-1.067a.5.5 0 0 0 .162-.518l-.895-3.239a.5.5 0 0 1 .374-.621l3.975-.874a.5.5 0 0 0 .392-.459l.116-1.965a.5.5 0 0 1 .282-.42l1.389-.673a.5.5 0 0 0 .281-.424l.087-1.65a.5.5 0 0 1 .424-.468l1.432-.217a.5.5 0 0 0 .33-.202l.735-1.02a.5.5 0 0 1 .644-.148l2.384 1.288a.5.5 0 0 0 .32.054l1.653-.278a.5.5 0 0 1 .378.09l1.19.87a.5.5 0 0 1 .199.485l-.452 2.73a.5.5 0 0 0 .128.423l4.083 4.377a.5.5 0 0 1 .004.677l-.758.835a.5.5 0 0 1-.421.16l-1.376-.14a.5.5 0 0 0-.522.664l.914 2.577a.5.5 0 0 1-.347.651l-1.553.398a.5.5 0 0 0-.372.424l-.181 1.476a.5.5 0 0 1-.597.429L5.89 18.813a.5.5 0 0 0-.33.046Z\"/>";
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

/** Build a <By/> icon as a live SVGSVGElement (browser only). */
export function By(options: IconOptions = {}): SVGSVGElement {
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
