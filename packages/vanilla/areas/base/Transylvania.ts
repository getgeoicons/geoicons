// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.627 10.356-2.427.968 2.246 2.489a1 1 0 0 1 .247.526l.107.738a1 1 0 0 0 .528.743l1.513.787a1 1 0 0 1 .4.378l.894 1.51a1 1 0 0 0 .752.484l5.215.566a1 1 0 0 0 .774-.248l.81-.723a1 1 0 0 1 .449-.23l1.607-.358a1 1 0 0 1 .56.037l2.606.951a.6.6 0 0 0 .793-.44l.417-1.97a1 1 0 0 1 .64-.734l.574-.206a.6.6 0 0 0 .396-.53l.054-.93a.58.58 0 0 0-.212-.484.965.965 0 0 0-1.117-.07l-.319.197a1 1 0 0 1-.336.131l-.37.072a1 1 0 0 1-.875-.253l-.222-.209a1 1 0 0 1-.293-.522l-.121-.576a1 1 0 0 1 .024-.507l.506-1.604a1 1 0 0 0-.114-.844l-2.815-4.357a1 1 0 0 0-1.261-.364l-2.794 1.298a1 1 0 0 1-.666.063L8.678 5.35a1 1 0 0 0-.744.103l-1.61.93a1 1 0 0 0-.366.365l-1.835 3.18a1 1 0 0 1-.496.428Z\"/>";
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

/** Build a <Transylvania/> icon as a live SVGSVGElement (browser only). */
export function Transylvania(options: IconOptions = {}): SVGSVGElement {
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
