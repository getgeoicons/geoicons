// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.917 13.288a.6.6 0 0 0 .14.226l3.286 3.349a.6.6 0 0 0 .305.167l.538.113a.6.6 0 0 0 .686-.378l.466-1.257a.6.6 0 0 0-.216-.698l-.44-.312a.904.904 0 0 1 .893-1.563l1.935.873a.84.84 0 0 1 .495.78.84.84 0 0 0 .76.849l4.81.456a.8.8 0 0 1 .686.55l.176.543a.6.6 0 0 0 .475.408l.34.055a.6.6 0 0 0 .694-.64l-.016-.197a.6.6 0 0 1 .598-.648h.098a1 1 0 0 1 .774.367l.786.96a1 1 0 0 0 .679.362l.278.027a.6.6 0 0 0 .657-.597v-1.624a.6.6 0 0 0-.495-.59l-1.789-.32a1 1 0 0 1-.718-.538l-.144-.287a1 1 0 0 1 .076-1.021l.556-.794a2 2 0 0 0 .362-1.195l-.032-1.348a.6.6 0 0 0-.317-.515l-.863-.461a.6.6 0 0 0-.501-.03l-2.46.96a2 2 0 0 0-.712.475l-1.16 1.202a.6.6 0 0 1-.942-.103L11.765 7.8a1 1 0 0 0-.836-.478l-2.025-.034a1 1 0 0 0-.6.189l-1.334.96a1 1 0 0 1-.87.146l-1.495-.446a2 2 0 0 1-.958-.628l-.82-.972a.6.6 0 0 0-.592-.198l-.317.072a.6.6 0 0 0-.413.834l.682 1.496a2 2 0 0 1 .168 1.047l-.106.958a2 2 0 0 0 .096.864z\"/>";
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

/** Build a <DoSantoDomingo/> icon as a live SVGSVGElement (browser only). */
export function DoSantoDomingo(options: IconOptions = {}): SVGSVGElement {
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
