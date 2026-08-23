// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.955 9.184a.698.698 0 0 0-.318 1.293l1.21.74a1 1 0 0 0 .64.14l1.59-.19a2 2 0 0 1 1.283.28l1.112.683a3 3 0 0 1 1.133 1.253l.756 1.564a1 1 0 0 0 .914.565l.924-.012a.594.594 0 0 0 .41-1.018l-.379-.372a.967.967 0 0 1 .391-1.612l.305-.095c.89-.277 1.813-.428 2.744-.45l1.256-.029c.623-.014 1.247.03 1.863.132l3.906.646a.6.6 0 0 0 .645-.838l-.717-1.591a1 1 0 0 0-.973-.588l-5.472.331a.6.6 0 0 1-.528-.254l-.563-.803a.6.6 0 0 0-.571-.25l-3.146.422a3 3 0 0 1-.813-.003l-1.868-.26a3 3 0 0 0-.613-.023z\"/>";
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

/** Build a <HtSud/> icon as a live SVGSVGElement (browser only). */
export function HtSud(options: IconOptions = {}): SVGSVGElement {
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
