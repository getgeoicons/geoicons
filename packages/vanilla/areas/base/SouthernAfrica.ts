// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.992 5.292-.94-3.656L4.857 1.2l.567 1.277a.6.6 0 0 0 .47.35l1.324.174.254-1.02 1.785.17.064 2.097a1 1 0 0 0 .696.923l2.562.816a1 1 0 0 0 1.297-.835l.21-1.764 1.407-.403 1.832 1.003a1 1 0 0 1 .42.443l.242.501a1 1 0 0 0 1.056.553l3.592-.563-.167 3.03a1 1 0 0 1-.07.314l-.35.887a1 1 0 0 1-.382.468l-3.017 1.976a1 1 0 0 0-.442.979l.225 1.564a1 1 0 0 1-.469.995l-1.142.698a1 1 0 0 0-.451.622l-.396 1.662a1 1 0 0 1-.35.55l-4.007 3.186a1 1 0 0 1-.415.195l-3.125.663a1 1 0 0 1-.774-.154l-1.111-.764a1 1 0 0 1-.424-.69l-.182-1.344a1 1 0 0 0-.117-.352L4.196 17.12a1 1 0 0 1-.113-.327l-.518-3.21a1 1 0 0 0-.103-.308L1.598 9.74a1 1 0 0 1-.021-.891l1.352-2.885a1 1 0 0 0 .063-.673Z\"/>";
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

/** Build a <SouthernAfrica/> icon as a live SVGSVGElement (browser only). */
export function SouthernAfrica(options: IconOptions = {}): SVGSVGElement {
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
