// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.372 22.8 5.253-.047a.5.5 0 0 0 .494-.474l.305-5.698a.5.5 0 0 1 .591-.464l.5.093a.5.5 0 0 0 .593-.485l.042-3.317a.5.5 0 0 0-.036-.192l-.942-2.355a.5.5 0 0 1-.03-.256l.555-3.938a.5.5 0 0 0-.205-.477l-1.132-.803a.5.5 0 0 0-.461-.062l-1.053.386a.5.5 0 0 1-.456-.059l-4.818-3.338a.5.5 0 0 0-.36-.084l-.97.15a.5.5 0 0 0-.289.152L7.817 3.81a.5.5 0 0 0-.095.145L5.776 8.496a.5.5 0 0 1-.063.108l-1.757 2.28a.5.5 0 0 0-.104.314l.085 4.415a.5.5 0 0 0 .706.446l.272-.123a.5.5 0 0 1 .703.404l.221 2.1a.5.5 0 0 0 .105.256l1.93 2.448a.5.5 0 0 0 .224.162L12.2 22.77a.5.5 0 0 0 .173.03Z\"/>";
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

/** Build a <Sz/> icon as a live SVGSVGElement (browser only). */
export function Sz(options: IconOptions = {}): SVGSVGElement {
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
