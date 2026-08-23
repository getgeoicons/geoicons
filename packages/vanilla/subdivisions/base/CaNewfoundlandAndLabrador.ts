// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.65 10.314-.828-.274a1 1 0 0 0-1.067.29l-.165.188a1 1 0 0 0-.234.825l.256 1.52a1 1 0 0 0 .365.617l1.436 1.138a.97.97 0 0 0 1.208-.005.97.97 0 0 1 .711-.21l4.955.535a1 1 0 0 0 .656-.159l.452-.297a1 1 0 0 0 .45-.88l-.032-.706a2 2 0 0 0-.486-1.22l-.948-1.094a2 2 0 0 0-.783-.554l-1.052-.411a2 2 0 0 1-.736-.5l-.621-.67a1 1 0 0 1-.265-.743l.068-1.089a1 1 0 0 0-.112-.527L8.49 1.536a.561.561 0 0 0-1.047.372L8.917 9.19a.98.98 0 0 1-1.268 1.124Zm6.83 6.646-1.997 4.01a.566.566 0 0 0 .575.816l1.465-.177a.755.755 0 0 1 .79.466.76.76 0 0 0 .617.467l1.536.169c.474.052.92-.243 1.064-.698.125-.392.127-.817.003-1.209l-.383-1.221a1 1 0 0 0-.655-.654l-.771-.242a1 1 0 0 1-.505-1.55l.233-.314a.653.653 0 0 0-.909-.917l-.448.325a2 2 0 0 0-.616.728Z\"/>";
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

/** Build a <CaNewfoundlandAndLabrador/> icon as a live SVGSVGElement (browser only). */
export function CaNewfoundlandAndLabrador(options: IconOptions = {}): SVGSVGElement {
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
