// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.114 4.17-.775-.276a1 1 0 0 0-1.211.458l-.2.362a1 1 0 0 0-.052.863l.043.105a1 1 0 0 1-.4 1.23l-1.418.876a1 1 0 0 0-.412 1.198l.16.434a1 1 0 0 1-.185 1.005l-1.244 1.42a.587.587 0 0 0 .638.94l.745-.262a1 1 0 0 1 1.234.51l.403.837a.8.8 0 0 1-.328 1.043l-1.456.823a.8.8 0 0 0-.359.968l1.074 2.976a1 1 0 0 0 .896.66l4.308.192a.8.8 0 0 0 .76-.458l.49-1.04a1 1 0 0 1 .767-.563l4.033-.563a1 1 0 0 0 .838-.775l.27-1.217a.6.6 0 0 1 .753-.446l1.13.33a1 1 0 0 0 1.058-.331l.406-.502a1 1 0 0 0 .213-.49l.334-2.387a1 1 0 0 1 .516-.742l2.234-1.202a.6.6 0 0 0 .293-.69l-.03-.108a.6.6 0 0 0-.52-.435l-1.975-.188a.8.8 0 0 1-.712-.938l.13-.723a.6.6 0 0 0-.52-.701l-6.89-.832a1 1 0 0 1-.712-.438l-.593-.89a1 1 0 0 0-.532-.398l-.747-.235a1 1 0 0 0-.772.072l-.875.469a1 1 0 0 1-.808.06Z\"/>";
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

/** Build a <Ad/> icon as a live SVGSVGElement (browser only). */
export function Ad(options: IconOptions = {}): SVGSVGElement {
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
