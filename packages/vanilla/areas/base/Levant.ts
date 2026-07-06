// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.236 8.81-3.42 7.767a1 1 0 0 0-.06.625l.9 3.948a1 1 0 0 0 .786.76l1.455.278a1 1 0 0 0 .948-.331l.739-.862a1 1 0 0 1 .618-.34l1.215-.173 1.192-1.248-2.326-2.61 4.822-1.475-.908-3.007 3.925-2.399a1 1 0 0 0 .274-.247l.628-.824a1 1 0 0 0 .198-.49l.182-1.542a1 1 0 0 0 0-.23l-.123-1.077a1 1 0 0 1 .663-1.058l.147-.051a1 1 0 0 0 .402-.263l.977-1.052a.615.615 0 0 0-.72-.971l-1.44.7a1 1 0 0 1-.609.087l-.636-.11a1 1 0 0 0-.66.112l-1.63.915a1 1 0 0 1-.806.077l-1.51-.504a1 1 0 0 0-.572-.018l-1.76.466a1 1 0 0 1-.636-.042l-1.627-.67-.575 1.28a1 1 0 0 0-.088.443l.12 3.701a1 1 0 0 1-.085.436Zm-7.332-.538-.114-.22a1 1 0 0 1 .662-1.434l3.72-.866a.567.567 0 0 1 .493.986L4.806 8.302a1 1 0 0 1-.447.216l-1.37.275a1 1 0 0 1-1.085-.521Z\"/>";
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

/** Build a <Levant/> icon as a live SVGSVGElement (browser only). */
export function Levant(options: IconOptions = {}): SVGSVGElement {
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
