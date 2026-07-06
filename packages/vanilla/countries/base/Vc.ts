// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.268 2.468 9.18 6.583a.5.5 0 0 0-.052.175L8.98 8.18a.5.5 0 0 1-.293.404l-1.43.638a.5.5 0 0 0-.24.23l-1.142 2.233a.5.5 0 0 0-.05.156l-.439 3.037a.5.5 0 0 0 .013.202l.665 2.46a.5.5 0 0 0 .076.162l1.49 2.075a.5.5 0 0 0 .38.208l1.013.053a.5.5 0 0 1 .472.47l.034.576a.5.5 0 0 0 .528.47l.805-.045a.5.5 0 0 1 .392.155l.85.898a.5.5 0 0 0 .341.156l1.664.07a.5.5 0 0 0 .42-.2l1.705-2.265a.5.5 0 0 0 .098-.266l.127-1.79a.5.5 0 0 1 .04-.161l2.09-4.906a.5.5 0 0 0 .04-.206l-.14-7.08a.5.5 0 0 0-.038-.182l-1.289-3.114a.5.5 0 0 0-.164-.21L15.502 1.3a.5.5 0 0 0-.298-.099h-1.962a.5.5 0 0 0-.273.08l-1.528.995a.5.5 0 0 0-.173.193Z\"/>";
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

/** Build a <Vc/> icon as a live SVGSVGElement (browser only). */
export function Vc(options: IconOptions = {}): SVGSVGElement {
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
