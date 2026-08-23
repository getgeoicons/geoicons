// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.487 10.028a2 2 0 0 1 .112 1.326l-.418 1.598a1 1 0 0 1-.875.743l-5.354.493a.701.701 0 0 0-.279 1.31l4.206 2.364a2 2 0 0 0 1.042.256l3.058-.094a1 1 0 0 1 .94.583l.082.177a1 1 0 0 0 1.186.545l1.904-.549a1 1 0 0 1 .869.155l.916.673a2 2 0 0 0 1.198.389l4.14-.029a.763.763 0 0 0 .086-1.52l-1.131-.137a3 3 0 0 1-.982-.295l-.571-.286a2 2 0 0 1-1.082-1.483l-.1-.649a1.798 1.798 0 0 1 2.145-2.035l1.444.303a1 1 0 0 0 .872-.235l.506-.453a1 1 0 0 0 .321-.889l-.346-2.368a1 1 0 0 0-.456-.702l-.892-.563a1 1 0 0 1-.103-1.616l.782-.646a.956.956 0 0 0-.728-1.686l-6.072.76a1 1 0 0 1-.797-.252l-.922-.839a1 1 0 0 0-.954-.22l-1.457.427a2 2 0 0 1-1.029.026l-1.312-.314a.8.8 0 0 0-.944.52l-.454 1.336a1 1 0 0 0 .035.732z\"/>";
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

/** Build a <CuMatanzas/> icon as a live SVGSVGElement (browser only). */
export function CuMatanzas(options: IconOptions = {}): SVGSVGElement {
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
