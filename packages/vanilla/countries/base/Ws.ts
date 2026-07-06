// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.089 12.907-3.602-3.97a.5.5 0 0 1-.019-.65l.313-.387a.5.5 0 0 1 .556-.158l.735.26a.5.5 0 0 0 .287.015l3.866-.955a.5.5 0 0 1 .153-.013l1.57.103a.5.5 0 0 1 .387.228l1.891 2.94a.5.5 0 0 1 .047.448l-.751 1.97a.5.5 0 0 1-.659.283l-1-.414a.5.5 0 0 0-.27-.031l-3.055.488a.5.5 0 0 1-.45-.158Zm7.665.293-.44.51a.5.5 0 0 0 .066.718l1.986 1.58a.5.5 0 0 0 .41.1l.934-.187a.5.5 0 0 1 .402.093l.883.678a.5.5 0 0 0 .289.103l4.749.15a.5.5 0 0 0 .48-.316l.148-.373a.5.5 0 0 0-.162-.581l-2.436-1.858a.5.5 0 0 0-.13-.071l-3.747-1.389a.5.5 0 0 0-.291-.017l-2.881.701a.5.5 0 0 0-.26.16Z\"/>";
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

/** Build a <Ws/> icon as a live SVGSVGElement (browser only). */
export function Ws(options: IconOptions = {}): SVGSVGElement {
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
