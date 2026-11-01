// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.969 21.487h7.282a2 2 0 0 1 .855.192l2.109.997a.63.63 0 0 0 .891-.67l-.21-1.301a2 2 0 0 0-.483-1.015l-1.873-2.097a2 2 0 0 1-.507-1.246l-.06-1.398a2 2 0 0 1 .392-1.277l1.202-1.622a.8.8 0 0 0 .08-.82l-.484-1.014a2 2 0 0 0-.634-.761l-1.287-.93a.6.6 0 0 1-.14-.832l.175-.247a.6.6 0 0 1 .574-.248l1.215.171a.6.6 0 0 0 .678-.676l-.37-2.674a3 3 0 0 0-.281-.915l-.721-1.462a.6.6 0 0 0-.694-.314l-.516.139a.6.6 0 0 0-.377.855l.617 1.19a.8.8 0 0 1-.263 1.032l-.466.314a2 2 0 0 0-.688.8l-3.409 7.177a.8.8 0 0 1-1.161.326l-.74-.486a.8.8 0 0 0-.983.083l-1.927 1.79a1 1 0 0 0-.27.427l-.56 1.736a.6.6 0 0 0 .168.628l2.085 1.89a1 1 0 0 1 .31.931l-.118.613a.6.6 0 0 0 .589.714Z\"/>";
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

/** Build a <Cm/> icon as a live SVGSVGElement (browser only). */
export function Cm(options: IconOptions = {}): SVGSVGElement {
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
