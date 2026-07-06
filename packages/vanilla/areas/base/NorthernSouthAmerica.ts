// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.735 18.654-.49 3.214a.6.6 0 0 1-.926.409l-3.627-2.422a1 1 0 0 1-.264-.257l-3.58-5.102a1 1 0 0 1-.18-.566l-.026-2.89a1 1 0 0 1 .274-.697L3.8 8.355a1 1 0 0 0 .273-.738l-.128-2.56a1 1 0 0 1 .178-.622l1.305-1.873a1 1 0 0 1 .422-.346l1.922-.834a1 1 0 0 1 .832.017l1.956.942a1 1 0 0 0 .493.098l3.052-.181a1 1 0 0 1 .69.222l3.168 2.577a1 1 0 0 0 .524.219l1.816.196a1 1 0 0 1 .392.128l1.667.96-.817 1.562a1 1 0 0 1-.783.532l-3.074.316a1 1 0 0 1-.976-.508l-.86-1.543a.6.6 0 0 0-.913-.165l-2.094 1.785a1 1 0 0 1-.754.234l-2.002-.214a.6.6 0 0 0-.664.6l.018 2.704a1 1 0 0 1-.353.768L7.48 14a1 1 0 0 0 .042 1.559l2.83 2.148a1 1 0 0 1 .384.947Z\"/>";
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

/** Build a <NorthernSouthAmerica/> icon as a live SVGSVGElement (browser only). */
export function NorthernSouthAmerica(options: IconOptions = {}): SVGSVGElement {
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
