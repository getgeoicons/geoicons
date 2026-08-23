// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.099 14.243a1 1 0 0 1-.592-.006l-6.273-2.021a.6.6 0 0 1-.412-.636l.06-.552a.6.6 0 0 0-.415-.637l-1.478-.469a.6.6 0 0 1-.403-.71l.295-1.233a.6.6 0 0 0-.487-.732l-.452-.074a.6.6 0 0 1-.503-.568l-.036-.89a1 1 0 0 0-.87-.951L5.67 4.52a.8.8 0 0 0-.562.137l-.976.681a.8.8 0 0 0-.258 1.015l.177.352a.8.8 0 0 1-.233.997l-.814.616a1 1 0 0 0-.34.466l-1.276 3.639a1 1 0 0 0 .173.968l1.953 2.364a1 1 0 0 0 .82.361l4.68-.225a1 1 0 0 1 .413.068l1.06.416a.95.95 0 0 1 .598.822.95.95 0 0 0 .38.7l.196.147a1 1 0 0 0 1.25-.046l1.047-.903a.3.3 0 0 1 .34-.036l.81.441a.3.3 0 0 1 .154.305l-.175 1.274a.3.3 0 0 0 .27.34l1.127.104a.3.3 0 0 0 .323-.25l.14-.856a.3.3 0 0 1 .264-.25l2.917-.32a.6.6 0 0 0 .521-.474l.233-1.11a.6.6 0 0 1 .313-.41l.736-.38a.92.92 0 0 0 .046-1.61l-.16-.095a1 1 0 0 0-.793-.097z\"/>";
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

/** Build a <DoDuarte/> icon as a live SVGSVGElement (browser only). */
export function DoDuarte(options: IconOptions = {}): SVGSVGElement {
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
