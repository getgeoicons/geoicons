// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.664 9.372-2.058-.348a.25.25 0 0 0-.28.323l1.26 3.918a.5.5 0 0 0 .201.265l2.006 1.312a.5.5 0 0 0 .28.082l.493-.005a.5.5 0 0 0 .43-.748l-.435-.762a.5.5 0 0 1-.064-.212l-.15-2.11a.5.5 0 0 0-.147-.32L3.933 9.51a.5.5 0 0 0-.27-.138Zm8.786 6.2-.81-1.16a.25.25 0 0 1 .227-.393l1.417.121a.5.5 0 0 0 .378-.127l.995-.9 3.263-2.315a.5.5 0 0 0 .136-.145l1.274-2.056a.5.5 0 0 1 .736-.128l2.313 1.838a.5.5 0 0 1 .057.73l-.995 1.082a.5.5 0 0 1-.44.156l-1.792-.262a.5.5 0 0 0-.533.3l-1.087 2.561a.5.5 0 0 1-.497.303l-1.829-.137a.5.5 0 0 0-.198.025l-2.045.695a.5.5 0 0 1-.57-.188Z\"/>";
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

/** Build a <My/> icon as a live SVGSVGElement (browser only). */
export function My(options: IconOptions = {}): SVGSVGElement {
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
