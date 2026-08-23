// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.673 1.224a.7.7 0 0 0-.582.337L6.082 3.226a2 2 0 0 1-.529.577L3.81 5.079a1 1 0 0 0-.409.774l-.028.866a1 1 0 0 0 .472.882l4.25 2.637a2 2 0 0 1 .762.863l.499 1.082a2 2 0 0 0 .53.694l3.647 3.063q.32.27.58.6l3.197 4.09 1.777 1.845a.7.7 0 0 0 .738.174l.34-.12a.7.7 0 0 0 .466-.68l-.053-1.811a1 1 0 0 0-.312-.697l-1.195-1.13a2 2 0 0 1-.578-1.024l-.52-2.369a1 1 0 0 0-.927-.784l-.964-.049a1 1 0 0 1-.768-.423l-2.076-2.949a1 1 0 0 1-.157-.796l.449-1.983a1 1 0 0 0-.204-.858l-.891-1.08a1 1 0 0 0-.586-.345l-1.114-.211a1 1 0 0 1-.754-.641L8.882 1.673a.7.7 0 0 0-.674-.461z\"/>";
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

/** Build a <MxSinaloa/> icon as a live SVGSVGElement (browser only). */
export function MxSinaloa(options: IconOptions = {}): SVGSVGElement {
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
