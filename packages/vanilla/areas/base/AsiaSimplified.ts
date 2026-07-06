// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.176 16.408-1.69.561a.5.5 0 0 1-.604-.25l-1.597-3.196a.5.5 0 0 1-.037-.351l.393-1.481a.5.5 0 0 1 .402-.366l2.367-.389a.5.5 0 0 0 .39-.66L3.953 7.87a.5.5 0 0 1 .295-.634L8.329 5.69a.5.5 0 0 1 .415.027l3.32 1.798a.5.5 0 0 0 .444.016l2.211-.998a.5.5 0 0 1 .365-.018l2.905.976a.5.5 0 0 0 .467-.08l1.298-1.013a.5.5 0 0 1 .593-.017l2.059 1.429a.5.5 0 0 1 .137.678l-.8 1.26a.5.5 0 0 1-.177.168L19.55 11.05a.5.5 0 0 0-.241.55l.286 1.221a.5.5 0 0 1-.007.255l-.256.87a.5.5 0 0 1-.327.335l-1.375.441a.5.5 0 0 0-.346.44l-.136 1.901a.5.5 0 0 1-.345.44l-1.437.465a.5.5 0 0 1-.654-.46l-.029-.93a.5.5 0 0 0-.174-.364l-1.11-.951a.5.5 0 0 0-.661.01l-.882.802a.5.5 0 0 0-.131.193l-.591 1.563a.5.5 0 0 1-.44.323l-.458.025a.5.5 0 0 1-.514-.379l-.667-2.7a.5.5 0 0 0-.283-.337l-1.325-.586a.5.5 0 0 0-.602.157l-1.428 1.9a.5.5 0 0 1-.242.174Z\"/>";
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

/** Build a <AsiaSimplified/> icon as a live SVGSVGElement (browser only). */
export function AsiaSimplified(options: IconOptions = {}): SVGSVGElement {
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
