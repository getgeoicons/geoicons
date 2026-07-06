// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.685 4.253 1.42-2.104a.6.6 0 0 0-.536-.935l-1.917.127a1 1 0 0 0-.934.998v.61a1 1 0 0 1-.211.615l-1.015 1.3a1 1 0 0 0-.212.627l.023 2.137a1 1 0 0 0 .15.514l2.12 3.44a1 1 0 0 0 .251.275l1.046.786a1 1 0 0 1 .23.241l.5.744a1 1 0 0 1 .167.485l.331 4.473-.102 1.554a1 1 0 0 0 .04.352l.501 1.674a.73.73 0 0 0 1.33.156l.215-.372a1 1 0 0 0 .129-.61l-.15-1.368a1 1 0 0 1 .003-.237l.634-4.893a1 1 0 0 0-.025-.385l-.406-1.53a1 1 0 0 0-.216-.406l-1.753-1.989a1 1 0 0 0-.383-.269l-.956-.377a1 1 0 0 1-.506-.441l-1.21-2.161a1 1 0 0 1-.104-.705l.16-.727a1 1 0 0 1 .282-.505l.97-.934q.075-.073.134-.16Z\"/>";
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

/** Build a <Andes/> icon as a live SVGSVGElement (browser only). */
export function Andes(options: IconOptions = {}): SVGSVGElement {
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
