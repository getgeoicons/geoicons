// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.087 22.368a.6.6 0 0 0 .865-.04l2.379-2.716a1 1 0 0 0 .08-1.213l-.455-.683a2 2 0 0 1-.282-1.568l1.068-4.53a1 1 0 0 0-.156-.806l-1.763-2.5a.6.6 0 0 0-.82-.156l-.915.601a.6.6 0 0 1-.838-.184L13.226 5.32a1 1 0 0 0-.55-.426l-2.344-.735a1 1 0 0 1-.669-.701l-.46-1.764a.6.6 0 0 0-.636-.446l-.024.002a.6.6 0 0 0-.446.27L4.435 7.123a.6.6 0 0 0 .1.774l5.09 4.596q.076.07.165.121l1.826 1.069a2 2 0 0 1 .935 1.264l.407 1.715c.071.302.213.584.413.823l1.754 2.093a1 1 0 0 1 .233.674l-.035 1.11a.6.6 0 0 0 .186.453z\"/>";
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

/** Build a <LcAnseLaRaye/> icon as a live SVGSVGElement (browser only). */
export function LcAnseLaRaye(options: IconOptions = {}): SVGSVGElement {
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
