// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M14.06 19.921c.34.173.71.28 1.089.314l.65.06a1 1 0 0 0 .81-.3l1.03-1.065a.55.55 0 0 1 .944.36l.044 1.128a1 1 0 0 0 .482.817l.74.447a1 1 0 0 0 1.128-.065l.566-.437a1 1 0 0 0 .357-1.042l-.218-.839a2 2 0 0 1 .078-1.241l.75-1.887a.8.8 0 0 0-.432-1.033l-.864-.365a3 3 0 0 0-.999-.232l-1.846-.104a1 1 0 0 1-.753-.412l-.702-.97a1 1 0 0 0-.692-.406l-2.275-.271a.8.8 0 0 1-.705-.818l.035-1.14a.8.8 0 0 0-.832-.824l-.697.029a.8.8 0 0 1-.83-.739l-.447-5.851a1 1 0 0 0-1.144-.913L8.6 2.23a1 1 0 0 0-.609.335l-.876 1.013a.8.8 0 0 0-.195.551l.038 1.095a.8.8 0 0 1-.276.632L4.363 7.87a2 2 0 0 1-.957.458l-1.45.26a.8.8 0 0 0-.652.897l.244 1.781a2 2 0 0 0 .55 1.125l1.113 1.141a.8.8 0 0 0 1.05.083l.693-.516a1 1 0 0 1 1.514.4l.078.18a1 1 0 0 1 .052.652l-.787 3.037a.6.6 0 0 0 .372.712l3.436 1.277a1 1 0 0 0 .747-.02l.94-.409a1 1 0 0 1 .852.026z\"/>";
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

/** Build a <MxSanLuisPotosi/> icon as a live SVGSVGElement (browser only). */
export function MxSanLuisPotosi(options: IconOptions = {}): SVGSVGElement {
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
