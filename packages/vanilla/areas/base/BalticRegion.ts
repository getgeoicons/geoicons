// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.434 12.616.406 4.213a1 1 0 0 0 .71.863l1.852.55a1 1 0 0 1 .707 1.088l-.12.925a1 1 0 0 0 .172.704l.914 1.301a1 1 0 0 0 1.024.405l3.54-.744a1 1 0 0 0 .79-1.083l-.082-.781a1 1 0 0 1 .442-.939l1.053-.697a1 1 0 0 0 .448-.877l-.03-.67a1 1 0 0 1 .876-1.036l.87-.109a1 1 0 0 0 .718-.451l.58-.902a1 1 0 0 0 .071-.949L17.767 9.83a1 1 0 0 1 .067-.94l.321-.512a1 1 0 0 0-.018-1.092L16.71 5.178a.9.9 0 0 1 .767-1.402l.337.008a.6.6 0 0 0 .566-.362l.313-.725a.6.6 0 0 0-.462-.831l-4.208-.63a1 1 0 0 0-.472.043l-1.782.61a1 1 0 0 0-.236.118l-1.522 1.03a1 1 0 0 0-.39 1.135l.454 1.412a1 1 0 0 0 .604.63l.502.187a1 1 0 0 1 .651.958l-.054 2.597a1 1 0 0 1-.353.742l-.495.42a1 1 0 0 1-1.15.101l-.343-.2a1 1 0 0 1-.388-.408l-.916-1.787a.6.6 0 0 0-.757-.283l-.788.316a1 1 0 0 0-.501.44l-1.531 2.735a1 1 0 0 0-.123.584Z\"/>";
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

/** Build a <BalticRegion/> icon as a live SVGSVGElement (browser only). */
export function BalticRegion(options: IconOptions = {}): SVGSVGElement {
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
