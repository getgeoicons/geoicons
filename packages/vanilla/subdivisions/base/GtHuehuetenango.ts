// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.642 2.647a1 1 0 0 0-.905-.56l-11.473.085a.6.6 0 0 0-.515.3L1.32 15.335a.6.6 0 0 0-.065.437l.578 2.478a1 1 0 0 0 .785.755l.358.069a1 1 0 0 0 .813-.202l1.815-1.452a1 1 0 0 1 .751-.21l2.279.29a1 1 0 0 1 .612.317l1.62 1.772a1 1 0 0 0 .47.29l1.516.422a.6.6 0 0 1 .438.533l.039.528a.6.6 0 0 0 .598.556h1.577a.6.6 0 0 0 .6-.567l.055-.99a.6.6 0 0 1 .427-.541l2.956-.887a1 1 0 0 0 .68-.707l.23-.889a.6.6 0 0 0-.632-.748l-.66.057a1 1 0 0 1-.734-.234l-.776-.66a1 1 0 0 1-.352-.737l-.039-1.533a1 1 0 0 1 .272-.711l2.323-2.466a1 1 0 0 0 .26-.534l.391-2.55 1.548.683.655-2.537a1 1 0 0 0-.07-.69z\"/>";
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

/** Build a <GtHuehuetenango/> icon as a live SVGSVGElement (browser only). */
export function GtHuehuetenango(options: IconOptions = {}): SVGSVGElement {
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
