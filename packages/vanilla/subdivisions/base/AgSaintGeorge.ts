// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.437 22.736a.3.3 0 0 0 .356-.28l.063-1.3a.3.3 0 0 1 .212-.272l1.902-.585a.3.3 0 0 0 .208-.333l-.684-4.446.795-.032a1 1 0 0 0 .904-.668l.255-.73a1 1 0 0 0-.021-.718l-.018-.042a1 1 0 0 0-1.328-.526l-.221.098a.852.852 0 0 1-.979-1.348l.947-1.05a1 1 0 0 1 .682-.329l.62-.037a.6.6 0 0 0 .556-.5l.103-.613a.6.6 0 0 0-.339-.644l-1.973-.917A2 2 0 0 1 13.4 6.217l-.318-1.076a2 2 0 0 0-.486-.83l-.503-.515a2 2 0 0 1-.48-.807l-.357-1.16a.705.705 0 0 0-1.367.34l.543 2.84a.3.3 0 0 1-.268.356l-2.688.243a.3.3 0 0 0-.273.29l-.06 2.282a.3.3 0 0 0 .27.307l1.143.116a.3.3 0 0 1 .27.3L8.8 15.09l1.15.32-1.082 4.463a1 1 0 0 0 .197.87l1.083 1.322a1 1 0 0 0 .588.35z\"/>";
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

/** Build a <AgSaintGeorge/> icon as a live SVGSVGElement (browser only). */
export function AgSaintGeorge(options: IconOptions = {}): SVGSVGElement {
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
