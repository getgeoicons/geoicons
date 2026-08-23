// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.64 7.765-.7.14a.814.814 0 0 0-.51 1.26l.522.756a1 1 0 0 0 .79.432l.905.029a1 1 0 0 0 .961-.628l.254-.633a1 1 0 0 1 .453-.509l2.02-1.09a.6.6 0 0 0-.116-1.104L4.721 5.68a.6.6 0 0 0-.697.29l-.702 1.291a1 1 0 0 1-.683.503Zm4.115 3.592-.036-.053a.962.962 0 0 1 .71-1.5l1.76-.155a.6.6 0 0 1 .608.822l-.323.8a1 1 0 0 1-1.033.62l-.965-.103a1 1 0 0 1-.72-.431Zm14.025 6.777-4.7-1.936a.902.902 0 0 1 .621-1.692l4.878 1.574a1 1 0 0 1 .54 1.482l-.11.178a1 1 0 0 1-1.23.394Z\"/>";
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

/** Build a <BsGrandCay/> icon as a live SVGSVGElement (browser only). */
export function BsGrandCay(options: IconOptions = {}): SVGSVGElement {
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
