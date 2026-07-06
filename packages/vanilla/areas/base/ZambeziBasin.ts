// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.212 9.456.015-.318a.6.6 0 0 1 .416-.545l3.238-1.037a1 1 0 0 1 .252-.046l2.773-.147a1 1 0 0 1 .281.025l2.97.695a1 1 0 0 1 .557.356l1.228 1.56a1 1 0 0 0 1.116.326l1.131-.396a1 1 0 0 0 .535-.443l2.495-4.31a1 1 0 0 1 1.269-.414l2.026.894a.5.5 0 0 1 .23.709l-.466.801-.89-.242-.34.83a1 1 0 0 0-.038.654l.9 3.163c.049.17.051.35.008.52l-.194.76a1 1 0 0 0 .338 1.023l1.016.826a1 1 0 0 1 .322.47l.235.731a1 1 0 0 1-.171.931l-.37.462a1 1 0 0 1-.414.306l-.222.087a1 1 0 0 1-1.024-.176l-1.408-1.226a1 1 0 0 0-.992-.188l-1.258.448a1 1 0 0 0-.593.57l-.204.51a1 1 0 0 1-.862.627l-.32.021a1 1 0 0 0-.505.177l-1.298.903a.58.58 0 0 1-.693-.02.97.97 0 0 1-.356-.582l-.097-.503a1 1 0 0 0-1.15-.797l-.126.021a1 1 0 0 1-.879-.282l-.371-.376a1 1 0 0 0-1.264-.13l-.939.624a1 1 0 0 1-1.183-.058l-1.073-.871-2.042-1.44a.6.6 0 0 1-.25-.415l-.445-3.566a1 1 0 0 0-.275-.573l-.47-.484a.6.6 0 0 1-.169-.445Z\"/>";
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

/** Build a <ZambeziBasin/> icon as a live SVGSVGElement (browser only). */
export function ZambeziBasin(options: IconOptions = {}): SVGSVGElement {
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
