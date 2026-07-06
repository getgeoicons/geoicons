// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.715 9.891-5.04 3.616a.5.5 0 0 0 .087.863l2.608 1.162a.5.5 0 0 1 .263.637l-1.731 4.485a.5.5 0 0 0 .31.655l4.307 1.42a.5.5 0 0 0 .413-.046l5.436-3.24a.5.5 0 0 0 .037-.836L12.52 17.25a.5.5 0 0 1-.204-.463l.282-2.43a.5.5 0 0 1 .23-.366l5.98-3.745a.5.5 0 0 0 .226-.511l-.379-2.147a.5.5 0 0 1 .145-.446l2.887-2.785a.5.5 0 0 0 .024-.694l-1.77-1.966a.5.5 0 0 0-.796.071l-1.923 3.108a.5.5 0 0 1-.419.237l-2.428.03a.5.5 0 0 0-.49.434L13.628 7.5a.5.5 0 0 1-.782.343L10.428 6.15a.5.5 0 0 0-.727.172l-1.837 3.4a.5.5 0 0 1-.149.17Z\"/>";
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

/** Build a <Kp/> icon as a live SVGSVGElement (browser only). */
export function Kp(options: IconOptions = {}): SVGSVGElement {
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
