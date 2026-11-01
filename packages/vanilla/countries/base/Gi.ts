// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.861 18.62v-1.61a1 1 0 0 1 .074-.377l.59-1.452a1 1 0 0 0 .003-.748L15.955 13a1 1 0 0 1-.066-.484l.364-3.22a.6.6 0 0 1 .226-.406l.546-.427a.6.6 0 0 0 .226-.402l.213-1.804a.6.6 0 0 0-.14-.46l-.455-.53a.6.6 0 0 1-.132-.512l.392-1.909a.6.6 0 0 0-.326-.66L15.187 1.4a2 2 0 0 0-.875-.201h-2.097a.3.3 0 0 0-.3.3v.965a.3.3 0 0 1-.3.3H9.319a2 2 0 0 0-.884.206l-1.595.786a.6.6 0 0 0-.334.538V6.03a.6.6 0 0 0 .503.593l.984.16a1.88 1.88 0 0 1 1.277.841l.1.158a2 2 0 0 1 .244.547l1.496 5.456a.3.3 0 0 1-.12.327l-.788.54a.3.3 0 0 0-.092.394l2.457 4.38a1 1 0 0 1 .119.626l-.115.832a1.7 1.7 0 0 0 .034.632l.017.067a1.45 1.45 0 0 0 .996 1.038l.327.096a.783.783 0 0 0 .976-.543l.905-3.29q.035-.131.035-.265Z\"/>";
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

/** Build a <Gi/> icon as a live SVGSVGElement (browser only). */
export function Gi(options: IconOptions = {}): SVGSVGElement {
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
