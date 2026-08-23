// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.059 18.428a.8.8 0 0 0 .538.76l4.819 1.668a1 1 0 0 0 .972-.18l.607-.513a1 1 0 0 1 .641-.236l4.078-.017a2 2 0 0 0 1.053-.304l1.722-1.078a1 1 0 0 0 .468-.896l-.05-1.049a.8.8 0 0 1 .892-.833l.44.052a.8.8 0 0 0 .86-.562l.144-.479a1 1 0 0 0-.115-.83l-.457-.711a1 1 0 0 1-.156-.615l.041-.554a1 1 0 0 1 .453-.764l2.227-1.448a1 1 0 0 0 .437-1.027l-.044-.226a1 1 0 0 0-.488-.68l-1.166-.663a1 1 0 0 0-.818-.077l-1.468.502a1 1 0 0 1-.863-.104l-1.74-1.115a1 1 0 0 1-.459-.9l.016-.278a1 1 0 0 0-.347-.818l-1.433-1.228a1 1 0 0 0-.721-.238l-3.128.221a.6.6 0 0 0-.558.585l-.009.39a.8.8 0 0 1-.892.777l-1.992-.232a1 1 0 0 0-1.001.53l-.11.209a6 6 0 0 0-.624 1.935l-.023.16a1 1 0 0 1-.969.858l-.663.014a1 1 0 0 0-.69.298l-.987.999a1 1 0 0 0-.288.721l.062 3.275a1 1 0 0 0 .591.893l.62.279a1 1 0 0 1 .592.918z\"/>";
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

/** Build a <DoSanJuan/> icon as a live SVGSVGElement (browser only). */
export function DoSanJuan(options: IconOptions = {}): SVGSVGElement {
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
