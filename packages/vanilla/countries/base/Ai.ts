// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.335 14.105-2.521 1.728a.5.5 0 0 0-.132.693l.1.148a.5.5 0 0 0 .562.198l1.402-.433 1.986-.872a.5.5 0 0 1 .496.054l.431.314 6.5-3.344a.5.5 0 0 0 .24-.27l.482-1.286a.5.5 0 0 1 .174-.23l3.142-2.282a.5.5 0 0 0-.031-.83l-.78-.482a.5.5 0 0 0-.59.048l-2.858 2.474a.5.5 0 0 1-.281.12l-1.69.155a.5.5 0 0 0-.14.034l-2.451.989a.5.5 0 0 0-.306.55l.144.814a.5.5 0 0 1-.341.563l-3.407 1.083a.5.5 0 0 0-.131.064ZM7.447 9.176 2.175 8.007a.5.5 0 0 0-.58.323l-.198.565a.5.5 0 0 0 .39.658l5.355.88a.5.5 0 0 0 .542-.3l.116-.276a.5.5 0 0 0-.353-.681Z\"/>";
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

/** Build a <Ai/> icon as a live SVGSVGElement (browser only). */
export function Ai(options: IconOptions = {}): SVGSVGElement {
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
