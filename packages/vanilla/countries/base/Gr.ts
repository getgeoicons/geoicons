// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.33 4.871v1.443a.5.5 0 0 1-.136.342l-2.8 2.99a.5.5 0 0 0-.048.623l3.698 5.402a.5.5 0 0 1 .006.555l-.632.973a.5.5 0 0 0 .137.685l1.651 1.13a.5.5 0 0 1 .206.304l.444 2.01a.5.5 0 0 0 .372.378l3.64.872a.5.5 0 0 0 .582-.667l-.573-1.48a.5.5 0 0 1 .155-.572l.816-.65a.5.5 0 0 0 .131-.626l-.602-1.137a.5.5 0 0 1 .243-.694l.706-.304a.5.5 0 0 1 .521.078l1.155.978a.5.5 0 0 0 .654-.006l1.318-1.16a.5.5 0 0 0 .1-.632l-1.226-2.057a.5.5 0 0 0-.314-.23l-1.928-.459a.5.5 0 0 1-.308-.222L9.599 8.41a.5.5 0 0 1-.035-.462l.455-1.057a.5.5 0 0 1 .77-.194l1.241.982a.5.5 0 0 0 .448.089l1.174-.336a.5.5 0 0 0 .357-.549l-.098-.712a.5.5 0 0 1 .253-.506l1.504-.835a.5.5 0 0 1 .321-.056l4.467.71a.5.5 0 0 0 .498-.223l1.644-2.536a.5.5 0 0 0-.163-.701l-1.056-.631a.5.5 0 0 0-.599.064l-1.28 1.2a.5.5 0 0 1-.448.123l-3.42-.74a.5.5 0 0 0-.213 0L4.722 4.384a.5.5 0 0 0-.393.488Z\"/>";
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

/** Build a <Gr/> icon as a live SVGSVGElement (browser only). */
export function Gr(options: IconOptions = {}): SVGSVGElement {
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
