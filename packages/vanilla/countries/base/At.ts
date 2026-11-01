// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.081 12.178 1.322.385a.6.6 0 0 0 .721-.809l-.367-.873a1 1 0 0 1 .302-1.172l2.092-1.655a1 1 0 0 1 .977-.15l1.085.414a.6.6 0 0 0 .748-.287l.46-.895a1 1 0 0 1 1.155-.507l4.036 1.114a1 1 0 0 1 .726.834l.39 2.965a.6.6 0 0 1-.476.666l-.77.157a.6.6 0 0 0-.48.558l-.066 1.33a2 2 0 0 1-.67 1.398l-.39.344a2 2 0 0 1-1.132.494l-1.61.157a2 2 0 0 0-.922.33l-.565.381a1 1 0 0 1-.748.152l-4.33-.836a2 2 0 0 1-1.348-.954l-.304-.52a.6.6 0 0 0-.671-.277l-2.666.706a2 2 0 0 1-1.09-.019l-2.852-.861a.6.6 0 0 1-.427-.59l.024-.942a.6.6 0 0 1 .777-.558l1.765.545a2 2 0 0 0 1.143.01l3.606-1.036a1 1 0 0 1 .555.001Z\"/>";
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

/** Build a <At/> icon as a live SVGSVGElement (browser only). */
export function At(options: IconOptions = {}): SVGSVGElement {
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
