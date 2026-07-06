// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.7 1.236-.877.344a.5.5 0 0 0-.259.7l1.758 3.295a.5.5 0 0 1-.006.48l-.552.978a.5.5 0 0 0-.004.484l1.824 3.366a.5.5 0 0 1-.075.58l-2.57 2.73a.5.5 0 0 0-.126.24L1.52 20.63a.5.5 0 0 0 .484.602l10.622.127a.5.5 0 0 1 .148.024l4.235 1.377a.5.5 0 0 0 .253.014l4.123-.829-2.125-2.2a.5.5 0 0 1-.14-.335L19 14.176a.5.5 0 0 1 .5-.511h2.567a.5.5 0 0 0 .5-.494l.032-2.517a.5.5 0 0 0-.575-.5l-1.717.26a.5.5 0 0 1-.528-.282l-1.095-2.33a.5.5 0 0 1-.045-.257l.307-3.36a.5.5 0 0 0-.418-.54l-3.2-.519a.5.5 0 0 0-.574.421l-.14.951a.5.5 0 0 1-.452.426l-2.41.205a.5.5 0 0 1-.502-.304L9.889 1.59a.5.5 0 0 0-.454-.306L3.89 1.202a.5.5 0 0 0-.19.034Z\"/>";
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

/** Build a <Ao/> icon as a live SVGSVGElement (browser only). */
export function Ao(options: IconOptions = {}): SVGSVGElement {
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
