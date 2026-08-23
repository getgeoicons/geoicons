// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.436 1.56a.6.6 0 0 0-.773-.066l-.193.137a.6.6 0 0 0-.19.758l.817 1.633a.6.6 0 0 1-.152.729L4.39 8.55a2 2 0 0 0-.647 1.003l-.392 1.421a2 2 0 0 1-.494.862l-1.445 1.485a.6.6 0 0 0 .142.945l1.933 1.057a1 1 0 0 1 .392 1.367l-.553.985a1 1 0 0 0 .361 1.348l.066.04a1 1 0 0 0 .987.02l1.435-.776a1 1 0 0 1 1.013.037l3.443 2.195a1 1 0 0 1 .46.913l-.014.195a1 1 0 0 0 1.071 1.067l4.621-.34a1 1 0 0 0 .846-.604l1.742-4.071a1 1 0 0 1 .867-.605l.905-.047a1 1 0 0 0 .831-.53l.675-1.27a3 3 0 0 0 .34-1.147l.112-1.292a1 1 0 0 0-.441-.918l-3.592-2.4a1 1 0 0 0-.494-.166l-2.154-.134a1 1 0 0 1-.723-.377l-3.76-4.754z\"/>";
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

/** Build a <VcSaintGeorge/> icon as a live SVGSVGElement (browser only). */
export function VcSaintGeorge(options: IconOptions = {}): SVGSVGElement {
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
