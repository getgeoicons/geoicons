// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.756 8.645-3.6 8.17a1 1 0 0 0-.06.625l.955 4.187a1 1 0 0 0 .787.76l1.585.304a1 1 0 0 0 .948-.331l.805-.94a1 1 0 0 1 .618-.34l1.293-.184 1.25-1.31-2.44-2.736 5.058-1.548-.952-3.153 4.124-2.52a1 1 0 0 0 .274-.248l.673-.882a1 1 0 0 0 .197-.49l.193-1.636a1 1 0 0 0 0-.23l-.134-1.174a1 1 0 0 1 .663-1.058l.203-.07a1 1 0 0 0 .402-.264l1.032-1.111a.645.645 0 0 0-.755-1.02l-1.523.743a1 1 0 0 1-.61.086l-.7-.121a1 1 0 0 0-.66.113l-1.744.978a1 1 0 0 1-.805.076l-1.618-.539a1 1 0 0 0-.572-.018l-1.875.496a1 1 0 0 1-.637-.042L7.41 2.51 6.8 3.863a1 1 0 0 0-.087.442L6.84 8.21a1 1 0 0 1-.084.435Z\"/>";
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

/** Build a <LevantSimplified/> icon as a live SVGSVGElement (browser only). */
export function LevantSimplified(options: IconOptions = {}): SVGSVGElement {
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
