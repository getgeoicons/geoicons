// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.673 18.108 1.132 1.511a1 1 0 0 0 .83.4l1.927-.056a.6.6 0 0 1 .507.947l-.436.614a.6.6 0 0 0 .343.929l.74.187a.6.6 0 0 0 .74-.486l.557-3.445a1 1 0 0 0-.186-.758l-.594-.795a1 1 0 0 1-.193-.697l.077-.788a1 1 0 0 1 .895-.897l1.778-.178a.6.6 0 0 0 .521-.745l-.4-1.573a2 2 0 0 1 .108-1.303l.293-.662a.757.757 0 0 0-.91-1.032l-1.144.343a1 1 0 0 1-1.126-.413l-.184-.283a1 1 0 0 0-.82-.455L13.75 8.45a1 1 0 0 1-.897-.596l-.542-1.224a1 1 0 0 1 .002-.812l.533-1.193a2 2 0 0 1 .596-.762l1.188-.926a.818.818 0 0 0-1.003-1.293l-1.822 1.405a1 1 0 0 1-.36.176l-1.405.364a1 1 0 0 0-.687.622l-.296.801a2 2 0 0 1-.944 1.078l-.819.43a1 1 0 0 0-.457.502L6.37 8.147a1 1 0 0 0-.058.576l.633 3.242a1 1 0 0 1-.211.83l-1.727 2.088a.6.6 0 0 0 .204.924l1.69.803q.16.076.332.123l2.365.644a2 2 0 0 1 1.075.731Z\"/>";
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

/** Build a <Co/> icon as a live SVGSVGElement (browser only). */
export function Co(options: IconOptions = {}): SVGSVGElement {
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
