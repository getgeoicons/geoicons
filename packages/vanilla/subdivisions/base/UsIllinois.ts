// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.22 21.825a1 1 0 0 0 1.12.847l1.374-.18a1 1 0 0 0 .652-.368l.768-.963a1 1 0 0 0 .216-.542l.19-2.324a1 1 0 0 1 .214-.54l1.061-1.336a1 1 0 0 0 .217-.63l-.096-11.34q0-.129-.035-.253l-.736-2.726a.3.3 0 0 0-.288-.222l-8.175-.045a.3.3 0 0 0-.244.477l1.386 1.904a1 1 0 0 1 .005 1.17l-.26.365a1 1 0 0 1-.557.385l-1.094.29a1 1 0 0 0-.706.698l-.919 3.284a3 3 0 0 0 .317 2.351l1.36 2.268a1 1 0 0 0 .389.369l1.083.575a1 1 0 0 1 .49 1.166l-.297 1.008a1 1 0 0 0 .34 1.068l1.667 1.315a1 1 0 0 1 .37.64z\"/>";
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

/** Build a <UsIllinois/> icon as a live SVGSVGElement (browser only). */
export function UsIllinois(options: IconOptions = {}): SVGSVGElement {
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
