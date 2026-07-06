// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.279 6.866.285-1.423a1 1 0 0 1 .67-.754l1.39-.454a1 1 0 0 1 .392-.046l2.751.226a1 1 0 0 1 .34.09L9.57 5.65a1 1 0 0 1 .255.17l1.095 1.008a.6.6 0 0 0 .968-.231l.285-.762a.6.6 0 0 1 .864-.309l1.212.704a1 1 0 0 0 .3.114l1.018.212a.6.6 0 0 1 .477.618l-.056 1.109a1 1 0 0 0 .163.6l.768 1.167a1 1 0 0 0 .446.372l.903.381a1 1 0 0 0 .691.033l1.142-.362q.2-.063.358-.202l.741-.651a.875.875 0 0 1 1.414.913l-.36 1.176a1 1 0 0 1-.057.144l-.86 1.771a1 1 0 0 1-.159.234l-.937 1.035a1 1 0 0 1-.419.275l-1.63.556a1 1 0 0 1-.394.05l-1.245-.089a.6.6 0 0 0-.58.33l-.563 1.128a.6.6 0 0 0 .086.664l.563.641a.6.6 0 0 1 .15.369l.015.345a.6.6 0 0 1-.634.626l-.606-.035a1 1 0 0 1-.209-.034l-1.385-.383a.6.6 0 0 1-.418-.74l.242-.867a.6.6 0 0 0-.275-.678l-1.116-.654a1 1 0 0 0-.62-.13l-1.63.188a1 1 0 0 1-.61-.124l-2.319-1.32a.6.6 0 0 1-.297-.436l-.481-3.296a1 1 0 0 0-.283-.562L3.7 8.834a1 1 0 0 0-.62-.289l-.638-.056a1 1 0 0 1-.759-.463l-.27-.43a1 1 0 0 1-.134-.73Z\"/>";
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

/** Build a <MississippiBasin/> icon as a live SVGSVGElement (browser only). */
export function MississippiBasin(options: IconOptions = {}): SVGSVGElement {
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
