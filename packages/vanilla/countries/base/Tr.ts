// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.224 7.494-1.138.275a.5.5 0 0 0-.372.381l-.465 2.173a.5.5 0 0 0 .092.41l.862 1.12a.5.5 0 0 1 .088.429l-.248.966a.5.5 0 0 0 .055.38l.785 1.318a.5.5 0 0 0 .263.215l2.323.82a.5.5 0 0 0 .46-.068l.928-.677a.5.5 0 0 1 .564-.017l1.517.972a.5.5 0 0 0 .476.035l1.609-.731a.5.5 0 0 1 .477.034l1.25.802a.5.5 0 0 0 .664-.113l.594-.76a.5.5 0 0 1 .333-.189l5.505-.68a.5.5 0 0 1 .09-.004l2.163.124a.5.5 0 0 0 .51-.635l-.495-1.749a.5.5 0 0 1-.005-.25l.272-1.171a.5.5 0 0 0-.074-.396l-1.384-2.025a.5.5 0 0 0-.447-.217l-1.3.087a.5.5 0 0 0-.193.053l-1.265.641a.5.5 0 0 1-.255.053l-2.804-.162a.5.5 0 0 1-.193-.05l-2.615-1.29a.5.5 0 0 0-.237-.05l-2.346.077a.5.5 0 0 0-.278.096l-1.518 1.11a.5.5 0 0 1-.367.09l-2.418-.349a.5.5 0 0 1-.305-.165l-.664-.757a.5.5 0 0 0-.494-.156Z\"/>";
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

/** Build a <Tr/> icon as a live SVGSVGElement (browser only). */
export function Tr(options: IconOptions = {}): SVGSVGElement {
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
