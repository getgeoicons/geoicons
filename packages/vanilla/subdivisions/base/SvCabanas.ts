// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.212 17.06a1 1 0 0 0 .588.014l3.749-1.053a6 6 0 0 1 2.077-.207l1.845.14c.596.046 1.183.18 1.74.399l1.094.43a1 1 0 0 1 .521.468l.412.79a.6.6 0 0 0 .592.319l1.943-.198a.6.6 0 0 0 .51-.412l1.406-4.335a1 1 0 0 0-.02-.675l-.58-1.469a2 2 0 0 1-.094-1.151l.236-1.103a1 1 0 0 0-.333-.974l-.398-.336a1 1 0 0 0-.745-.23l-1.024.102a1 1 0 0 1-.628-.146l-2.095-1.304a2 2 0 0 0-1.788-.163L6.51 9.388a2 2 0 0 1-.72.139l-2.509.015a1 1 0 0 0-.662.257l-.916.824a1 1 0 0 0-.325.627l-.107.918a1 1 0 0 0 .442.95L3.71 14.44a1 1 0 0 1 .445.752l.046.557a1 1 0 0 0 .68.866z\"/>";
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

/** Build a <SvCabanas/> icon as a live SVGSVGElement (browser only). */
export function SvCabanas(options: IconOptions = {}): SVGSVGElement {
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
