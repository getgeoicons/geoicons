// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.209 18.765a.3.3 0 0 0 .157.502l3.36.671 5.937.403c.382.026.755.125 1.099.29l4.21 2.027a.3.3 0 0 0 .41-.164l.65-1.718a.3.3 0 0 0-.256-.405l-1.318-.107a1 1 0 0 1-.815-.555l-.381-.772a2 2 0 0 1-.206-.884v-3.544a1 1 0 0 0-.26-.673l-.793-.872a1 1 0 0 1-.239-.877l1.202-5.755a1 1 0 0 0-.21-.843l-1.069-1.287a1 1 0 0 1-.141-1.052l.177-.39a.83.83 0 0 0-.433-1.108l-.647-.273a1 1 0 0 0-.836.027l-1.32.66a1 1 0 0 0-.548.799l-.158 1.65a1 1 0 0 1-.311.634l-1.316 1.236a1 1 0 0 0-.315.719l-.037 3.689a1 1 0 0 1-.367.763l-1.414 1.159a1 1 0 0 0-.362.866l.094 1.014a1 1 0 0 1-.276.788z\"/>";
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

/** Build a <SvLaLibertad/> icon as a live SVGSVGElement (browser only). */
export function SvLaLibertad(options: IconOptions = {}): SVGSVGElement {
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
