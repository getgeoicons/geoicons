// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.968 12.414a3 3 0 0 1 1.108-.548l4.25-1.094a3 3 0 0 0 1.129-.565l5.007-4.013a2 2 0 0 1 1.521-.422l5.231.713a.6.6 0 0 1 .518.55l.043.583a.6.6 0 0 1-.242.527l-1.51 1.111a.6.6 0 0 1-.615.058l-2.457-1.179a.6.6 0 0 0-.821.33l-1.084 2.88a1 1 0 0 1-1.35.559l-1.317-.6a.6.6 0 0 0-.81.334l-.512 1.358a1 1 0 0 1-1.049.641l-1.28-.146a1 1 0 0 0-.74.215l-1.199.964a.6.6 0 0 1-.437.13l-1.64-.17a.6.6 0 0 0-.567.276l-1.893 2.977a.3.3 0 0 1-.524-.034l-1.326-2.825a.6.6 0 0 1 .172-.726z\"/>";
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

/** Build a <PaColon/> icon as a live SVGSVGElement (browser only). */
export function PaColon(options: IconOptions = {}): SVGSVGElement {
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
