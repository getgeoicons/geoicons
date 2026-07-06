// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.862 17.729-2.135.455a.5.5 0 0 1-.487-.166L4.306 12.17a.5.5 0 0 0-.177-.134l-2.525-1.13a.5.5 0 0 1-.274-.603l.33-1.072a.5.5 0 0 1 .413-.348l1.322-.174a.5.5 0 0 0 .404-.323l.177-.483a.5.5 0 0 1 .422-.325l.92-.088a.5.5 0 0 1 .48.25l.673 1.172a.5.5 0 0 0 .44.252l3.411-.038a.5.5 0 0 0 .291-.097l1.583-1.165a.5.5 0 0 1 .522-.043l1.686.854a.5.5 0 0 0 .596-.11l1.584-1.745a.5.5 0 0 0 .096-.517l-.546-1.41.98-.571a.5.5 0 0 1 .296-.066l1.1.097-.083 2.264a.5.5 0 0 0 .106.326l.778.998a.5.5 0 0 1 .102.25l.24 2.086a.5.5 0 0 1-.483.557l-.679.019a.5.5 0 0 0-.46.344l-.21.64a.5.5 0 0 0 .232.591l2.835 1.583a.5.5 0 0 1 .246.334l.264 1.262a.5.5 0 0 0 .413.392l.989.152v1.27a.5.5 0 0 1-.657.474l-1.218-.402a.5.5 0 0 0-.489.101l-1.59 1.415a.5.5 0 0 1-.265.122l-4.321.59a.5.5 0 0 1-.443-.163l-1.476-1.671a.5.5 0 0 0-.479-.158Z\"/>";
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

/** Build a <Ss/> icon as a live SVGSVGElement (browser only). */
export function Ss(options: IconOptions = {}): SVGSVGElement {
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
