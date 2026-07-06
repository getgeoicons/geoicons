// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.419 16.84-.285-.051a.5.5 0 0 1-.395-.624l.06-.22a.5.5 0 0 1 .322-.343l1.915-.651a.5.5 0 0 0 .293-.683l-.473-1.027a.5.5 0 0 0-.406-.288l-1.344-.13a.5.5 0 0 1-.347-.805l1.185-1.52a.5.5 0 0 0 .03-.572L2.29 8.829a.5.5 0 0 1 .137-.674l2.124-1.486a.5.5 0 0 0 .213-.415l-.026-2.157a.5.5 0 0 1 .595-.497l1.273.247a.5.5 0 0 0 .207-.003l2.625-.6a.5.5 0 0 1 .48.15l1.894 2.075a.5.5 0 0 0 .327.161l6.973.596a.5.5 0 0 1 .425.675l-.363.954a.5.5 0 0 0 .42.676l2.55.244a.5.5 0 0 1 .44.39l.09.406a.5.5 0 0 1-.46.607l-1.347.08a.5.5 0 0 0-.357.181l-.75.915a.5.5 0 0 0-.107.235l-.63 3.812a.5.5 0 0 1-.624.401l-2.02-.546a.5.5 0 0 0-.625.405l-.291 1.876a.5.5 0 0 1-.352.402l-3.538 1.05a.5.5 0 0 1-.223.014l-1.213-.198a.5.5 0 0 0-.572.4l-.223 1.166a.5.5 0 0 1-.542.403l-5.224-.54a.5.5 0 0 1-.445-.438l-.304-2.523a.5.5 0 0 0-.408-.433Z\"/>";
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

/** Build a <Ad/> icon as a live SVGSVGElement (browser only). */
export function Ad(options: IconOptions = {}): SVGSVGElement {
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
