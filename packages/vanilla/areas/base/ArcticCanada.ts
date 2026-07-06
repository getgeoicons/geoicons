// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.433 13.529.636 1.907a1 1 0 0 0 .839.678l3.655.402a.6.6 0 0 0 .582-.902l-.284-.478a1 1 0 0 1 .483-1.437l.946-.385a1 1 0 0 1 1.262.46l.29.553a1 1 0 0 0 .976.53l2.385-.217a1 1 0 0 1 .61.142l1.486.904a1 1 0 0 1 .464 1.034l-.378 2.08a.6.6 0 0 0 .513.703l3.676.477a1 1 0 0 0 1.125-1.074l-.262-3.212a1 1 0 0 0-.563-.82l-7.138-3.434a1 1 0 0 1-.54-.676l-.46-1.993a1 1 0 0 1-.01-.403l.956-5.305a1 1 0 0 0-.537-1.072l-.232-.116a1 1 0 0 0-1.018.073l-1.686 1.173a1 1 0 0 0-.293.317L9.757 5.425a1 1 0 0 1-.458.41L3.398 8.458a1 1 0 0 0-.412.339L1.709 10.61a1 1 0 0 0 .147 1.317l1.3 1.175a1 1 0 0 1 .277.426Zm9.577 7.651.127-1.154a.6.6 0 0 1 .872-.467l1.84.952a1 1 0 0 1 .485.558l.12.342a1 1 0 0 1-.944 1.33h-.436a1 1 0 0 1-.388-.078l-1.071-.45a1 1 0 0 1-.606-1.033Z\"/>";
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

/** Build a <ArcticCanada/> icon as a live SVGSVGElement (browser only). */
export function ArcticCanada(options: IconOptions = {}): SVGSVGElement {
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
