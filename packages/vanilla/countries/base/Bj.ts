// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.502 4.868-1.73 3.201a.5.5 0 0 0 .176.663l1.322.817a.5.5 0 0 1 .237.43l-.016 1.707a.5.5 0 0 0 .13.34l.734.81a.5.5 0 0 1 .129.345l-.14 8.13a.5.5 0 0 0 .109.319l.758.955a.5.5 0 0 0 .444.186l2.288-.242a.5.5 0 0 0 .447-.504l-.117-8.469a.5.5 0 0 1 .398-.496l.908-.19a.5.5 0 0 0 .343-.26l2.412-4.707a.5.5 0 0 0-.004-.463l-1.274-2.386a.5.5 0 0 1-.01-.452l.332-.69a.5.5 0 0 0-.12-.59l-2.184-1.93a.5.5 0 0 0-.493-.098l-1.172.4a.5.5 0 0 0-.333.546l.125.861a.5.5 0 0 1-.119.402l-.898 1.024a.5.5 0 0 1-.401.17l-1.816-.091a.5.5 0 0 0-.465.262Z\"/>";
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

/** Build a <Bj/> icon as a live SVGSVGElement (browser only). */
export function Bj(options: IconOptions = {}): SVGSVGElement {
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
