// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.126 22.633a1 1 0 0 0 .562.161h.012a1 1 0 0 0 .81-.439l1.111-1.64a1 1 0 0 0 .172-.526l.27-7.74a1 1 0 0 0-1.02-1.035l-.934.02a1 1 0 0 1-.977-.705l-.097-.313a1 1 0 0 0-.947-.706l-.736-.005a1 1 0 0 1-.728-.323l-1.037-1.127a1 1 0 0 1-.264-.644l-.005-.152a.86.86 0 0 1 .64-.858.857.857 0 0 0 .534-1.242l-.703-1.276a2 2 0 0 1-.244-.822l-.096-1.338a.6.6 0 0 0-.753-.536L6.422 2.792a1 1 0 0 0-.667.583l-.654 1.58a2 2 0 0 0-.138 1.008l.034.276a1 1 0 0 0 .557.779l3.027 1.465a1 1 0 0 1 .563.94l-.273 6.826a1 1 0 0 0 .43.862l1.117.773a.6.6 0 0 1 .24.642l-.354 1.39a.6.6 0 0 0 .66.743l.698-.094a.6.6 0 0 0 .481-.38l.269-.704a.6.6 0 0 1 .844-.315l.737.395a.6.6 0 0 1 .226.846l-.127.205a.6.6 0 0 0 .182.82z\"/>";
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

/** Build a <SvSanMiguel/> icon as a live SVGSVGElement (browser only). */
export function SvSanMiguel(options: IconOptions = {}): SVGSVGElement {
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
