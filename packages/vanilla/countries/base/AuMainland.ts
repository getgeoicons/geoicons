// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.324 18.238-.946-.351a.5.5 0 0 1-.325-.506l.152-2.053a.5.5 0 0 0-.035-.223l-.924-2.3a.5.5 0 0 1-.034-.234l.223-2.285a.5.5 0 0 1 .355-.431l3.24-.964a.5.5 0 0 0 .246-.164l2.5-3.08a.5.5 0 0 1 .654-.108l.69.433a.5.5 0 0 0 .652-.105l1.437-1.739a.5.5 0 0 1 .481-.172l1.713.334a.5.5 0 0 1 .32.768l-.42.631a.5.5 0 0 0 .172.714l1.756.982a.5.5 0 0 0 .73-.323l.713-3.08a.25.25 0 0 1 .474-.041l1.838 4.354a.5.5 0 0 0 .099.15l3.178 3.338a.5.5 0 0 1 .13.252l.382 2.027a.5.5 0 0 1-.022.264l-2.005 5.483a.5.5 0 0 1-.334.31l-2.18.616a.5.5 0 0 1-.25.005l-2.085-.49a.5.5 0 0 1-.367-.352l-.313-1.118a.5.5 0 0 0-.345-.346l-1.737-.492a.5.5 0 0 1-.198-.11l-1.96-1.768a.5.5 0 0 0-.493-.103l-6.83 2.282a.5.5 0 0 1-.332-.005Z\"/>";
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

/** Build a <AuMainland/> icon as a live SVGSVGElement (browser only). */
export function AuMainland(options: IconOptions = {}): SVGSVGElement {
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
