// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.677 20.756-.012 1.365a.5.5 0 0 1-.652.472l-2.747-.878a.5.5 0 0 1-.34-.383l-.872-4.636a.5.5 0 0 1 .019-.255l1.391-4.04a.5.5 0 0 0 .009-.296l-.215-.772a.5.5 0 0 1 .025-.339l.928-2.074a.5.5 0 0 0 .04-.144l.756-6.33a.5.5 0 0 1 .176-.324l.65-.545a.5.5 0 0 1 .75.127l1.262 2.117a.5.5 0 0 1 .036.44l-1.375 3.492a.5.5 0 0 0-.01.337l.28.867a.5.5 0 0 1 0 .31l-1.323 4.018a.5.5 0 0 0-.013.266l.377 1.69a.5.5 0 0 1-.021.288l-.99 2.567a.5.5 0 0 0-.033.22l.104 1.34a.5.5 0 0 0 .423.455l.953.147a.5.5 0 0 1 .424.498Z\"/>";
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

/** Build a <Cl/> icon as a live SVGSVGElement (browser only). */
export function Cl(options: IconOptions = {}): SVGSVGElement {
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
