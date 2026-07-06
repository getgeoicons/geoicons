// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.386 15.94 2.73 10.384a1 1 0 0 1-.157-1.229l.992-1.653a2 2 0 0 0 .232-.572l.189-.805a2 2 0 0 0-.05-1.09L3.411 3.47a1 1 0 0 0-.268-.415l-.332-.309a.767.767 0 0 1 1.001-1.16l2.574 2.06a1 1 0 0 1 .296.389l.558 1.313a2 2 0 0 0 .443.648l1.636 1.6a2 2 0 0 0 .52.367l3.622 1.769a1 1 0 0 1 .345.277l1.987 2.508q.071.09.16.16l3.3 2.627a1 1 0 0 1 .323.456l1.906 5.532a1 1 0 0 1-.69 1.293l-.463.122a1 1 0 0 1-.68-.062l-3.694-1.737a1 1 0 0 1-.17-.102l-5.225-3.88a1 1 0 0 0-.226-.126l-1.618-.644a1 1 0 0 1-.33-.216Z\"/>";
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

/** Build a <Aw/> icon as a live SVGSVGElement (browser only). */
export function Aw(options: IconOptions = {}): SVGSVGElement {
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
