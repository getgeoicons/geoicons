// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.317 17.743-.67 1.147a.5.5 0 0 1-.514.241l-.915-.154-.579 1.467 1.29-.04a.5.5 0 0 1 .315.1l2.176 1.631a.5.5 0 0 0 .38.094l1.445-.235a.5.5 0 0 1 .214.012l2.712.75a.5.5 0 0 0 .307-.012l5.08-1.885a.5.5 0 0 0 .19-.127l1.38-1.471a.5.5 0 0 0 .018-.664l-.715-.851a.5.5 0 0 1-.104-.436l.131-.558a.5.5 0 0 1 .38-.374l1.672-.369a.5.5 0 0 0 .369-.336l1.397-4.392a.5.5 0 0 0-.095-.475l-1.886-2.219a.5.5 0 0 1-.055-.57l.378-.669a.5.5 0 0 0 .021-.448l-.223-.503a.5.5 0 0 0-.343-.284l-1.068-.251a.5.5 0 0 1-.31-.224l-.748-1.21a.5.5 0 0 1-.074-.274l.033-1.468a.5.5 0 0 0-.305-.473l-2.189-.923a.5.5 0 0 0-.42.015l-1.828.928a.5.5 0 0 0-.188.167l-1.13 1.68a.5.5 0 0 0-.062.128l-1.23 3.888a.5.5 0 0 1-.265.301L6.712 9.608a.5.5 0 0 0-.237.233l-1.406 2.88a.5.5 0 0 0-.041.319l.306 1.505a.5.5 0 0 1-.023.278l-.493 1.286a.5.5 0 0 0 .051.456l.432.648a.5.5 0 0 1 .016.53Z\"/>";
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

/** Build a <Mu/> icon as a live SVGSVGElement (browser only). */
export function Mu(options: IconOptions = {}): SVGSVGElement {
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
