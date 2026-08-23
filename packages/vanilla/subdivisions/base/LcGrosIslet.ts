// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.704 14.938a1 1 0 0 1 1.35.982l-.14 3.051a2 2 0 0 1-.158.695l-.842 1.967a.763.763 0 0 0 .987 1.008l2.024-.818a2 2 0 0 1 .96-.134l4.929.524a1 1 0 0 0 .976-.501l.154-.272a2 2 0 0 0 .202-1.461l-.137-.557a2 2 0 0 0-.356-.743l-.5-.652a2 2 0 0 1-.413-1.27l.032-1.273a2 2 0 0 0-.138-.783l-.8-2.036a1 1 0 0 1-.006-.717l.616-1.643a1 1 0 0 0-.288-1.112l-4.08-3.476a1 1 0 0 1-.282-1.126l.253-.646a1 1 0 0 0 .025-.656l-.194-.638a1 1 0 0 0-.728-.682l-2.441-.574a1 1 0 0 0-1.153.592l-.215.52a1 1 0 0 1-1.047.61l-1.08-.133a.897.897 0 1 0-.13 1.787l.704.016a1 1 0 0 1 .841.495l.042.072a1 1 0 0 1 .075.847l-.037.104a1 1 0 0 1-.613.602l-1.007.347a1.98 1.98 0 0 0-1.294 2.257l.305 1.524a3 3 0 0 0 .47 1.112l1.576 2.29a1 1 0 0 0 .194.21l.233.189a1 1 0 0 0 .98.159z\"/>";
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

/** Build a <LcGrosIslet/> icon as a live SVGSVGElement (browser only). */
export function LcGrosIslet(options: IconOptions = {}): SVGSVGElement {
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
