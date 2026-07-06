// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.02 20.028-1.885-.573a.25.25 0 0 1-.116-.403l.883-1.02a.5.5 0 0 0 .122-.327v-.509a.5.5 0 0 0-.433-.495l-.56-.076a.5.5 0 0 1-.43-.447l-.39-3.99a.5.5 0 0 1 .027-.219l.786-2.184a.5.5 0 0 1 .675-.287l1.089.488a.5.5 0 0 0 .467-.031L6.51 8.559a.5.5 0 0 0 .216-.28l.417-1.375a.5.5 0 0 1 .255-.302l1.133-.566a.5.5 0 0 1 .378-.029l2.914.944a.5.5 0 0 0 .374-.027l2.263-1.11a.5.5 0 0 0 .178-.147l1.036-1.365a.5.5 0 0 1 .663-.122l.52.325a.5.5 0 0 1 .229.505l-.233 1.418a.25.25 0 0 0 .338.273l2.233-.873a.5.5 0 0 1 .22-.032l3.156.242-1.531 1.267a.5.5 0 0 1-.237.107l-2.254.377a.5.5 0 0 0-.105.03l-1.65.668a.5.5 0 0 0-.312.474l.056 2.506a.5.5 0 0 1-.387.498l-1.207.279a.5.5 0 0 0-.364.338l-.947 3.03a.5.5 0 0 1-.308.321l-3.46 1.242a.5.5 0 0 0-.331.444L9.7 18.784a.5.5 0 0 1-.422.467l-5.035.793a.5.5 0 0 1-.223-.016Z\"/>";
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

/** Build a <Af/> icon as a live SVGSVGElement (browser only). */
export function Af(options: IconOptions = {}): SVGSVGElement {
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
