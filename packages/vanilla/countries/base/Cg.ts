// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m15.048 19.043-3.307 3.19a.5.5 0 0 1-.793-.135l-.314-.62a.5.5 0 0 0-.735-.182l-1.485 1.049a.5.5 0 0 1-.588-.008l-1.07-.802a.5.5 0 0 0-.608.006l-1.224.957a.5.5 0 0 1-.695-.079L2.74 20.59a.5.5 0 0 1 .098-.722l1.294-.924a.5.5 0 0 0 .166-.61l-.604-1.36a.5.5 0 0 1 .451-.702l1.01-.01a.5.5 0 0 0 .491-.561l-.058-.485a.5.5 0 0 1 .512-.56l.606.02a.5.5 0 0 1 .437.288l.466.997a.5.5 0 0 0 .383.283l1.692.24a.5.5 0 0 0 .563-.407l.651-3.639a.5.5 0 0 0-.146-.449l-1.21-1.16a.5.5 0 0 1-.153-.384l.041-.88a.5.5 0 0 1 .239-.403l.896-.549a.5.5 0 0 0 .197-.625l-.39-.903a.5.5 0 0 0-.516-.299l-1.91.218a.5.5 0 0 1-.55-.579l.215-1.288a.5.5 0 0 1 .483-.418l2.747-.055a.5.5 0 0 1 .201.038l3.203 1.325a.5.5 0 0 0 .663-.298l1.411-4.071a.5.5 0 0 1 .46-.336l3.968-.1a.5.5 0 0 1 .457.73l-1.397 2.694a.5.5 0 0 0-.053.173l-.754 6.6a.5.5 0 0 1-.137.29l-3.408 3.529a.5.5 0 0 0-.14.329l-.116 3.135a.5.5 0 0 1-.152.341Z\"/>";
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

/** Build a <Cg/> icon as a live SVGSVGElement (browser only). */
export function Cg(options: IconOptions = {}): SVGSVGElement {
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
