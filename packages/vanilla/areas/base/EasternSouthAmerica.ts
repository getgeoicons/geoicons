// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.752 22.758-1.462-.181a.6.6 0 0 1-.515-.712l.314-1.585a1 1 0 0 1 .293-.532l1.512-1.434a.6.6 0 0 0 .14-.668l-1.48-3.51a1 1 0 0 0-.195-.298l-2.968-3.144a.6.6 0 0 0-.565-.174l-2.314.507a1 1 0 0 1-.995-.353l-.754-.945a1 1 0 0 1 .292-1.496L4.08 7.66a1 1 0 0 0 .51-.845l.046-1.685a.6.6 0 0 1 .515-.578l2.32-.334a1 1 0 0 0 .73-.502L9.332 1.69a.6.6 0 0 1 .78-.25l3.6 1.696a1 1 0 0 1 .524.595l.377 1.158a1 1 0 0 0 .565.614l5.864 2.45a1 1 0 0 1 .557.587l.259.726a1 1 0 0 1 .01.641l-.106.33a1 1 0 0 1-.293.447l-1.7 1.492a1 1 0 0 0-.338.703l-.064 1.332a1 1 0 0 1-.144.47l-1.064 1.759a1 1 0 0 1-.691.468l-1.59.265a1 1 0 0 0-.784.669l-.602 1.797a1 1 0 0 1-.161.298l-2.032 2.597a.6.6 0 0 1-.547.225Z\"/>";
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

/** Build a <EasternSouthAmerica/> icon as a live SVGSVGElement (browser only). */
export function EasternSouthAmerica(options: IconOptions = {}): SVGSVGElement {
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
