// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.537 21.88 1.48-1.36a1 1 0 0 0 .319-.837L6.11 17.45a2 2 0 0 1 .233-1.154l.821-1.513a4 4 0 0 1 .944-1.156l1.13-.948a2 2 0 0 1 1.423-.464l.902.063a1 1 0 0 1 .93 1.053l-.203 3.61a2 2 0 0 1-.148.65l-1.193 2.893a2 2 0 0 1-.851.971l-1.726.993a2 2 0 0 1-1.31.242l-2.395-.38a.25.25 0 0 1-.13-.43ZM15.975 3.67l.784-.264a1 1 0 0 0 .626-.624l.264-.772a1.006 1.006 0 0 1 1.126-.66c.572.1.948.667.806 1.23l-.42 1.666a1 1 0 0 1-.576.675l-1.923.824a1 1 0 0 1-1.386-1.05l.028-.207a1 1 0 0 1 .67-.817Z\"/>";
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

/** Build a <Gd/> icon as a live SVGSVGElement (browser only). */
export function Gd(options: IconOptions = {}): SVGSVGElement {
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
