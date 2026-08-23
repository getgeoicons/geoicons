// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.887 15.036-5.389 5.37a1 1 0 0 0 .17 1.551l.6.382a1 1 0 0 0 1.288-.184l4.93-5.629a1 1 0 0 0-.098-1.416l-.142-.122a1 1 0 0 0-1.36.048Zm2.14-10.424.295 1.3a1 1 0 0 0 1.083.774l.323-.035a1 1 0 0 0 .779-.533l1.879-3.61a.79.79 0 0 0-1.173-1.001l-2.806 2.08a1 1 0 0 0-.38 1.025Zm4.118 3.928-.657 1.84a.885.885 0 0 0 1.633.678l.842-1.773a.98.98 0 0 0-.487-1.313.99.99 0 0 0-1.331.569Zm3.657-2.652-.424.381a.84.84 0 1 1-1.123-1.252l.425-.38a.84.84 0 0 1 1.122 1.251Z\"/>";
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

/** Build a <VcGrenadines/> icon as a live SVGSVGElement (browser only). */
export function VcGrenadines(options: IconOptions = {}): SVGSVGElement {
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
