// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.484 11.675H1.2v5.916a.5.5 0 0 0 .134.34l2.256 2.43a.5.5 0 0 0 .442.154l1.964-.302a.5.5 0 0 1 .203.01l3.886 1.02a.5.5 0 0 0 .51-.164l3.053-3.655a.5.5 0 0 1 .295-.172l2.804-.507-.341-1.312 5.572-1.815-.59-.69a.5.5 0 0 1-.035-.605l1.163-1.725a.5.5 0 0 0 .084-.25l.19-3.121a.5.5 0 0 0-.073-.293l-1.164-1.887a.5.5 0 0 0-.2-.184L17.159 2.75a.5.5 0 0 0-.301-.048l-2.289.352a.5.5 0 0 0-.412.385l-1.123 5.04a.5.5 0 0 0 .096.42l.916 1.15a.5.5 0 0 0 .479.181l.726-.13a.5.5 0 0 1 .587.493v1.546a.5.5 0 0 1-.5.5h-.883a.5.5 0 0 1-.373-.167l-2.916-3.257a.5.5 0 0 0-.652-.081l-.726.49a.5.5 0 0 1-.49.04L4.985 7.676v3.499a.5.5 0 0 1-.5.5Z\"/>";
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

/** Build a <Zm/> icon as a live SVGSVGElement (browser only). */
export function Zm(options: IconOptions = {}): SVGSVGElement {
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
