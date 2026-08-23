// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.205 20.13a2 2 0 0 0 1.607-.272l.935-.624c.265-.177.569-.288.886-.323l3.502-.394q.08-.008.16-.005l3.173.156a1 1 0 0 1 .886.643l.269.706a1 1 0 0 0 .368.468l1.126.774a.598.598 0 0 0 .935-.537l-.149-1.975a12 12 0 0 1 .1-2.687l.017-.112a12 12 0 0 1 1.344-3.983l1.012-1.845a3 3 0 0 0 .28-2.172l-.51-2.033a2 2 0 0 1 .05-1.138l.009-.028a2 2 0 0 1 .73-.976l.572-.408a.511.511 0 0 0-.309-.928l-2.292.053a2 2 0 0 0-.985.286l-3.035 1.827a4 4 0 0 1-.964.42l-3.553 1.014a4 4 0 0 1-1.563.127l-.27-.032a2 2 0 0 1-1.381-.805L7.989 5.1a1 1 0 0 0-1.335-.26l-.766.476a1 1 0 0 0-.462.999l.241 1.596a1 1 0 0 0 .663.796l.57.197a.6.6 0 0 1 .4.648l-.232 1.702a4 4 0 0 1-.693 1.764l-.815 1.156a.6.6 0 0 1-.68.224l-.684-.228a1 1 0 0 0-.881.123l-.792.542a2 2 0 0 0-.787 1.08l-.385 1.291a1 1 0 0 0 .182.916l.675.833a2 2 0 0 0 1.055.677z\"/>";
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

/** Build a <NiNorthCaribbeanCoast/> icon as a live SVGSVGElement (browser only). */
export function NiNorthCaribbeanCoast(options: IconOptions = {}): SVGSVGElement {
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
