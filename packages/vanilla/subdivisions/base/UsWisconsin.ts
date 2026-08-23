// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.02 7.134a1 1 0 0 0-.64-.68L9.022 3.607a.6.6 0 0 1-.391-.705l.162-.691a.6.6 0 0 0-.757-.712L3.934 2.731a.6.6 0 0 0-.427.583l.032 2.124a1 1 0 0 1-.265.693L1.87 7.655a1 1 0 0 0-.263.733l.192 3.445a1 1 0 0 0 .378.729l4.197 3.322a1 1 0 0 1 .368.636l.653 4.376a1 1 0 0 0 .325.6L8.851 22.5a1 1 0 0 0 .658.252l9.239.046a.3.3 0 0 0 .3-.333l-.326-2.9c-.036-.327.009-.66.131-.966l3.383-8.441a.664.664 0 0 0-1.166-.621l-2.44 3.585a.699.699 0 0 1-1.218-.675l1.133-2.58a1 1 0 0 0 .048-.67z\"/>";
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

/** Build a <UsWisconsin/> icon as a live SVGSVGElement (browser only). */
export function UsWisconsin(options: IconOptions = {}): SVGSVGElement {
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
