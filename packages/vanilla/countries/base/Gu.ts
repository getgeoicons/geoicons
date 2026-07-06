// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" stroke-opacity=\".8\" d=\"m18.712 8.475-6.791 5.136a.5.5 0 0 0-.17.235l-.6 1.72a.5.5 0 0 0-.024.233c.065.547.291 2.844-.282 4.21-.442 1.055-.532 1.756-1.532 2.31-.613.34-1.035.538-1.732.467-.757-.078-1.23-.343-1.71-.933-.372-.456-.527-1.345-.567-1.61a.6.6 0 0 0-.043-.149l-1.024-2.246a.5.5 0 0 1 .005-.427l1.176-2.407a.5.5 0 0 0-.064-.538l-1.456-1.76a.5.5 0 0 1 .232-.794l3.776-1.215a.5.5 0 0 1 .153-.025h1.96a.5.5 0 0 0 .419-.227l.597-.92a.5.5 0 0 1 .204-.179l1.11-.53a.5.5 0 0 0 .282-.395l.11-.973a.5.5 0 0 1 .09-.235l1.119-1.562a.5.5 0 0 0 .093-.291V3.593a.5.5 0 0 1 .062-.24l.943-1.719a.5.5 0 0 1 .675-.2l.652.35a.5.5 0 0 1 .18.165l1.121 1.69a.5.5 0 0 0 .334.217l1.936.326a.5.5 0 0 1 .377.689L18.87 8.273a.5.5 0 0 1-.158.202Z\"/>";
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

/** Build a <Gu/> icon as a live SVGSVGElement (browser only). */
export function Gu(options: IconOptions = {}): SVGSVGElement {
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
