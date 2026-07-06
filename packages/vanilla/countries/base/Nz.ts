// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.646 22.656 4.694 21.39a.5.5 0 0 1-.132-.836l5.414-4.75a.5.5 0 0 0 .117-.152l1.528-3.055a.5.5 0 0 1 .568-.262l1.316.33a.5.5 0 0 1 .369.386l.152.761a.5.5 0 0 1-.076.379l-1.033 1.524a.5.5 0 0 0-.08.204l-.218 1.405a.5.5 0 0 1-.308.387l-1.702.685a.5.5 0 0 0-.301.355l-.375 1.687a.5.5 0 0 1-.109.218l-1.602 1.865a.5.5 0 0 1-.576.134Zm8.327-9.821-.414-.132a.5.5 0 0 1-.338-.577l.186-.9a.5.5 0 0 0-.23-.529l-1.203-.733a.5.5 0 0 1-.169-.684l1.046-1.751a.5.5 0 0 0 .008-.5l-2.62-4.698a.5.5 0 0 1 .214-.691l.458-.229a.5.5 0 0 1 .657.198l2.999 5.215a.5.5 0 0 0 .24.212l.774.324a.5.5 0 0 0 .54-.102l.43-.416a.5.5 0 0 1 .458-.128l.507.114a.5.5 0 0 1 .37.627l-.26.897a.5.5 0 0 1-.19.27l-1.414.998a.5.5 0 0 0-.164.197l-1.28 2.752a.5.5 0 0 1-.605.266Z\"/>";
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

/** Build a <Nz/> icon as a live SVGSVGElement (browser only). */
export function Nz(options: IconOptions = {}): SVGSVGElement {
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
