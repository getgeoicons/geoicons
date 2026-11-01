// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.602 15.336 1.603 9.629a2 2 0 0 1 .437-2.037l1.878-1.98a2 2 0 0 1 1.16-.602l1.517-.223a4 4 0 0 1 .758-.04l3.722.165a3 3 0 0 1 1.173.296l3.616 1.747a.631.631 0 0 0 .887-.718l-.229-.939a.6.6 0 0 1 .385-.709l.585-.204a1 1 0 0 1 .737.03l.679.304a1 1 0 0 0 1.007-.113l1.76-1.32a.629.629 0 0 1 .956.747l-.767 1.825a2 2 0 0 0-.018 1.506l.374.952a2 2 0 0 1 .134.86l-.234 3.641a1 1 0 0 1-.63.866L16.116 15.8a.8.8 0 0 0-.285 1.298l1.173 1.226a.838.838 0 0 1-1.008 1.316l-.74-.404a2 2 0 0 0-1.842-.037l-3.171 1.564a2 2 0 0 1-.844.207l-2.81.058a.608.608 0 0 1-.405-1.075l.404-.339a.741.741 0 0 0-.734-1.263l-.617.229a.8.8 0 0 1-1.064-.6l-.342-1.79a6 6 0 0 0-.23-.854Z\"/>";
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

/** Build a <Kh/> icon as a live SVGSVGElement (browser only). */
export function Kh(options: IconOptions = {}): SVGSVGElement {
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
