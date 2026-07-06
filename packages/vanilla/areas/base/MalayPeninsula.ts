// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.555 3.245.49-1.614a.6.6 0 0 1 .581-.425l.965.011a.6.6 0 0 1 .552.817l-.58 1.5a1 1 0 0 0-.067.35l-.018 1.703a.6.6 0 0 0 .354.554l.531.238a.6.6 0 0 1 .327.366l1.078 3.407a1 1 0 0 0 .658.654l1.02.315a1 1 0 0 1 .44.278l2.506 2.722c.165.179.284.396.346.631l.352 1.328q.045.171.03.345l-.187 2.095a1 1 0 0 0 .234.736l.527.62q.075.087.127.19l.757 1.467a.6.6 0 0 1-.359.849l-1.06.322a.6.6 0 0 1-.563-.116l-3.509-2.983a1 1 0 0 1-.273-.372l-1.771-4.193a1 1 0 0 1-.07-.52l.175-1.319a1 1 0 0 0-.167-.699L7.593 9.034a1 1 0 0 0-.392-.335l-.653-.312a1 1 0 0 1-.53-1.175l.52-1.834a1 1 0 0 0 .037-.315l-.062-1.486a1 1 0 0 1 .042-.332Z\"/>";
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

/** Build a <MalayPeninsula/> icon as a live SVGSVGElement (browser only). */
export function MalayPeninsula(options: IconOptions = {}): SVGSVGElement {
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
