// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.056 16.32a1 1 0 0 0 .095.354l.59 1.232a3 3 0 0 1 .28.994l.339 3.347a.6.6 0 0 0 .611.54l.72-.018a.6.6 0 0 0 .552-.403l.658-1.888a.6.6 0 0 1 .44-.39l.882-.19a.6.6 0 0 0 .441-.779l-.731-2.17a1 1 0 0 1 .34-1.113l4.122-3.16a.6.6 0 0 0 .233-.52l-.152-2.08a.6.6 0 0 0-.539-.553l-1.682-.168a1 1 0 0 1-.75-.466L13.06 6.572a2 2 0 0 1-.3-.97l-.139-3.134a1 1 0 0 0-.737-.92l-.937-.256a.6.6 0 0 0-.587.16L8.344 3.515a.6.6 0 0 0-.155.557l.369 1.564a1 1 0 0 1-.402 1.05l-1.369.954a.6.6 0 0 0-.186.776l.979 1.822a3 3 0 0 0 1.067 1.133l1.686 1.041a.6.6 0 0 1 .258.69l-.06.19a.6.6 0 0 1-.581.42l-1.004-.015a1 1 0 0 0-1.012 1.078z\"/>";
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

/** Build a <MxNuevoLeon/> icon as a live SVGSVGElement (browser only). */
export function MxNuevoLeon(options: IconOptions = {}): SVGSVGElement {
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
