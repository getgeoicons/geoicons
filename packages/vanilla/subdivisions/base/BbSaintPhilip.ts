// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.94 22.49a.3.3 0 0 0 .439.115l1.961-1.34a6 6 0 0 0 1.36-1.281l4.975-6.427a4 4 0 0 0 .57-1.011L20.764 8.6a2.8 2.8 0 0 0-.537-2.885l-.701-.774a2 2 0 0 0-1.398-.656L16.84 4.23a1 1 0 0 1-.717-.348L14.221 1.66a.6.6 0 0 0-.85-.062l-.751.657a2 2 0 0 0-.533.745l-.438 1.064a2 2 0 0 1-1.17 1.12L7.145 6.388a1 1 0 0 0-.612.634l-.509 1.574a1 1 0 0 1-.415.537l-1.455.925a1 1 0 0 0-.426.57l-.617 2.168a2 2 0 0 0-.048.882l.077.453a.6.6 0 0 0 .602.5l1.124-.021a.6.6 0 0 1 .608.662l-.116 1.112a1 1 0 0 0 .166.664l1.154 1.706a2 2 0 0 1 .252.52l.588 1.868a.3.3 0 0 0 .358.201l1.098-.272a.3.3 0 0 1 .341.159z\"/>";
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

/** Build a <BbSaintPhilip/> icon as a live SVGSVGElement (browser only). */
export function BbSaintPhilip(options: IconOptions = {}): SVGSVGElement {
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
