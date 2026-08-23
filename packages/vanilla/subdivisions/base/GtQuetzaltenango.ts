// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.79 16.837a2 2 0 0 0 .602-.558l1.82-2.57a1 1 0 0 0 .043-1.087l-.715-1.206a.6.6 0 0 0-.678-.271l-.709.2a.6.6 0 0 1-.686-.285l-.844-1.509a1 1 0 0 1-.124-.404l-.315-3.718a1 1 0 0 1 .394-.883l.685-.516a.6.6 0 0 0 .236-.534l-.118-1.29a.6.6 0 0 0-.39-.509l-.74-.272a.6.6 0 0 0-.786.403l-.235.85a1 1 0 0 1-.793.72l-1.514.26a1 1 0 0 0-.685.47l-.121.2a1 1 0 0 0 .092 1.162l.64.758a1 1 0 0 1 .22.82l-.328 1.838a1 1 0 0 1-.18.419l-2.294 3.107a2 2 0 0 0-.382 1l-.143 1.515a1 1 0 0 1-.606.827l-.589.249q-.167.07-.349.078l-5.606.228a1 1 0 0 0-.667.292l-1.937 1.938a.6.6 0 0 0 .143.954l3.553 1.883q.325.173.684.261l3.74.927a1 1 0 0 0 1.18-.63L12.719 18a1 1 0 0 1 .395-.497l.919-.6a.6.6 0 0 1 .878.264l.623 1.437a.6.6 0 0 0 .86.276z\"/>";
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

/** Build a <GtQuetzaltenango/> icon as a live SVGSVGElement (browser only). */
export function GtQuetzaltenango(options: IconOptions = {}): SVGSVGElement {
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
