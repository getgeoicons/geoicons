// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.888 18.195a1 1 0 0 0 1.51-.52l.65-1.996a1 1 0 0 0-.091-.82l-.118-.199a1 1 0 0 0-1.54-.221l-.116.108a1 1 0 0 1-1.39-.029l-.78-.787a2 2 0 0 1-.576-1.26l-.066-.885a1 1 0 0 1 .797-1.054l1.038-.212c.32-.066.62-.209.872-.417l1.798-1.482a1 1 0 0 0 .356-.641l.11-.843a1 1 0 0 1 .402-.676l1.447-1.059a.6.6 0 0 0-.123-1.038L13.48 1.417a2 2 0 0 0-1.075-.131l-.132.02a1 1 0 0 0-.818 1.229l.457 1.849a.6.6 0 0 1-.62.743l-3.124-.2a1 1 0 0 0-.727.249l-1.77 1.567a1 1 0 0 0-.301.48L3.227 14.91a1 1 0 0 0 .725 1.24l3.367.826a1 1 0 0 1 .497 1.65l-1.272 1.379a1 1 0 0 0-.194 1.046l.44 1.107a1 1 0 0 0 .943.63l1.308-.018a1 1 0 0 0 .6-.21l1.175-.915a1 1 0 0 0 .34-1.09l-.423-1.345a1 1 0 0 1 .115-.845l1.06-1.629a1 1 0 0 1 1.397-.284z\"/>";
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

/** Build a <MxZacatecas/> icon as a live SVGSVGElement (browser only). */
export function MxZacatecas(options: IconOptions = {}): SVGSVGElement {
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
