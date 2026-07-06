// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.57 4.033 5.386 8.258a2.5 2.5 0 0 0-.237 1.603l.438 2.362a2.5 2.5 0 0 0 .391.952l1.689 2.48q.02.03.036.063l1.07 2.2a2.5 2.5 0 0 0 .7.871l.97.766c.363.285.796.465 1.253.52l2.362.28a.5.5 0 0 1 .232.09l2.652 1.908a1 1 0 0 0 1.216-.037l.397-.324a1 1 0 0 0 .353-.944l-.482-2.81a2.5 2.5 0 0 1-.027-.634l.235-2.781a.5.5 0 0 0-.053-.269L17.59 12.6a.5.5 0 0 1-.038-.102L15.919 6.14a2.5 2.5 0 0 1 .035-1.367L17.071 1.2s-2.934 1.976-5.087 2.202c-.827.086-1.907-.046-2.716-.185-.683-.116-1.38.2-1.698.816Z\"/>";
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

/** Build a <Pn/> icon as a live SVGSVGElement (browser only). */
export function Pn(options: IconOptions = {}): SVGSVGElement {
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
