// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.607 1.908a.3.3 0 0 0-.298.295l-.128 7.594a1 1 0 0 1-.999.984l-4.982.003 2.575 2.282a2 2 0 0 1 .623 1.05l.187.816a1 1 0 0 0 .46.634l1.068.64a1 1 0 0 0 1.39-.373l.318-.576a.6.6 0 0 1 .568-.308l1.466.105a.6.6 0 0 1 .476.298l3.226 5.584a1 1 0 0 0 .623.47l1.843.46a.6.6 0 0 0 .725-.74l-.04-.145a3 3 0 0 1 .496-2.593l.171-.227a4 4 0 0 1 1.38-1.16l3.116-1.588a1 1 0 0 0 .532-.723l.288-1.697a2 2 0 0 0-.177-1.22l-.49-.99a2 2 0 0 1-.205-.926l.038-1.838a.6.6 0 0 0-.418-.584l-1.103-.352a3 3 0 0 0-1.233-.125l-1.821.196a3 3 0 0 1-1.096-.085l-3.596-.962a.6.6 0 0 1-.444-.595l.08-3.318a.3.3 0 0 0-.301-.308z\"/>";
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

/** Build a <UsTexas/> icon as a live SVGSVGElement (browser only). */
export function UsTexas(options: IconOptions = {}): SVGSVGElement {
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
