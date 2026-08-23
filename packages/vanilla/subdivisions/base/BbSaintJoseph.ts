// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M14.012 22.15a.6.6 0 0 0 .56-.5l.788-4.657a1 1 0 0 1 .58-.747l2.4-1.067c.267-.119.504-.293.695-.513l3.496-4.005a.3.3 0 0 0-.105-.473l-1.45-.634a2 2 0 0 0-.725-.167l-.576-.022a2 2 0 0 1-1.061-.355L16.87 7.803a2 2 0 0 1-.332-.289l-2.634-2.857a3 3 0 0 1-.356-.471l-1.231-2.02a.6.6 0 0 0-.855-.18l-.424.295a1 1 0 0 0-.416.662l-.198 1.235a.8.8 0 0 1-.733.672l-4.457.316a.8.8 0 0 0-.661.445l-3.122 6.341a1 1 0 0 0 .061.99l1.099 1.677a.6.6 0 0 0 .683.242l1-.317a.6.6 0 0 1 .598.139l1.628 1.561a.6.6 0 0 1 .183.467l-.215 3.843a.6.6 0 0 0 .359.583l2.394 1.05a2 2 0 0 0 .908.166z\"/>";
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

/** Build a <BbSaintJoseph/> icon as a live SVGSVGElement (browser only). */
export function BbSaintJoseph(options: IconOptions = {}): SVGSVGElement {
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
