// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.116 13.904a1 1 0 0 0-.232.96l1.352 4.71a.6.6 0 0 0 .273.353l1.31.77a.6.6 0 0 1 .293.46l.1 1.058a.6.6 0 0 0 .642.541l3.663-.271a2 2 0 0 0 1.208-.525l1.338-1.235a1 1 0 0 0 .322-.772l-.027-.734a1 1 0 0 1 .601-.955l1.838-.796a1 1 0 0 1 .522-.074l1.746.219a3 3 0 0 0 1.126-.072l2.848-.738a1.62 1.62 0 0 0 1.081-2.212l-1.064-2.462a5 5 0 0 0-1.137-1.633L14.444 5.27a3 3 0 0 1-.569-.745L12.35 1.699a.776.776 0 0 0-1.397.064l-.317.74a1 1 0 0 1-.744.591l-1.406.25a1 1 0 0 0-.595.346l-1.45 1.75a2 2 0 0 0-.376 1.856l.212.7a2 2 0 0 1-.454 1.947z\"/>";
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

/** Build a <PaLosSantos/> icon as a live SVGSVGElement (browser only). */
export function PaLosSantos(options: IconOptions = {}): SVGSVGElement {
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
