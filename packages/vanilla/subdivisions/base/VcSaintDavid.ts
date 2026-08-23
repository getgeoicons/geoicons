// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.158 2.52a1 1 0 0 0-1.41-.758l-3.31 1.535a1 1 0 0 0-.507.534l-2.781 6.908a3 3 0 0 1-.532.862l-1.06 1.203a1 1 0 0 0-.248.694l.047 1.417a1 1 0 0 1-.749 1.002l-2.97.769a1 1 0 0 0-.748.902l-.068 1.03a1 1 0 0 0 .471.916l4.69 2.902a1 1 0 0 0 .821.105l4.258-1.312a1 1 0 0 1 1.017.265l.801.837a1 1 0 0 0 1.06.25l1.325-.476a1 1 0 0 0 .583-1.33l-.803-1.906a1 1 0 0 1 .22-1.101l.39-.386a2 2 0 0 0 .543-1.887L17.453 8.15a.6.6 0 0 1 .692-.729l1.3.24a.6.6 0 0 0 .706-.533l.041-.428a.6.6 0 0 0-.15-.46l-1.39-1.544a1 1 0 0 1-.246-.52z\"/>";
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

/** Build a <VcSaintDavid/> icon as a live SVGSVGElement (browser only). */
export function VcSaintDavid(options: IconOptions = {}): SVGSVGElement {
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
