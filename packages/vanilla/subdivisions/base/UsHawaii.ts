// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.718 10.428a4 4 0 0 0 .35 1.184l1.698 3.583a3 3 0 0 1 .268 1.643l-.341 2.833a1 1 0 0 0 .202.731l.219.283c.254.328.573.6.938.799l1.932 1.051a.6.6 0 0 0 .79-.2l1.566-2.4a3 3 0 0 1 .943-.918l1.982-1.217a3 3 0 0 1 1.452-.441l1.048-.041a2 2 0 0 0 .926-.269l1.753-1.018q.21-.122.4-.277l1.617-1.33a1 1 0 0 0-.023-1.563l-.738-.572a1 1 0 0 1-.307-.396l-.489-1.139a1 1 0 0 0-.77-.594l-.35-.052a1 1 0 0 1-.852-.969l-.02-1.01a1 1 0 0 0-.312-.704L15.458 6.34a5 5 0 0 0-1.582-1.015L9.457 3.552a5 5 0 0 1-.885-.463L6.405 1.664a1 1 0 0 0-1.282.155l-.095.103a1 1 0 0 0-.177 1.097l.977 2.135a1 1 0 0 1-.202 1.123L2.921 8.982a1 1 0 0 0-.284.84z\"/>";
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

/** Build a <UsHawaii/> icon as a live SVGSVGElement (browser only). */
export function UsHawaii(options: IconOptions = {}): SVGSVGElement {
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
