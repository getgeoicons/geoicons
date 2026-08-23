// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.874 19.803a3 3 0 0 1 .34 1.045l.183 1.412a.6.6 0 0 0 .614.522l1.841-.059a.6.6 0 0 0 .567-.729l-.305-1.386a1 1 0 0 1 .143-.767l1.037-1.564a1 1 0 0 0 .158-.685l-.184-1.375a2 2 0 0 1 .118-.987l1.122-2.899a2 2 0 0 1 .574-.805l2.649-2.239a.6.6 0 0 0-.178-1.02l-.923-.345a.6.6 0 0 1-.39-.552l-.01-.625a.6.6 0 0 1 .533-.607l1.836-.206a.6.6 0 0 0 .515-.452l.273-1.106a.6.6 0 0 0-.473-.734l-1.415-.26a1 1 0 0 1-.77-.678l-.123-.382a1.45 1.45 0 0 0-2.011-.862l-.097.047c-.513.248-.87.735-.95 1.3l-.089.617a.6.6 0 0 1-.923.416L8.593 1.905a.6.6 0 0 0-.872.245L6.46 4.818a1 1 0 0 0-.043.75l.968 2.844a1 1 0 0 1 .01.614l-1.813 5.93a1 1 0 0 0 .078.77z\"/>";
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

/** Build a <DoHermanasMirabal/> icon as a live SVGSVGElement (browser only). */
export function DoHermanasMirabal(options: IconOptions = {}): SVGSVGElement {
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
