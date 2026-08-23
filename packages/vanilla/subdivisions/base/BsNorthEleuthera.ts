// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.717 17.46a1 1 0 0 0-.325-.703l-.795-.728a11 11 0 0 1-1.457-1.626l-1.486-2.033a.7.7 0 0 0-.604-.285 7.66 7.66 0 0 1-3.945-.861 7.6 7.6 0 0 1-1.472-1.011l-.216-.19a10 10 0 0 0-1.728-1.219l-1.254-.7a2 2 0 0 1-.638-.562l-.638-.867A1 1 0 0 1 8 5.827l.035-.135a1 1 0 0 0-.811-1.244l-.742-.116a1 1 0 0 0-1.141.822l-.146.867a11 11 0 0 1-1.617 4.16l-2.045 3.157a.69.69 0 0 0 1.122.799l2.273-2.916a3.68 3.68 0 0 1 3.906-1.28l.171.049a4.3 4.3 0 0 1 1.639.883l.956.828a9.95 9.95 0 0 0 3.972 2.1l1.766.466a1 1 0 0 1 .471.28l3.9 4.121a.6.6 0 0 0 1.036-.433z\"/>";
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

/** Build a <BsNorthEleuthera/> icon as a live SVGSVGElement (browser only). */
export function BsNorthEleuthera(options: IconOptions = {}): SVGSVGElement {
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
