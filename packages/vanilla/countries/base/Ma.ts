// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.374 20.859H1.2l4.47-2.485a.5.5 0 0 0 .18-.17l1.58-2.499a.5.5 0 0 0 .06-.397l-.465-1.73a.5.5 0 0 1 .044-.369l2.06-3.78a.5.5 0 0 1 .238-.218l2.749-1.201a.5.5 0 0 0 .268-.285l1.41-3.803a.5.5 0 0 1 .279-.289l.787-.324a.5.5 0 0 1 .624.214l.71 1.242a.5.5 0 0 0 .422.251l4.47.107a.5.5 0 0 1 .478.403l1.116 5.632a.5.5 0 0 1-.497.597l-2.279-.03a.5.5 0 0 0-.264.07l-1.073.645a.5.5 0 0 0-.24.475l.112 1.213a.5.5 0 0 1-.183.435l-3.148 2.549a.5.5 0 0 1-.335.11l-2.631-.11a.5.5 0 0 0-.265.062l-2.263 1.26a.5.5 0 0 0-.257.441z\"/>";
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

/** Build a <Ma/> icon as a live SVGSVGElement (browser only). */
export function Ma(options: IconOptions = {}): SVGSVGElement {
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
