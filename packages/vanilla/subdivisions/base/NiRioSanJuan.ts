// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.424 11.757a2 2 0 0 1 .513 1.287l.011.43A1.51 1.51 0 0 1 5.162 15l-3.169-.589a.6.6 0 0 0-.706.53l-.04.385a.6.6 0 0 0 .39.624l3.45 1.268a.6.6 0 0 0 .514-.047l2.759-1.64a1 1 0 0 1 .815-.094l3.216 1.026a2 2 0 0 1 .948.649l1.366 1.692a1 1 0 0 0 .788.372l1.801-.017a1 1 0 0 1 .574.174l.905.619a1 1 0 0 0 .846.134l2.223-.654a1 1 0 0 0 .678-1.24l-.17-.582a2 2 0 0 0-.444-.788l-.927-1.015a2 2 0 0 0-.918-.571l-4.355-1.266a2 2 0 0 1-.753-.41l-3.907-3.39a2 2 0 0 1-.686-1.624l.161-2.844a1 1 0 0 0-.335-.805l-.973-.863a1 1 0 0 0-.663-.251H6.631a1 1 0 0 0-.637.229L2.722 6.713a.6.6 0 0 0-.064.864z\"/>";
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

/** Build a <NiRioSanJuan/> icon as a live SVGSVGElement (browser only). */
export function NiRioSanJuan(options: IconOptions = {}): SVGSVGElement {
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
