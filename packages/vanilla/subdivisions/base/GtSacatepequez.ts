// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.895 10.977a.6.6 0 0 1 .835-.506l.867.372a.6.6 0 0 0 .678-.144l.408-.442a.6.6 0 0 0-.081-.888l-.88-.658a1 1 0 0 1-.4-.792l-.016-1.782a.8.8 0 0 0-.505-.737l-1.142-.452a1 1 0 0 1-.63-.861l-.039-.57a.8.8 0 0 0-.985-.723l-1.514.364a1 1 0 0 1-.938-.262l-1.08-1.071a.6.6 0 0 0-.976.193l-.393.932a1 1 0 0 0-.032.688l.427 1.359a1 1 0 0 1-.065.759l-2.69 5.21a.7.7 0 0 1-.694.376l-.983-.1a.7.7 0 0 0-.692.373l-.492.947a5 5 0 0 0-.477 1.39l-.438 2.354a1 1 0 0 0 .313.924l1.696 1.532a1 1 0 0 1 .277.424l1.062 3.156a.657.657 0 0 0 1.28-.226l-.014-.549a1 1 0 0 1 .132-.521l1.171-2.044a2 2 0 0 1 .742-.741l.726-.415a1 1 0 0 1 1.102.072l1.17.89a2 2 0 0 0 .977.394l.625.073a1 1 0 0 0 1.114-.918z\"/>";
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

/** Build a <GtSacatepequez/> icon as a live SVGSVGElement (browser only). */
export function GtSacatepequez(options: IconOptions = {}): SVGSVGElement {
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
