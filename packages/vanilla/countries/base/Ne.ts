// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.746 17.954 6.3 19.865a.5.5 0 0 1-.597.374l-.948-.215a.5.5 0 0 1-.276-.17l-2.7-3.275a.5.5 0 0 1 .324-.815l3.508-.435a.5.5 0 0 0 .394-.29l.863-1.906a.5.5 0 0 0 .044-.207V9.9l2.019-.42a.5.5 0 0 0 .237-.121l2.04-1.88a.5.5 0 0 1 .071-.055l5.703-3.625a.5.5 0 0 1 .479-.031L19.898 4.9a.5.5 0 0 0 .393.013l1.101-.431.186 1.923a.5.5 0 0 0 .096.25L22.8 8.172l-.535 1.168a.5.5 0 0 0-.044.19l-.14 3.679a.5.5 0 0 1-.111.296l-3.777 4.647a.5.5 0 0 1-.488.175l-1.83-.373a.5.5 0 0 0-.335.05l-1.163.623a.5.5 0 0 1-.317.053l-6.747-1.106a.5.5 0 0 0-.567.38Z\"/>";
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

/** Build a <Ne/> icon as a live SVGSVGElement (browser only). */
export function Ne(options: IconOptions = {}): SVGSVGElement {
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
