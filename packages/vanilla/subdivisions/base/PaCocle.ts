// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.555 15.606a.3.3 0 0 1-.112.426l-3.196 1.7a3 3 0 0 1-1.358.35l-1.952.033a2 2 0 0 0-1.382.587l-1.014 1.016a2 2 0 0 0-.584 1.405l-.005 1.278a.3.3 0 0 1-.384.287L5.61 21.24a.6.6 0 0 1-.395-.78l.624-1.721a2 2 0 0 0-.134-1.657l-2.18-3.906a.6.6 0 0 1 .162-.77l1.282-.969a2 2 0 0 0 .666-.89l.68-1.807a2 2 0 0 1 1.338-1.22l1.233-.343a1 1 0 0 0 .723-.83l.23-1.7a.6.6 0 0 1 .75-.5l2.807.752a1 1 0 0 0 1.015-.312l2.374-2.743a.6.6 0 0 1 .975.096l.94 1.656a.6.6 0 0 1 .015.563l-.66 1.33a1 1 0 0 0-.015.857l.591 1.31a3 3 0 0 1 .253.952l.44 4.656a2 2 0 0 0 .304.888z\"/>";
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

/** Build a <PaCocle/> icon as a live SVGSVGElement (browser only). */
export function PaCocle(options: IconOptions = {}): SVGSVGElement {
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
