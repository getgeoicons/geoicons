// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.604 14.794-.32 1.915a.5.5 0 0 0 .42.577l2.365.352a.5.5 0 0 1 .368.26l.722 1.364a.5.5 0 0 0 .446.267l.573-.006a.5.5 0 0 0 .43-.254l.63-1.113a.5.5 0 0 1 .339-.245l1.58-.31a.5.5 0 0 1 .209.003l4.171.951a.5.5 0 0 0 .173.009l5.793-.724a.5.5 0 0 1 .413.14l1.758 1.734a.25.25 0 0 0 .423-.15l.266-2.311a.5.5 0 0 0-.142-.41l-1.608-1.618a.5.5 0 0 1 .216-.833l1.107-.32a.5.5 0 0 0 .328-.661l-.566-1.46a.5.5 0 0 1 .061-.474l.916-1.268a.5.5 0 0 0 .086-.384l-.67-3.621a.5.5 0 0 0-.468-.409l-3.51-.17a.5.5 0 0 1-.188-.047l-3.343-1.564a.5.5 0 0 0-.204-.047l-2.644-.04a.5.5 0 0 0-.227.052L9.355 5.032a.5.5 0 0 0-.28.443l-.011.876a.5.5 0 0 0 .564.502l2.525-.325a.5.5 0 0 1 .323.068l2.203 1.336a.5.5 0 0 1 .213.593l-.853 2.445a.5.5 0 0 0 .179.57l3.412 2.47a.5.5 0 0 1 .176.579l-.248.664a.5.5 0 0 1-.63.299l-1.235-.42a.5.5 0 0 0-.532.14l-.61.678a.5.5 0 0 1-.431.162l-6.545-.772a.5.5 0 0 1-.12-.029L4.265 14.1a.5.5 0 0 0-.254-.027l-1.99.309a.5.5 0 0 0-.416.412Z\"/>";
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

/** Build a <Ht/> icon as a live SVGSVGElement (browser only). */
export function Ht(options: IconOptions = {}): SVGSVGElement {
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
