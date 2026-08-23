// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.407 8.993a2 2 0 0 0-.18.943l.068 1.293a1 1 0 0 0 .829.932l.503.087a1 1 0 0 1 .766.636l.32.854a2 2 0 0 0 .638.874l2.593 2.036a1 1 0 0 1 .317 1.144l-.456 1.19a.67.67 0 0 0 1.074.74l1.596-1.427a1 1 0 0 1 .603-.253l4.893-.312a1 1 0 0 0 .69-.34l1.176-1.35a.78.78 0 0 1 .83-.229l.013.004a.76.76 0 0 1 .513.597.758.758 0 0 0 1.004.589l.605-.217a1 1 0 0 0 .59-.566l1.06-2.617a1 1 0 0 0 .04-.63l-.306-1.156a1 1 0 0 1 .035-.619l1.228-3.15a1 1 0 0 0-.538-1.283l-1.028-.44a1 1 0 0 0-1.139.252l-.937 1.048a1 1 0 0 1-1.309.159l-1.324-.903a1 1 0 0 1-.436-.864l.004-.112a1 1 0 0 0-.829-1.022l-4.534-.786a1 1 0 0 0-.667.118l-.833.476a1 1 0 0 1-.917.039l-1.185-.55a1 1 0 0 0-.645-.067l-2.29.525a1 1 0 0 0-.684.556z\"/>";
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

/** Build a <DoSanchezRamirez/> icon as a live SVGSVGElement (browser only). */
export function DoSanchezRamirez(options: IconOptions = {}): SVGSVGElement {
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
