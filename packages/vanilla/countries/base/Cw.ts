// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.29 17.889 9.61 16.32a1 1 0 0 1-.387-.41l-.929-1.83a1 1 0 0 0-.917-.548l-.944.025a1 1 0 0 1-.898-.51l-1.236-2.2a2 2 0 0 0-.456-.55l-1.68-1.415a1 1 0 0 1-.347-.63l-.565-4.165a.926.926 0 0 1 1.463-.873L4.31 4.377a2 2 0 0 0 .581.292l.24.075a2 2 0 0 1 1.074.807l.603.912a1 1 0 0 1 .165.524l.033 1.248a3 3 0 0 0 .443 1.49l.398.648a3 3 0 0 0 .676.768l1.845 1.484a3 3 0 0 0 1.401.624l3.981.644a3 3 0 0 1 1.16.45l1.15.75a3 3 0 0 1 .915.938l1.148 1.864q.151.245.347.457l1.93 2.098a.3.3 0 0 1-.186.5l-2.836.329a1 1 0 0 1-.649-.148l-2.256-1.422a3 3 0 0 0-.426-.223z\"/>";
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

/** Build a <Cw/> icon as a live SVGSVGElement (browser only). */
export function Cw(options: IconOptions = {}): SVGSVGElement {
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
