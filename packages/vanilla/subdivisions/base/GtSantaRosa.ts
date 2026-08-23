// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.574 8.471a1 1 0 0 0-.472.533l-2.149 5.697a2 2 0 0 0-.11.98l.34 2.463a.6.6 0 0 0 .492.51c4.688.841 7.35 1.795 11.498 3.856A.604.604 0 0 0 16 22.2l.54-1.31a1 1 0 0 0-.255-1.124l-1.92-1.73a1.008 1.008 0 0 1 .563-1.747l.49-.052a1.5 1.5 0 0 1 .914.195l1.14.664a.6.6 0 0 0 .721-.09l.543-.53a.6.6 0 0 0-.107-.94l-.394-.242a.6.6 0 0 1-.172-.865l.322-.44a.6.6 0 0 1 .622-.232l.966.227a.6.6 0 0 0 .682-.332l.18-.388a1 1 0 0 0 .072-.619l-.38-1.878a1 1 0 0 0-.562-.709L17.213 8.79a.8.8 0 0 1-.46-.813l.137-1.27a.8.8 0 0 1 .779-.714l2.434-.05a.8.8 0 0 0 .77-.658l.269-1.486a.8.8 0 0 0-.288-.767l-1.86-1.488a.8.8 0 0 0-.482-.175l-7.105-.159a.8.8 0 0 0-.73.436l-2.61 5.105a2 2 0 0 1-.853.861z\"/>";
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

/** Build a <GtSantaRosa/> icon as a live SVGSVGElement (browser only). */
export function GtSantaRosa(options: IconOptions = {}): SVGSVGElement {
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
