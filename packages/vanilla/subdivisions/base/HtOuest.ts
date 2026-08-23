// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.81 14.352a.962.962 0 0 0-.788 1.629l.96.982a1 1 0 0 0 .715.302h1.94a1 1 0 0 0 .467-.116l3.153-1.662a1 1 0 0 1 .67-.094l8.168 1.697 1.482.146a.8.8 0 0 0 .783-.417l.033-.061a.8.8 0 0 0-.376-1.109l-1.619-.73a2 2 0 0 1-.944-.884l-.547-1.03a.6.6 0 0 1 .557-.88l1.093.049a.795.795 0 0 0 .21-1.57l-1.561-.351a2 2 0 0 0-.797-.017l-1.686.307a1 1 0 0 1-.811-.21l-3.334-2.72a2 2 0 0 0-.653-.355l-.687-.22a1 1 0 0 0-1.276.71l-.083.332a1 1 0 0 0 .211.893l.53.617a2 2 0 0 0 .73.537l1.82.78a1 1 0 0 1 .584 1.122l-.07.341a1 1 0 0 1-1.124.787l-1.966-.288a1 1 0 0 0-.926.365l-.858 1.073a1 1 0 0 1-.884.37z\"/>";
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

/** Build a <HtOuest/> icon as a live SVGSVGElement (browser only). */
export function HtOuest(options: IconOptions = {}): SVGSVGElement {
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
