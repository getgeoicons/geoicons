// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.861 16.913v1.774q0 .068-.018.133l-.957 3.484a.5.5 0 0 1-.278.323l-.217.098a.5.5 0 0 1-.346.023l-.629-.186a.5.5 0 0 1-.19-.104l-.378-.334a.5.5 0 0 1-.154-.254l-.143-.572a.5.5 0 0 1-.01-.19l.168-1.221a.5.5 0 0 0-.06-.313l-2.45-4.367a.5.5 0 0 1 .154-.657l.52-.357a.5.5 0 0 0 .2-.544L9.552 8.11a.5.5 0 0 0-.06-.137l-.385-.602a.5.5 0 0 0-.151-.151l-.493-.317a.5.5 0 0 0-.19-.073l-1.768-.29V3.92l2.347-1.156h2.562a.5.5 0 0 0 .5-.5V1.2h2.743a.5.5 0 0 1 .218.05l2.346 1.14-.495 2.414a.5.5 0 0 0 .11.426l.515.6a.5.5 0 0 1 .117.384l-.223 1.89a.5.5 0 0 1-.188.335l-.612.478a.5.5 0 0 0-.189.338l-.382 3.387a.5.5 0 0 0 .033.242l.695 1.737a.5.5 0 0 1-.001.374l-.704 1.73a.5.5 0 0 0-.037.188Z\"/>";
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

/** Build a <Gi/> icon as a live SVGSVGElement (browser only). */
export function Gi(options: IconOptions = {}): SVGSVGElement {
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
