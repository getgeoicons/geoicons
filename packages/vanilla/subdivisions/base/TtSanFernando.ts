// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.123 2.456a.6.6 0 0 0-.307-.565l-.939-.522a.6.6 0 0 0-.602.012L17.66 2.969a1 1 0 0 1-.957.045l-1.978-.963a1 1 0 0 0-.74-.054l-1.674.53a.6.6 0 0 0-.21 1.027l.572.492a1 1 0 0 0 .557.238l.632.061a1 1 0 0 1 .83.62l.076.188a1 1 0 0 1-.04.836l-.89 1.71a2 2 0 0 1-.456.582l-1.885 1.652a2 2 0 0 0-.429.53l-.83 1.487a1 1 0 0 0-.089.762l.254.888a1 1 0 0 1-.149.858L7.8 17.88a1 1 0 0 1-.29.27l-5.316 3.263a.67.67 0 0 0 .49 1.225l1.774-.379a2 2 0 0 0 .729-.317l3.172-2.221q.25-.175.54-.267l5.066-1.615a2 2 0 0 1 .768-.088l2.56.207a1 1 0 0 0 .776-.278l2.551-2.47a1 1 0 0 0 .297-.593l.564-4.474a.6.6 0 0 0-.22-.543l-.455-.364a.6.6 0 0 1-.14-.776l1.06-1.773a1 1 0 0 0 .14-.445z\"/>";
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

/** Build a <TtSanFernando/> icon as a live SVGSVGElement (browser only). */
export function TtSanFernando(options: IconOptions = {}): SVGSVGElement {
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
