// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.398 20.142-.801-2.978a1 1 0 0 0-.41-.571l-2.5-1.672a1 1 0 0 1-.325-.357l-.693-1.287a1 1 0 0 1-.114-.377l-.152-1.572a1 1 0 0 0-.149-.435L2.53 9.737a1 1 0 0 1-.153-.531v-.922a1 1 0 0 1 .19-.586l.696-.963a1 1 0 0 0 .128-.932l-.227-.615a1 1 0 0 1-.059-.418l.065-.89.357-1.69a1 1 0 0 1 1.197-.769l.83.186a1 1 0 0 1 .664.506l.238.447a1 1 0 0 1 .109.339l.157 1.197a1 1 0 0 0 .51.745l.143.079a1 1 0 0 0 .833.06l.645-.243a1 1 0 0 1 1.228.455l.282.513a1 1 0 0 1 .044.872l-.368.869a1 1 0 0 0 .185 1.067l.79.857a1 1 0 0 0 .26.203l1.228.66a1 1 0 0 0 .77.075l.616-.19a1 1 0 0 1 .796.088l.683.394a1 1 0 0 1 .357.352l.49.816c.078.13.185.24.312.323l1.833 1.196a1 1 0 0 0 .546.162h.487a1 1 0 0 1 .628.222l.777.628a1 1 0 0 1 .325.476l.419 1.327a1 1 0 0 1 .019.535l-.497 2.071a1 1 0 0 1-.097.25l-1.316 2.385a1 1 0 0 1-.603.479l-3.322.94a1 1 0 0 1-.273.038h-3.943a1 1 0 0 1-.666-.255l-2.145-1.918a1 1 0 0 1-.299-.485Z\"/>";
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

/** Build a <BqSintEustatius/> icon as a live SVGSVGElement (browser only). */
export function BqSintEustatius(options: IconOptions = {}): SVGSVGElement {
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
