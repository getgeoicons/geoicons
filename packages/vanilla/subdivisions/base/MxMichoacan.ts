// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.75 18.967a1 1 0 0 1-1.217.53l-6.088-1.98a2 2 0 0 1-1.018-.751l-.829-1.18a1 1 0 0 1-.007-1.14l.624-.913a1 1 0 0 1 .9-.433l1.4.105a1 1 0 0 0 .618-.158l2.23-1.447a1 1 0 0 0 .417-1.12l-.705-2.407a1 1 0 0 0-.899-.717l-.492-.03a.896.896 0 0 1-.155-1.766l4.888-1.175a1 1 0 0 1 1.046.39l.226.315a1 1 0 0 0 .862.416l.207-.01a.75.75 0 0 0 .627-.396.75.75 0 0 1 .686-.396l.196.005a1 1 0 0 1 .931.719l.174.593a1 1 0 0 0 .669.676l1.356.411a3 3 0 0 0 1.276.102l1.005-.136a1 1 0 0 0 .682-.415l.596-.846a.987.987 0 0 1 1.79.659l-.326 3.533a1 1 0 0 1-.25.575l-2.738 3.06a1 1 0 0 0-.243.82l.222 1.425a.6.6 0 0 1-.719.68l-5.435-1.162a1 1 0 0 0-1.117.558z\"/>";
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

/** Build a <MxMichoacan/> icon as a live SVGSVGElement (browser only). */
export function MxMichoacan(options: IconOptions = {}): SVGSVGElement {
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
