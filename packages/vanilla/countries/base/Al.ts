// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.618 1.258a.53.53 0 0 1 .44.435l.07.397a.6.6 0 0 0 .771.47l.446-.14a1 1 0 0 1 1.024.262l1.147 1.2a2 2 0 0 1 .499.913l.303 1.256c.082.343.104.697.064 1.046l-.435 3.796a2 2 0 0 0 .134.98l.68 1.677a.6.6 0 0 0 .572.374l.571-.015a.6.6 0 0 1 .607.497l.147.846a2 2 0 0 1-.23 1.324l-1.352 2.395a2 2 0 0 1-.857.81l-.48.237a1 1 0 0 0-.559.906l.005.516a1 1 0 0 1-.243.662l-.191.222a1 1 0 0 1-1.018.312l-.28-.075a1 1 0 0 1-.724-.796l-.166-.963a1 1 0 0 0-.516-.712l-1.204-.641a2.97 2.97 0 0 1-1.572-2.766l.006-.126a3 3 0 0 1 .199-.937l.463-1.196a2 2 0 0 0 .133-.806l-.112-2.664a2 2 0 0 1 .195-.95l.498-1.037a1 1 0 0 0-.371-1.28l-.17-.106a1 1 0 0 1-.453-.67l-.341-1.89a1 1 0 0 1 .119-.68l1.636-2.824a.53.53 0 0 1 .545-.26Z\"/>";
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

/** Build a <Al/> icon as a live SVGSVGElement (browser only). */
export function Al(options: IconOptions = {}): SVGSVGElement {
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
