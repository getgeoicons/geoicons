// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.163 6.576a.6.6 0 0 0-.547-.457l-4.243-.258a4 4 0 0 0-.73.023l-3.798.467a4 4 0 0 0-1.322.402l-1.24.63a2 2 0 0 1-.696.205l-.751.079a2 2 0 0 0-1.031.42L6.287 9.284a2 2 0 0 1-1.234.43h-.24a2 2 0 0 0-1.202.407L1.53 11.7a.6.6 0 0 0-.213.649l.043.143a.6.6 0 0 0 .804.384l.77-.317a.6.6 0 0 1 .81.705l-.214.822a1 1 0 0 0 .138.81l.748 1.11a.6.6 0 0 0 .72.223l.49-.196a.6.6 0 0 1 .817.475l.148 1.067a.6.6 0 0 0 .58.518l2.514.055a.6.6 0 0 0 .612-.56l.021-.316a.6.6 0 0 1 .627-.56l3.76.176a1 1 0 0 0 .794-.336l1.262-1.422a1 1 0 0 0 .235-.848l-.273-1.46a1 1 0 0 1 .889-1.18l1.653-.156c.329-.03.66.02.964.148l.967.407a.6.6 0 0 0 .804-.369l.625-1.935a2 2 0 0 0 .04-1.087z\"/>";
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

/** Build a <CuHavana/> icon as a live SVGSVGElement (browser only). */
export function CuHavana(options: IconOptions = {}): SVGSVGElement {
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
