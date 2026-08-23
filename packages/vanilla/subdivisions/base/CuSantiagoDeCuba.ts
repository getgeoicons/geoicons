// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.399 16.187a.6.6 0 0 0 .724.465l2.924-.683 6.704-.63 5.78.268c.383.018.763.08 1.132.185l1.69.479c.285.081.582.12.879.113l1.064-.021a.3.3 0 0 0 .255-.448l-1.045-1.842a2 2 0 0 1-.257-1.124l.117-1.706a2 2 0 0 1 .535-1.23l.451-.481a.6.6 0 0 0 .16-.458l-.084-1.073a.6.6 0 0 0-.808-.515l-4.435 1.655a.8.8 0 0 1-.764-.112L14.61 7.654a.8.8 0 0 0-.862-.068l-3.212 1.722a1 1 0 0 0-.513.709l-.47 2.684a1 1 0 0 1-.58.743l-1.365.602a2 2 0 0 1-1.173.137l-1.728-.32a1 1 0 0 0-.583.067l-2.48 1.085a.6.6 0 0 0-.347.67z\"/>";
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

/** Build a <CuSantiagoDeCuba/> icon as a live SVGSVGElement (browser only). */
export function CuSantiagoDeCuba(options: IconOptions = {}): SVGSVGElement {
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
