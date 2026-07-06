// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.433 7.443-1.636-.749a.817.817 0 0 1 .665-1.491L6.381 6.9a1 1 0 0 0 .402.082l2.865-.014.214-1.083 1.423.06a1 1 0 0 1 .67.299l1.413 1.437a1 1 0 0 1 .215.33l.473 1.183a1 1 0 0 0 .406.481l.309.19a1 1 0 0 0 1.265-.184l.246-.273a1 1 0 0 1 .823-.328l.19.015a1 1 0 0 1 .626.29l.672.671a1 1 0 0 1 .19.265l1.31 2.663.123.273a1 1 0 0 0 .476.492l.278.135q.132.064.274.088l1.556.257-.652 1.426a1 1 0 0 0-.09.379l-.119 3.157-2.296-.602a1 1 0 0 1-.454-.26l-.134-.134a1 1 0 0 1-.29-.63l-.052-.674a1 1 0 0 0-.589-.837l-.913-.408a1 1 0 0 0-.978.09l-.871.604a1 1 0 0 0-.397.563l-.39 1.449a.6.6 0 0 1-.49.437l-1.199.183a.6.6 0 0 1-.559-.219l-1.77-2.213a1 1 0 0 0-.235-.213l-1.706-1.114a1 1 0 0 1-.45-.93l.045-.471a1 1 0 0 0-.396-.893l-1.247-.936a1 1 0 0 1-.157-.147l-2.008-2.33a1 1 0 0 1-.222-.453l-.185-.903a1 1 0 0 0-.563-.708Z\"/>";
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

/** Build a <NorthernMexico/> icon as a live SVGSVGElement (browser only). */
export function NorthernMexico(options: IconOptions = {}): SVGSVGElement {
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
