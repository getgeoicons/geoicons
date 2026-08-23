// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.446 5.544a1 1 0 0 0-.768-.894l-5.245-1.237a1 1 0 0 1-.76-.832l-.054-.373a1 1 0 0 0-.315-.598l-.14-.127a1 1 0 0 0-.652-.262l-.327-.007a1 1 0 0 0-.934.59l-.058.13a1 1 0 0 1-1 .585l-3.448-.306a1 1 0 0 0-1.06.763l-.553 2.296a.3.3 0 0 0 .167.343l3.747 1.714 4.046 2.084a.6.6 0 0 1 .101 1l-1.658 1.333a1 1 0 0 0-.364.915l.545 3.98c.067.487.223.958.46 1.388l2.23 4.047a.6.6 0 0 0 .964.12l1.207-1.293a1 1 0 0 0 .27-.7l-.012-.635a1 1 0 0 1 .472-.867l1.4-.87a1 1 0 0 0 .44-.6l.681-2.637a1 1 0 0 0-.222-.916L13.87 9.486a.8.8 0 0 1-.186-.696l.148-.71a1 1 0 0 1 1.285-.747l4.582 1.475a.8.8 0 0 0 .992-.476l.006-.015a.8.8 0 0 0-.31-.955l-1.483-.969a1 1 0 0 1-.45-.758z\"/>";
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

/** Build a <DoHatoMayor/> icon as a live SVGSVGElement (browser only). */
export function DoHatoMayor(options: IconOptions = {}): SVGSVGElement {
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
