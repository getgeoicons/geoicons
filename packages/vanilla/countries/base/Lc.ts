// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.207 6.045-3.478 7.35a.5.5 0 0 0 .15.612l.612.464a.5.5 0 0 1 .197.383l.03.963a.5.5 0 0 1-.133.354l-.554.602a.5.5 0 0 0-.027.646l1.868 2.396a.5.5 0 0 0 .337.19l1.502.174q.12.016.221.082l1.541 1.04a.5.5 0 0 1 .217.353l.084.682a.5.5 0 0 0 .524.438l.588-.033a.5.5 0 0 0 .452-.64l-.235-.796a.5.5 0 0 1 .036-.371l.657-1.268a.5.5 0 0 1 .239-.225l.76-.342a.5.5 0 0 0 .28-.343l.949-4.064a.5.5 0 0 0 .002-.215l-.577-2.797a.5.5 0 0 1 .063-.361l.66-1.083a.5.5 0 0 0 .07-.198l.189-1.505a.5.5 0 0 0-.019-.21L16.6 5.694a.5.5 0 0 1-.018-.215l.146-1.083a.5.5 0 0 0-.227-.488l-.92-.587a.5.5 0 0 1-.222-.335l-.197-1.12a.5.5 0 0 0-.383-.402l-.86-.193a.5.5 0 0 0-.516.196l-.246.344a.5.5 0 0 0-.092.242l-.074.737a.5.5 0 0 1-.247.383l-.58.336a.5.5 0 0 0-.24.344l-.275 1.523a.5.5 0 0 1-.523.41l-.435-.027a.5.5 0 0 0-.483.285Z\"/>";
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

/** Build a <Lc/> icon as a live SVGSVGElement (browser only). */
export function Lc(options: IconOptions = {}): SVGSVGElement {
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
