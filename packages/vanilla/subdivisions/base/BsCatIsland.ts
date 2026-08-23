// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.375 22.515-1.118-.848a.6.6 0 0 1 .155-1.04l2.212-.817a1.61 1.61 0 0 0 .89-2.223l-.058-.118a1.9 1.9 0 0 0-1.102-.969l-.533-.18a1 1 0 0 1-.542-.443l-3.755-6.422a2 2 0 0 0-.764-.744l-.919-.504a.6.6 0 0 1-.31-.534l.01-.868a2 2 0 0 0-.438-1.275l-.172-.215a2 2 0 0 0-.361-.35l-2.824-2.12a.6.6 0 0 1 .21-1.06l1.737-.45a1 1 0 0 1 .924.229l2.121 1.934a1 1 0 0 1 .326.706l.043 1.323a1 1 0 0 0 .22.594l1.094 1.361q.24.3.42.64l2.041 3.872q.165.31.425.548l3.16 2.869c.213.194.382.432.495.698l2.012 4.732a.6.6 0 0 1-.414.819l-4.35 1.03a1 1 0 0 1-.835-.176Z\"/>";
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

/** Build a <BsCatIsland/> icon as a live SVGSVGElement (browser only). */
export function BsCatIsland(options: IconOptions = {}): SVGSVGElement {
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
