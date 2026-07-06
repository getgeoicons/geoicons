// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.604 22.8-7.13-7.319.845-1.609a1 1 0 0 0 .106-.592l-.21-1.628a1 1 0 0 0-.148-.408L8.877 9.37a1 1 0 0 1-.155-.551l.061-4.063a1 1 0 0 0-.43-.837l-.703-.486a1 1 0 0 1-.423-.704l-.032-.268a1 1 0 0 1 .714-1.079l.181-.053a1 1 0 0 1 .832.127l1.353.898a1 1 0 0 1 .382.477l1.088 2.858a.6.6 0 0 0 .794.34l1.454-.612a.6.6 0 0 1 .77.286l.165.333a.6.6 0 0 1-.14.719l-1.033.907a.6.6 0 0 0 .026.922l.845.663a1 1 0 0 1 .33.466l.73 2.153a1 1 0 0 1 .05.387l-.188 2.852a1 1 0 0 0 .057.404l1.227 3.413a1 1 0 0 1 .056.42z\"/>";
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

/** Build a <CoromandelPeninsula/> icon as a live SVGSVGElement (browser only). */
export function CoromandelPeninsula(options: IconOptions = {}): SVGSVGElement {
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
