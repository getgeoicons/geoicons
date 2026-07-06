// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.21 5.432.04-1.902a.5.5 0 0 1 .327-.458l.714-.264a.5.5 0 0 1 .113-.027l1.56-.188a.5.5 0 0 1 .233.027l.859.318a.5.5 0 0 1 .112.059l1.36.947a.5.5 0 0 0 .21.084l1.198.184a.5.5 0 0 1 .297.162l1.02 1.142a.5.5 0 0 1-.16.786l-.3.142a.5.5 0 0 1-.223.047l-.881-.015a.5.5 0 0 0-.21.043l-1.706.752a.5.5 0 0 1-.295.034L3.45 6.919a.5.5 0 0 1-.23-.11l-.788-.666a.5.5 0 0 0-.24-.112l-.565-.096a.5.5 0 0 1-.417-.503ZM21.7 20.809l-.63.352a1.5 1.5 0 0 1-.997.166l-4.308-.778a.5.5 0 0 1-.127-.04l-3.776-1.804a.5.5 0 0 1-.142-.1l-2.156-2.197a1.5 1.5 0 0 1-.423-1.186l.301-3.341a.5.5 0 0 0-.07-.303l-.854-1.418a.5.5 0 0 1 .143-.67l1.99-1.38a.5.5 0 0 1 .643.061l.207.212a.5.5 0 0 1 .046.645l-.877 1.199 3.712.91c.181.044.353.122.505.23l1.425 1a.5.5 0 0 0 .267.09l.864.035a.5.5 0 0 1 .37.187l1.737 2.166a.5.5 0 0 0 .16.131l1.78.921c.213.11.397.27.535.465l.485.683a1.5 1.5 0 0 1 .275.911l-.027.927a1.5 1.5 0 0 1-.124.556l-.289.66a1.5 1.5 0 0 1-.644.71Z\"/>";
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

/** Build a <Mt/> icon as a live SVGSVGElement (browser only). */
export function Mt(options: IconOptions = {}): SVGSVGElement {
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
