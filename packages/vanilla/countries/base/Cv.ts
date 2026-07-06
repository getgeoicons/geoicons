// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.302 6.593-1.684.959a.5.5 0 0 0-.196.665l.529 1.016a.5.5 0 0 0 .685.207l1.91-1.056a.5.5 0 0 0 .145-.755l-.756-.919a.5.5 0 0 0-.633-.117Zm2.07 3.143-.916.477a.5.5 0 0 0-.209.683l.242.444a.5.5 0 0 0 .676.202l1.03-.553a.5.5 0 0 0 .123-.788l-.355-.368a.5.5 0 0 0-.591-.097Zm4.141 3.138-.436-.61a.5.5 0 0 1 .365-.788l2.852-.238a.5.5 0 0 1 .523.36l.084.294a.5.5 0 0 1-.373.626l-2.5.554a.5.5 0 0 1-.515-.198Zm9.966-1.226-.196-1.614a.5.5 0 0 1 .367-.543l.573-.153a.5.5 0 0 1 .627.43l.185 1.74a.5.5 0 0 1-.473.552l-.562.027a.5.5 0 0 1-.521-.44Zm1.331 3.256-.973.889a.5.5 0 0 0 .01.747l.93.803a.5.5 0 0 0 .639.012l.953-.762a.5.5 0 0 0 .045-.74l-.909-.93a.5.5 0 0 0-.694-.02Z\"/>";
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

/** Build a <Cv/> icon as a live SVGSVGElement (browser only). */
export function Cv(options: IconOptions = {}): SVGSVGElement {
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
