// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.52 12.627a.65.65 0 0 1-.323.871l-2.448 1.105c-.22.1-.42.237-.59.407l-.714.712a1 1 0 0 0-.29.807l.134 1.345a1 1 0 0 1-.832 1.086l-1.806.299a1 1 0 0 1-.773-.194l-.931-.717a1 1 0 0 1-.36-.546l-.12-.474a1 1 0 0 0-1.365-.672l-.36.155a1 1 0 0 1-.73.024L8.154 15.82a1 1 0 0 1-.432-.3l-.745-.89a2 2 0 0 0-1.221-.69l-1.11-.175a.8.8 0 0 1-.672-.865l.056-.591a1 1 0 0 0-.996-1.093h-.888a.8.8 0 0 1-.789-.663l-.07-.404a1 1 0 0 1 .267-.867l.667-.69a2 2 0 0 0 .463-.768l.208-.638a2 2 0 0 1 .49-.795l1.361-1.356a.575.575 0 0 1 .979.355l.139 1.542a1 1 0 0 1-.097.527l-.35.722A1 1 0 0 0 5.59 9.31l1.167 1.22a2 2 0 0 0 .837.523l4.817 1.537a3 3 0 0 0 1.24.124l5.564-.613q.382-.042.764-.011l2.003.163a.65.65 0 0 1 .537.374Z\"/>";
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

/** Build a <CaPrinceEdwardIsland/> icon as a live SVGSVGElement (browser only). */
export function CaPrinceEdwardIsland(options: IconOptions = {}): SVGSVGElement {
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
