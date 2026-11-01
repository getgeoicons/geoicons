// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.645 11.391.027 5.85a1 1 0 0 0 .19.581l1.479 2.043a1 1 0 0 1 .168.792l-.26 1.236a.6.6 0 0 0 .715.71l2.05-.446a1 1 0 0 0 .693-.552l1.102-2.344a1 1 0 0 1 .826-.571l.164-.013a1 1 0 0 1 .713.224l.797.653a2 2 0 0 0 1.289.453l1.443-.015a1 1 0 0 0 .922-.637l.587-1.505a1 1 0 0 1 .423-.498l1.32-.78a1 1 0 0 0 .461-.618L17 14.97a1 1 0 0 1 .465-.62l4.175-2.45a.6.6 0 0 0 .092-.968l-.425-.373a1 1 0 0 0-.424-.22l-1.161-.282a1 1 0 0 1-.711-.65l-.49-1.441a2 2 0 0 0-.735-.986l-2.247-1.597a2 2 0 0 1-.66-.796l-1.112-2.425a1 1 0 0 0-1.377-.467L9.93 2.996a.3.3 0 0 1-.405-.125l-.502-.95a.3.3 0 0 0-.314-.156l-4.387.72a.3.3 0 0 0-.252.299l.075 8.007a.3.3 0 0 1-.3.303l-1.9-.004a.3.3 0 0 0-.3.301Z\"/>";
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

/** Build a <Bw/> icon as a live SVGSVGElement (browser only). */
export function Bw(options: IconOptions = {}): SVGSVGElement {
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
