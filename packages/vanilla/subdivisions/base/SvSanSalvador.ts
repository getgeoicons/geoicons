// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.673 2.011a.6.6 0 0 0-.652-.721l-3.216.351a1 1 0 0 0-.779.532l-.461.886a1 1 0 0 0 .312 1.28l1.265.89a1 1 0 0 1 .402 1.035L8 13.22a1 1 0 0 0 .423 1.05l.717.476a1 1 0 0 1 .445.888l-.247 4.473a1 1 0 0 0 .073.433l.673 1.65a.8.8 0 0 0 .635.49l.35.047a.8.8 0 0 0 .808-.409l1.09-1.995a1 1 0 0 0 .03-.9l-.412-.885a.6.6 0 0 1 .505-.852l.892-.058a.6.6 0 0 0 .56-.572l.073-1.595a1 1 0 0 1 .882-.947l.493-.058a.6.6 0 0 0 .467-.864l-1.064-2.128a3 3 0 0 0-.628-.844l-2.03-1.909a.6.6 0 0 1-.146-.658l.324-.817a.8.8 0 0 0-.04-.676l-.663-1.226a1 1 0 0 1-.098-.684z\"/>";
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

/** Build a <SvSanSalvador/> icon as a live SVGSVGElement (browser only). */
export function SvSanSalvador(options: IconOptions = {}): SVGSVGElement {
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
