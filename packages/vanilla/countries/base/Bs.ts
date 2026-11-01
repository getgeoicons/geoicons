// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.521 3.852 1.87-.316A.962.962 0 0 1 6.5 4.646a.962.962 0 0 0 .898 1.124l.117.006a1 1 0 0 0 1.016-.732l.367-1.325a1 1 0 0 0-.361-1.065L7.36 1.766a2 2 0 0 0-1.665-.35l-2.546.6a.937.937 0 0 0 .371 1.836Zm1.042 4.307.858-.146a1 1 0 0 1 1.116.67l1.114 3.34a1 1 0 0 1-.443 1.18l-.124.072a1 1 0 0 1-1.377-.37L3.86 9.637a1 1 0 0 1 .703-1.478Zm4.829.008 2.329 3.091a1 1 0 0 1 .175.83l-.274 1.164a1 1 0 0 0 .326.992l4.498 3.816a1 1 0 0 0 1.467-.19l.303-.434a1 1 0 0 0-.573-1.542l-1.429-.363a1 1 0 0 1-.723-.726l-.894-3.563a2 2 0 0 0-.478-.878l-3.226-3.457a.981.981 0 0 0-1.501 1.26Zm9.279 12.465 1.9-.744a1 1 0 0 1 1.288.55l.042.1a1 1 0 0 1-.602 1.328l-1.932.66a1.01 1.01 0 0 1-1.21-.483 1.01 1.01 0 0 1 .514-1.411Z\"/>";
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

/** Build a <Bs/> icon as a live SVGSVGElement (browser only). */
export function Bs(options: IconOptions = {}): SVGSVGElement {
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
