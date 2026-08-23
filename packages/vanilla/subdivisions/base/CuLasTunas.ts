// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.469 16.629a.6.6 0 0 0 .512.803l6.576.562a1 1 0 0 0 .993-.578l.06-.131a1 1 0 0 1 1.05-.57l4.944.713a1 1 0 0 0 .67-.14l.658-.408a1 1 0 0 0 .473-.836l.022-1.635a1 1 0 0 1 .951-.985l.711-.035a1 1 0 0 0 .832-.525l.357-.664a1 1 0 0 1 .463-.434l1.304-.6a1 1 0 0 0 .571-.758l.098-.638a.6.6 0 0 0-.475-.679l-2.95-.595a3 3 0 0 1-.708-.238l-4.455-2.144a1 1 0 0 0-.716-.058l-1.208.356a1 1 0 0 0-.698.767L10.8 10.77a2 2 0 0 1-.705 1.17l-1.031.835a1 1 0 0 1-1.272-.011l-.42-.352a1 1 0 0 0-1.17-.084L2.55 14.6a1.5 1.5 0 0 0-.618.76z\"/>";
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

/** Build a <CuLasTunas/> icon as a live SVGSVGElement (browser only). */
export function CuLasTunas(options: IconOptions = {}): SVGSVGElement {
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
