// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.765 14.985-.305 1.242a.5.5 0 0 1-.39.371l-2.966.578a.5.5 0 0 1-.422-.112l-1.014-.873a.5.5 0 0 0-.326-.12H1.764a.5.5 0 0 1-.496-.56l.098-.812a.5.5 0 0 1 .49-.44l4.066-.055a.5.5 0 0 0 .198-.044l2.956-1.327-2.328-1.507a.5.5 0 0 0-.602.044l-.486.427a.5.5 0 0 1-.56.068l-1.908-.994 1.289-1.13a.5.5 0 0 0 .143-.213l.45-1.306a.5.5 0 0 1 .433-.336l1.519-.119a.5.5 0 0 1 .232.038l2.241.938.22-1.21a.5.5 0 0 1 .343-.388l.977-.305a.5.5 0 0 1 .38.034l1.627.851a.5.5 0 0 0 .235.058l7.15-.044a.5.5 0 0 1 .313.108l1.713 1.356a.25.25 0 0 1-.066.429l-2.566.99a.5.5 0 0 0-.252.214l-.75 1.283a.5.5 0 0 1-.409.247l-1.586.07a.5.5 0 0 0-.337.152l-1.482 1.524a.5.5 0 0 1-.718-.002l-.466-.483a.5.5 0 0 0-.588-.099l-2.213 1.13a.5.5 0 0 0-.259.327Z\"/>";
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

/** Build a <Kg/> icon as a live SVGSVGElement (browser only). */
export function Kg(options: IconOptions = {}): SVGSVGElement {
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
