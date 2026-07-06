// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.27 11.805H2.222L3.385 13.5a.5.5 0 0 1 .062.441l-.393 1.181a.5.5 0 0 0 .021.37l.587 1.249a.5.5 0 0 1 .047.218l-.016 1.298a.5.5 0 0 1-.03.162l-.45 1.257a.5.5 0 0 0 .593.653l2.094-.523a.5.5 0 0 1 .443.102l3.047 2.56a.5.5 0 0 0 .715-.073l.477-.608a.5.5 0 0 1 .624-.134l.799.417a.5.5 0 0 0 .34.044l1.863-.414a.5.5 0 0 1 .112-.012l5.995.047a.5.5 0 0 0 .471-.321l.231-.605a.5.5 0 0 0-.139-.556l-.437-.38a.5.5 0 0 1-.169-.325L18.779 5.541h2.999L15.468 1.2l.071 2.024a.5.5 0 0 1-.508.518l-4.33-.072a.5.5 0 0 0-.508.505l.036 3.658a.5.5 0 0 1-.263.446l-1.29.692a.5.5 0 0 0-.262.465l.105 2.107a.25.25 0 0 1-.25.262Z\"/>";
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

/** Build a <Mr/> icon as a live SVGSVGElement (browser only). */
export function Mr(options: IconOptions = {}): SVGSVGElement {
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
