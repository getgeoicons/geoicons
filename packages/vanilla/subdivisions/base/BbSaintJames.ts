// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.615 2.444a.6.6 0 0 0-.51-.578l-3.962-.601a.3.3 0 0 0-.339.358l.236 1.12a.6.6 0 0 1-.583.725l-2.662.014a.6.6 0 0 0-.586.713l.537 2.793a2 2 0 0 1-.039.917l-.39 1.393a1 1 0 0 0 .082.744l.522.971a2 2 0 0 1 .238 1.028l-.323 8.112a3 3 0 0 0 .052.69l.266 1.37a.6.6 0 0 0 .702.474l.502-.096a.6.6 0 0 0 .477-.698l-.163-.881a.3.3 0 0 1 .247-.351l2.583-.424a.6.6 0 0 0 .503-.59l.016-9.844a.6.6 0 0 1 .416-.57l1.096-.353a2 2 0 0 0 1.077-.836l1.045-1.654a.8.8 0 0 0-.003-.859l-.699-1.092a2 2 0 0 1-.315-1.029z\"/>";
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

/** Build a <BbSaintJames/> icon as a live SVGSVGElement (browser only). */
export function BbSaintJames(options: IconOptions = {}): SVGSVGElement {
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
