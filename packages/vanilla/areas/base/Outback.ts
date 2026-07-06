// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.664 17.904-5.127 1.041a1 1 0 0 1-1.066-.48l-.657-1.141a1 1 0 0 0-.224-.267L1.603 14.55a1 1 0 0 1-.352-.863l.21-2.155a.5.5 0 0 1 .356-.431l3.61-1.073a.5.5 0 0 0 .246-.165L8.458 6.43a.5.5 0 0 1 .654-.108l.834.524a.5.5 0 0 0 .651-.105l1.627-1.97a.5.5 0 0 1 .481-.172l1.986.388a.5.5 0 0 1 .32.768l-.533.8a.5.5 0 0 0 .172.714l2.035 1.14a.5.5 0 0 0 .731-.324l.84-3.626a.25.25 0 0 1 .463-.061l1.802 3.395a.5.5 0 0 1 .057.268l-.087 1.267a.5.5 0 0 0 .229.455l.589.377a1 1 0 0 1 .42 1.123l-.334 1.15a1 1 0 0 0-.016.498l.363 1.622a1 1 0 0 0 .187.396l.474.608a1 1 0 0 1 .096 1.081l-1.524 2.887a1 1 0 0 1-1.094.511l-2.445-.524-5.286-1.585a1 1 0 0 0-.486-.022Z\"/>";
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

/** Build a <Outback/> icon as a live SVGSVGElement (browser only). */
export function Outback(options: IconOptions = {}): SVGSVGElement {
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
