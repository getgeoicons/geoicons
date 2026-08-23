// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.612 11.387a.605.605 0 0 0-.705-.888l-1.449.483a1 1 0 0 1-.683-.02l-1.339-.528a3 3 0 0 0-.626-.172l-4.581-.738a2 2 0 0 1-.991-.462l-.84-.727a3 3 0 0 0-1.547-.703l-1.214-.17a4 4 0 0 0-1.968.218L3.312 8.946a.8.8 0 0 0-.514.82l.069.772a1 1 0 0 1-.068.461l-1.407 3.507a1 1 0 0 0 .086.912l.461.72a1 1 0 0 0 .984.451l8.662-1.24c.243-.036.49-.025.73.03l4.28.98a.6.6 0 0 0 .73-.518l.02-.19a.6.6 0 0 1 .516-.527l2.348-.32a.8.8 0 0 0 .58-.386l.8-1.355z\"/>";
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

/** Build a <HtGrandeAnse/> icon as a live SVGSVGElement (browser only). */
export function HtGrandeAnse(options: IconOptions = {}): SVGSVGElement {
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
