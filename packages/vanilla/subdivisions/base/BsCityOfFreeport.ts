// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.651 14.369-.365 2.554a.6.6 0 0 0 .52.68l4.151.523a2 2 0 0 0 .617-.018l2.883-.538a2 2 0 0 0 .79-.335l3.18-2.258q.28-.197.596-.328l1.972-.81q.387-.16.716-.418l2.153-1.696a1 1 0 0 1 .475-.204l1.454-.21a2 2 0 0 0 .671-.224l.805-.44a.6.6 0 0 0 .237-.818l-1.419-2.547a1 1 0 0 0-.958-.51l-2.059.174a1 1 0 0 1-.8-.297l-.46-.473a.6.6 0 0 0-.742-.093l-2.695 1.642a1 1 0 0 1-.557.145l-1.29-.048a2 2 0 0 0-.873.166l-5.307 2.317a.6.6 0 0 0-.36.513l-.068 1.108a.6.6 0 0 1-.332.5l-2.39 1.189a1 1 0 0 0-.545.754Z\"/>";
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

/** Build a <BsCityOfFreeport/> icon as a live SVGSVGElement (browser only). */
export function BsCityOfFreeport(options: IconOptions = {}): SVGSVGElement {
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
