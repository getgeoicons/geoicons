// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.158 17.74 1.191-3.336a.6.6 0 0 0-.264-.72l-.154-.09a.6.6 0 0 0-.767.142l-.652.806a.6.6 0 0 1-.708.172l-.66-.29a2 2 0 0 1-1.095-1.2l-.254-.763a2 2 0 0 1-.088-.386l-.434-3.5a2 2 0 0 1 .188-1.123l.167-.343a2 2 0 0 1 .803-.858l2.56-1.466A4 4 0 0 1 6.7 4.266l2.536-.178a1.5 1.5 0 0 0 .635-.19l.993-.564a1 1 0 0 1 .895-.045l2.303 1.01a2 2 0 0 0 .616.16l5.571.526a1 1 0 0 0 .79-.277l.243-.235a.6.6 0 0 1 .87.038l.344.397a.6.6 0 0 1 .038.736L20.83 8.087a1 1 0 0 1-.887.426l-1.17-.08a1.568 1.568 0 0 0-1.502 2.282l3.47 6.759a1 1 0 0 1-.115 1.087l-1.604 1.971a1 1 0 0 1-.8.369l-3.208-.079a1 1 0 0 1-.72-.332l-1.759-1.96a3 3 0 0 0-1.022-.741l-2.227-.982a1 1 0 0 0-.98.098l-2.202 1.553a.623.623 0 0 1-.946-.719Z\"/>";
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

/** Build a <EeMainland/> icon as a live SVGSVGElement (browser only). */
export function EeMainland(options: IconOptions = {}): SVGSVGElement {
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
