// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.26 1.673a.6.6 0 0 0-.198.457l.034 1.794a1 1 0 0 0 .283.678l1.099 1.13a2 2 0 0 1 .479.81l1.282 4.189a2 2 0 0 1 .048.98l-.666 3.313a1 1 0 0 1-.572.716l-3.327 1.488a.6.6 0 0 0-.248.89l1.672 2.414a2 2 0 0 0 .595.565l1.634 1.006c.22.135.462.227.715.27l1.971.333a1 1 0 0 0 .922-.33l1.564-1.798a1 1 0 0 1 1.02-.308l1.723.474a1 1 0 0 0 1.262-.883l.136-1.658a1 1 0 0 1 .216-.543l1.447-1.81a2 2 0 0 0 .438-1.212l.092-4.827a1 1 0 0 1 .625-.908l.813-.328a.8.8 0 0 0 .496-.662l.063-.631a.8.8 0 0 0-.482-.816l-3.055-1.3a1 1 0 0 1-.605-.842l-.054-.695a1 1 0 0 0-1.186-.904l-1.075.207a1 1 0 0 1-.85-.231l-.972-.855a1 1 0 0 0-1.248-.058L9.793 2.92a1 1 0 0 1-1.107.045l-2.52-1.533a.6.6 0 0 0-.714.068z\"/>";
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

/** Build a <DoDajabon/> icon as a live SVGSVGElement (browser only). */
export function DoDajabon(options: IconOptions = {}): SVGSVGElement {
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
