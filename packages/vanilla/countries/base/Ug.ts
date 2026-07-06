// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.33 22.79-1.23-.05a.5.5 0 0 1-.473-.576l1.17-7.615a.5.5 0 0 1 .129-.265l1.23-1.317a.5.5 0 0 1 .611-.095l.422.239a.5.5 0 0 0 .633-.119L8.348 9.91a.5.5 0 0 0-.13-.747L6.131 7.92a.5.5 0 0 1-.24-.5l.49-3.446a.5.5 0 0 1 .344-.407l2.495-.791a.5.5 0 0 1 .416.052l1.432.896a.5.5 0 0 0 .47.031l2.557-1.152a.5.5 0 0 1 .324-.03l1.823.443a.5.5 0 0 0 .47-.13L18.415 1.2l3.34 6.138q.035.065.05.135l.606 2.844a.5.5 0 0 1-.082.395l-4.008 5.601a.5.5 0 0 1-.617.163l-1.627-.752a.5.5 0 0 0-.563.1l-.989.988a.5.5 0 0 1-.233.132l-3.44.852a.5.5 0 0 0-.364.358l-.723 2.749a.5.5 0 0 1-.484.372H5.14a.5.5 0 0 0-.375.17L3.726 22.62a.5.5 0 0 1-.396.17Z\"/>";
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

/** Build a <Ug/> icon as a live SVGSVGElement (browser only). */
export function Ug(options: IconOptions = {}): SVGSVGElement {
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
