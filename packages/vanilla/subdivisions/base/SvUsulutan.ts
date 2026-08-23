// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.205 3.781a1 1 0 0 0-.909.138l-1.012.735a2 2 0 0 0-.564.63l-.555.976a1 1 0 0 1-.734.496l-.925.127a1 1 0 0 0-.613.328l-.748.844a1 1 0 0 0-.242.527l-.271 1.968a2 2 0 0 1-.336.863l-.879 1.273a1 1 0 0 0-.175.518l-.052 1.037a1 1 0 0 1-.327.691l-2.286 2.07a.3.3 0 0 0 .104.507l2.222.76 9.038 1.899a10 10 0 0 0 2.052.214l7.221.003a.3.3 0 0 0 .244-.476l-.863-1.198a1 1 0 0 0-.637-.4l-1.163-.207a.3.3 0 0 1-.212-.439l.483-.886a.3.3 0 0 0-.162-.426l-3.852-1.375a2 2 0 0 1-1.037-.846l-.18-.296a2 2 0 0 1-.29-1.08l.157-7.389a1 1 0 0 0-.679-.968z\"/>";
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

/** Build a <SvUsulutan/> icon as a live SVGSVGElement (browser only). */
export function SvUsulutan(options: IconOptions = {}): SVGSVGElement {
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
