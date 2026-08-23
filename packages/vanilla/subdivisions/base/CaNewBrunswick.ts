// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.84 15.448a.737.737 0 0 0-.184-1.414l-1.959-.254a1 1 0 0 1-.727-.475l-1.263-2.09a2 2 0 0 1-.258-.69l-.434-2.485a1 1 0 0 1 .159-.736l.653-.958 1.558-2.03a.73.73 0 0 0-.975-1.055L16.153 5.38a.9.9 0 0 1-1.329-.427l-.288-.737a1 1 0 0 0-.527-.55l-1.275-.564a1 1 0 0 0-.74-.028L9.01 4.134a1 1 0 0 1-.91-.124l-.804-.565a.6.6 0 0 0-.372-.11l-2.661.12a.6.6 0 0 0-.573.594l-.013 1.263a1 1 0 0 1-.584.9l-1.737.792a.6.6 0 0 0-.19.955l.35.376a.6.6 0 0 0 .604.168l1.738-.498a1 1 0 0 1 .801.111l1.276.789a1 1 0 0 1 .475.866l-.113 6.99a.6.6 0 0 0 .368.562l.802.337a.6.6 0 0 1 .364.62l-.096.865a1 1 0 0 0 .65 1.05l1.859.678a2 2 0 0 0 1.273.032l3.07-.945a5 5 0 0 0 1.191-.546l4.698-2.953a3 3 0 0 1 .463-.237z\"/>";
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

/** Build a <CaNewBrunswick/> icon as a live SVGSVGElement (browser only). */
export function CaNewBrunswick(options: IconOptions = {}): SVGSVGElement {
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
