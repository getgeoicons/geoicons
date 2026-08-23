// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.026 5.244a.6.6 0 0 0-.566-.366l-14.078.303a.6.6 0 0 0-.487.268L3.706 8.753a1 1 0 0 1-.344.32l-1.324.743a.6.6 0 0 0-.298.426l-.439 2.672a.6.6 0 0 0 .518.692l2.566.321a1 1 0 0 1 .58.281l1.503 1.487a1 1 0 0 0 1.143.187l1.301-.638a.6.6 0 0 1 .844.382l.532 1.973a1 1 0 0 0 .476.612l1.246.699a1 1 0 0 0 .82.071l2.915-1.022a2 2 0 0 1 .875-.101l3.87.414a.6.6 0 0 0 .631-.4l.444-1.288a2 2 0 0 0 .104-.799l-.05-.69a.6.6 0 0 0-.606-.557l-.947.011a.6.6 0 0 1-.606-.586l-.027-1.177a.6.6 0 0 1 .334-.552l1.296-.64c.32-.159.593-.4.788-.699l.658-1.006a1 1 0 0 0 .084-.936z\"/>";
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

/** Build a <TtChaguanas/> icon as a live SVGSVGElement (browser only). */
export function TtChaguanas(options: IconOptions = {}): SVGSVGElement {
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
