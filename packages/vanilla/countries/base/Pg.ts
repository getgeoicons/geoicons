// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.224 15.506 1.2 6.33l5.81 2.23a.5.5 0 0 1 .277.26l.552 1.219a.5.5 0 0 0 .259.253l2.393 1.024c.17.073.205.3.064.42l-1.091.93 5.509 4.194a.5.5 0 0 1 .129.65l-.299.51a.5.5 0 0 1-.683.18l-1.27-.74a.5.5 0 0 0-.18-.063l-2.186-.314a.5.5 0 0 1-.326-.192l-2.006-2.625a.5.5 0 0 0-.347-.194l-2.003-.203a.5.5 0 0 0-.52.329l-.556 1.544a.5.5 0 0 1-.484.33l-2.531-.067a.5.5 0 0 1-.487-.499ZM12.161 10.8l-.005-.01a.5.5 0 0 1 .4-.722l1.977-.184a.5.5 0 0 0 .333-.172l.886-1.033a.5.5 0 0 0-.144-.767l-2.235-1.191a.5.5 0 0 1-.196-.693l.128-.22a.5.5 0 0 1 .453-.247l.794.033a.5.5 0 0 1 .197.05l2.268 1.097a.5.5 0 0 1 .097.062l1.211.98a.5.5 0 0 1 .184.353l.072.992a.5.5 0 0 1-.153.397l-1.064 1.021a.5.5 0 0 1-.128.09l-2.454 1.188a.5.5 0 0 1-.407.013l-1.955-.797a.5.5 0 0 1-.259-.24Zm8.821 1.88L19.77 10.9a.5.5 0 0 1 .032-.604l.37-.437a.5.5 0 0 1 .766.003l1.498 1.802a.5.5 0 0 1-.116.742l-.657.417a.5.5 0 0 1-.681-.141Z\"/>";
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

/** Build a <Pg/> icon as a live SVGSVGElement (browser only). */
export function Pg(options: IconOptions = {}): SVGSVGElement {
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
