// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.025 17.056a1 1 0 0 0 .57-.481l.746-1.407a.6.6 0 0 0-.521-.88l-1.541-.024a.6.6 0 0 1-.59-.565l-.424-7.116a.3.3 0 0 0-.3-.282l-17.47.073a.3.3 0 0 0-.299.296l-.037 2.69a.3.3 0 0 0 .432.274L3.812 8.55a4 4 0 0 1 1.478-.396l3.159-.218a1 1 0 0 1 .722.24l3.734 3.216a.6.6 0 0 1 .118.772l-.775 1.245a1 1 0 0 0 .327 1.38l3.268 2.003a.493.493 0 0 0 .733-.547l-.86-3.213a4 4 0 0 1-.133-1.17l.076-2.212a.855.855 0 0 1 1.707-.045l.419 4.773c.028.326.11.645.242.945l.68 1.546a1 1 0 0 0 1.228.547z\"/>";
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

/** Build a <UsMaryland/> icon as a live SVGSVGElement (browser only). */
export function UsMaryland(options: IconOptions = {}): SVGSVGElement {
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
