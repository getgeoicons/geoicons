// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.197 14.61-.39-2.63a1 1 0 0 0-.48-.713l-.71-.42a1 1 0 0 1-.482-.737l-.125-.996a1 1 0 0 0-.132-.386L5.306 2.719a.687.687 0 0 1 1.18-.703l1.173 1.961a.5.5 0 0 0 .913-.128l.371-1.395a.687.687 0 0 1 1.332.336l-.482 2.032a1 1 0 0 0 .086.693l1.449 2.782a1 1 0 0 0 .401.413l.659.366a1 1 0 0 1 .405.42l.465.912a1 1 0 0 1 .109.457l-.003.794q0 .16.049.311l.194.6a1 1 0 0 0 .511.59l.665.326a1 1 0 0 1 .452.446l.814 1.608a1 1 0 0 0 .162.23L17.359 17a1 1 0 0 1 .27.683v.787q0 .2.076.383l1.085 2.62a.692.692 0 0 1-1.149.731l-1.907-2.088a1 1 0 0 0-.343-.244l-1.09-.47a1 1 0 0 1-.438-.366l-.517-.78q-.095-.144-.137-.31l-.389-1.555a1 1 0 0 0-.422-.594l-.76-.498a1 1 0 0 1-.441-.69Z\"/>";
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

/** Build a <TheRedSea/> icon as a live SVGSVGElement (browser only). */
export function TheRedSea(options: IconOptions = {}): SVGSVGElement {
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
