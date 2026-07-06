// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.681 6.533-.43 3.44a.6.6 0 0 0 .31.603l2.932 1.579a1 1 0 0 0 .546.117l3.994-.287a1 1 0 0 1 .86.381l2.095 2.68a.6.6 0 0 0 .859.089l.505-.425a1 1 0 0 1 .906-.2l.484.131a1 1 0 0 1 .6.458l1.75 2.973a1 1 0 0 0 .708.48l1.646.256-.379-1.512a1 1 0 0 1 .05-.633l.037-.087a1 1 0 0 1 .251-.353l.39-.351a1 1 0 0 1 .128-.098l2.328-1.499a.6.6 0 0 0 .275-.49l.03-1.294a.6.6 0 0 0-.04-.23L21.49 9.59a1 1 0 0 1-.058-.228l-.417-3.153a.604.604 0 0 0-.644-.521c-7.953.58-14.546-.022-17.181-.445a.6.6 0 0 0-.516.16l-.81.77a.6.6 0 0 0-.182.36Z\"/>";
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

/** Build a <SouthwestUs/> icon as a live SVGSVGElement (browser only). */
export function SouthwestUs(options: IconOptions = {}): SVGSVGElement {
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
