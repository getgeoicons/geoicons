// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.106 12.678-2.176-.633a.5.5 0 0 0-.278 0L4.46 13.25a.5.5 0 0 1-.285-.003l-2.331-.72a.5.5 0 0 0-.647.466l-.03 1.16a.5.5 0 0 0 .356.49l3.35 1.012a.5.5 0 0 0 .266.006l3.315-.84a.5.5 0 0 1 .61.374l.217.952a.5.5 0 0 0 .39.38l5.615 1.123a.5.5 0 0 0 .448-.133l.79-.773a.5.5 0 0 1 .3-.14l2.443-.239a.5.5 0 0 0 .27-.111l1.36-1.118a.5.5 0 0 0 .181-.351l.155-2.185a.5.5 0 0 1 .442-.461l.693-.08a.5.5 0 0 0 .441-.531l-.236-3.454a.5.5 0 0 0-.512-.465l-1.465.037a.5.5 0 0 1-.185-.03L17.225 6.45a.5.5 0 0 0-.616.241l-.674 1.314a.5.5 0 0 1-.623.238l-1.444-.55a.5.5 0 0 0-.488.075l-2.625 2.077a.5.5 0 0 0-.15.586l.802 1.91a.25.25 0 0 1-.3.337Z\"/>";
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

/** Build a <At/> icon as a live SVGSVGElement (browser only). */
export function At(options: IconOptions = {}): SVGSVGElement {
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
