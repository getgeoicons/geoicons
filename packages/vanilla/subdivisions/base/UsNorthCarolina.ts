// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.09 7.948a.3.3 0 0 0-.238.113l-.779.983a1 1 0 0 1-.401.303L1.79 11.366a.6.6 0 0 0-.36.442l-.09.476a.6.6 0 0 0 .613.711l2.255-.09a2 2 0 0 0 .56-.103l1.392-.47c.229-.078.469-.113.71-.105l2.383.082a.6.6 0 0 1 .472.258l.328.47a.6.6 0 0 0 .477.257l1.94.05a.6.6 0 0 1 .412.179l2.275 2.315a.6.6 0 0 0 .51.174l.967-.135a.6.6 0 0 0 .433-.287l.639-1.072a1 1 0 0 1 .697-.474l1.642-.269a1 1 0 0 0 .837-.926l.024-.39a1 1 0 0 1 .486-.798l.688-.41a1 1 0 0 0 .425-1.21l-.602-1.602a.6.6 0 0 0-.557-.39z\"/>";
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

/** Build a <UsNorthCarolina/> icon as a live SVGSVGElement (browser only). */
export function UsNorthCarolina(options: IconOptions = {}): SVGSVGElement {
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
