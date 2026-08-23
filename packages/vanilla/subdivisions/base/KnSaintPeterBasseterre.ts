// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.604 9.53-1.002-.39a.6.6 0 0 1-.381-.588l.1-2.049a.6.6 0 0 1 .248-.456L3.357 4.75a1 1 0 0 1 .974-.112l.722.303a3 3 0 0 0 1.408.224l.933-.077a3 3 0 0 1 .912.064l2.823.64a1 1 0 0 0 .63-.062l3.6-1.614a.6.6 0 0 1 .808.34l1.197 3.233a5 5 0 0 0 .992 1.631l1.758 1.931a.6.6 0 0 1 .123.603l-.198.564a2 2 0 0 0 .175 1.696l.031.051a2 2 0 0 0 .974.825l.693.275a1 1 0 0 1 .617.761l.128.752a7 7 0 0 1 .083 1.677l-.08 1.126a.6.6 0 0 1-.607.557l-1.836-.025a.6.6 0 0 1-.56-.406L19.416 19a2 2 0 0 0-.894-1.085l-.14-.08a2 2 0 0 0-1.18-.259l-1.18.108a.6.6 0 0 1-.584-.313l-1.341-2.503a.6.6 0 0 0-.549-.316l-2.414.08a.6.6 0 0 1-.62-.587l-.013-.613a.6.6 0 0 0-.572-.587l-3.475-.164a3 3 0 0 1-1.027-.234l-1.823-.77a1 1 0 0 1-.61-.91l-.008-.684a.6.6 0 0 0-.381-.551Z\"/>";
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

/** Build a <KnSaintPeterBasseterre/> icon as a live SVGSVGElement (browser only). */
export function KnSaintPeterBasseterre(options: IconOptions = {}): SVGSVGElement {
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
