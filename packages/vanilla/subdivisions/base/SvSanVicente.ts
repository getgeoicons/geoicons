// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.915 6.02a1 1 0 0 0-.323.847l.141 1.319a1 1 0 0 0 .927.89l.578.04a1 1 0 0 1 .86.621l.544 1.34a2 2 0 0 1 .113 1.12L7.43 13.93a1 1 0 0 0 .16.753l1.187 1.713a1 1 0 0 1 .146.82l-.447 1.724a1 1 0 0 1-.29.484L6.33 21.136a.6.6 0 0 0 .132.975l.937.481a.6.6 0 0 0 .713-.124l2.852-3.061a1 1 0 0 0 .268-.689l-.013-1.82a1 1 0 0 1 .24-.657l1.322-1.543a1 1 0 0 0 .231-.512l.334-2.385c.05-.354.194-.688.416-.968l.551-.692a2 2 0 0 1 1.022-.679l1.415-.399a1 1 0 0 0 .509-.337l1.861-2.327a1 1 0 0 0 .166-.947l-.495-1.454a1 1 0 0 0-1.017-.675l-1.142.081a1 1 0 0 1-.701-.22l-1.63-1.325a2 2 0 0 0-1.115-.442l-2.442-.179a3 3 0 0 0-1.029.104l-3.153.883a1 1 0 0 0-.73.969l.009 1.537a1 1 0 0 1-.329.746z\"/>";
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

/** Build a <SvSanVicente/> icon as a live SVGSVGElement (browser only). */
export function SvSanVicente(options: IconOptions = {}): SVGSVGElement {
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
