// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.857 2.272a.61.61 0 0 0-.771 0c-4.5 3.698-8.062 5.029-14.884 6.251-.202.037-.39.134-.536.279l-.787.787a1 1 0 0 0-.27.922l.619 2.819a1 1 0 0 1-.495 1.09l-1.921 1.058a1 1 0 0 0-.506 1.027l.29 1.902a1 1 0 0 0 .457.696l.867.544a.6.6 0 0 1 .28.518l-.019 1.198a.6.6 0 0 0 .669.606l3.366-.39a1 1 0 0 0 .514-.216l3.455-2.796a1 1 0 0 0 .146-.146l3.202-3.936a.6.6 0 0 1 .443-.22l1.876-.07a1 1 0 0 0 .922-.717l.887-2.999q.085-.286.249-.535l1.505-2.278a2 2 0 0 1 .92-.753l.83-.334a1 1 0 0 0 .625-.942l-.02-1.325a1 1 0 0 0-.361-.756z\"/>";
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

/** Build a <TtPointFortin/> icon as a live SVGSVGElement (browser only). */
export function TtPointFortin(options: IconOptions = {}): SVGSVGElement {
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
