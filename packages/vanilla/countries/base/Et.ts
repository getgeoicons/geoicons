// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.396 13.227-.11.443a.5.5 0 0 0 .208.538l2.41 1.6a.5.5 0 0 1 .169.19l1.132 2.24a.5.5 0 0 0 .338.263l1.158.257a.5.5 0 0 1 .188.085l1.581 1.162a.5.5 0 0 0 .227.092l1.855.258a.5.5 0 0 0 .367-.093l1.352-1.003a.5.5 0 0 1 .432-.08l1.246.347a.5.5 0 0 0 .386-.05l1.972-1.155a.5.5 0 0 1 .24-.068l1.768-.047a.5.5 0 0 0 .345-.15l3.604-3.698a.5.5 0 0 0-.183-.818l-5.756-2.147a.5.5 0 0 1-.317-.378l-.23-1.252a.5.5 0 0 0-.516-.409l-.784.039a.5.5 0 0 1-.521-.438l-.058-.463a.5.5 0 0 1 .078-.335l.574-.88a.5.5 0 0 0-.08-.641L11.87 4.239a.5.5 0 0 0-.267-.127l-3.26-.476a.5.5 0 0 0-.256.03l-1.544.61a.5.5 0 0 0-.303.353l-.433 1.864a.5.5 0 0 1-.096.2L3.327 9.67a.5.5 0 0 0-.108.272l-.193 2.353a.5.5 0 0 1-.434.455l-.776.102a.5.5 0 0 0-.42.374Z\"/>";
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

/** Build a <Et/> icon as a live SVGSVGElement (browser only). */
export function Et(options: IconOptions = {}): SVGSVGElement {
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
