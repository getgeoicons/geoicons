// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.516 19.716.055-.346a2 2 0 0 1 .96-1.411l4.482-2.642a2 2 0 0 1 1.225-.265l.394.041a1 1 0 0 1 .895 1.042l-.039.811a1 1 0 0 1-.366.727l-.425.348a1 1 0 0 0-.366.806l.058 1.795a1 1 0 0 1-.925 1.03l-2.667.2c-.37.027-.74-.049-1.07-.22l-1.683-.873a1 1 0 0 1-.528-1.043Zm17.51-16.263L21.06 2.27a.958.958 0 0 1 .983 1.645l-2.006 1.232a.986.986 0 1 1-1.012-1.693Zm-4.6 17.637-.069-.207a1 1 0 0 1 .311-1.087l.547-.453a1 1 0 0 1 1.462.204l.203.295a1 1 0 0 1-.351 1.447l-.681.366a1 1 0 0 1-1.422-.565Z\"/>";
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

/** Build a <Gg/> icon as a live SVGSVGElement (browser only). */
export function Gg(options: IconOptions = {}): SVGSVGElement {
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
