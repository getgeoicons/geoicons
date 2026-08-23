// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.2 15.45a.6.6 0 0 0 .641.46l.695-.066a3 3 0 0 1 1.106.102l.662.19c.522.148.993.436 1.364.832l2.05 2.186c.256.273.56.496.899.657l3.655 1.74a.6.6 0 0 0 .833-.371l.292-.984a2 2 0 0 1 .473-.815l.491-.513a1 1 0 0 0 .211-1.05l-1.493-3.886a2 2 0 0 1-.012-1.4l.363-1a1 1 0 0 0-.167-.976l-1.22-1.486a2 2 0 0 0-.721-.553l-1.057-.479a1 1 0 0 1-.587-.932l.071-3.446a1 1 0 0 0-.547-.913l-.246-.124a1 1 0 0 0-1.14.165l-.584.554a1 1 0 0 1-1.436-.062l-.393-.444a1 1 0 0 0-1.348-.137L9.378 4.703a2 2 0 0 1-1.463.382L4.057 4.57a1 1 0 0 0-.722.184L1.687 5.957a1 1 0 0 0-.4.952l.618 4.242a1 1 0 0 0 .322.6L3.9 13.252a1 1 0 0 0 .576.252l3.644.333a1 1 0 0 1 .883.768z\"/>";
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

/** Build a <CuCienfuegos/> icon as a live SVGSVGElement (browser only). */
export function CuCienfuegos(options: IconOptions = {}): SVGSVGElement {
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
