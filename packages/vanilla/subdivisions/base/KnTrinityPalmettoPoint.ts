// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.344 12.43-.635.6a1 1 0 0 0-.229 1.126l.166.38a1 1 0 0 0 .845.599l1.31.094c.212.015.42.064.616.145l1.77.726a2 2 0 0 1 .971.846l.262.45a2 2 0 0 0 1.044.875l2.033.741c.25.091.517.132.783.119l1.913-.095a1 1 0 0 1 .565.143l.777.468a2 2 0 0 0 .964.285l4.822.165a1 1 0 0 1 .939.767l.15.628a.66.66 0 0 0 1.297-.236l-.157-1.25a2 2 0 0 0-.39-.958l-1.312-1.733a1 1 0 0 1-.203-.612l.009-.991a1 1 0 0 0-.168-.562l-1.134-1.705a.6.6 0 0 1 .13-.806l.98-.762c.13-.1.232-.231.299-.38l.025-.057a1 1 0 0 0-.119-1.018L19.055 8.32a2 2 0 0 1-.41-1.339l.2-3.292a.6.6 0 0 0-.477-.624L13.52 2.07a.6.6 0 0 0-.566.186L9.808 5.734a2 2 0 0 1-.673.487L5.466 7.845a2 2 0 0 0-.95.878l-1.594 2.953a3 3 0 0 1-.578.753Z\"/>";
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

/** Build a <KnTrinityPalmettoPoint/> icon as a live SVGSVGElement (browser only). */
export function KnTrinityPalmettoPoint(options: IconOptions = {}): SVGSVGElement {
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
