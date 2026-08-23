// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M14.645 19.302a2 2 0 0 0 1.04.22l1.508-.09q.287-.018.557-.115l4.376-1.575a.6.6 0 0 0 .317-.864l-1.306-2.271a.6.6 0 0 0-.584-.297l-1.536.164a1 1 0 0 1-.972-.493l-1.165-2.01a1 1 0 0 0-.694-.484l-1.328-.23a1 1 0 0 1-.63-.387l-2.373-3.177a1 1 0 0 1-.188-.45L11.46 5.86a.6.6 0 0 0-.562-.51l-.449-.024a.6.6 0 0 0-.53.264l-.634.945a.6.6 0 0 1-.743.213l-4.696-2.1A.668.668 0 0 0 3.17 5.79l2.74 2.09a1 1 0 0 1 .35 1.09l-.202.653a2 2 0 0 1-.57.894l-3.542 3.2a1 1 0 0 0-.315.57l-.32 1.833a.6.6 0 0 0 .53.7l1.009.102a1 1 0 0 0 .535-.095l1.22-.59c.206-.1.428-.164.656-.188l4.649-.504a3 3 0 0 1 .989.057l1.51.344a1 1 0 0 1 .778.937l.043 1.116a1 1 0 0 0 .539.85z\"/>";
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

/** Build a <SvChalatenango/> icon as a live SVGSVGElement (browser only). */
export function SvChalatenango(options: IconOptions = {}): SVGSVGElement {
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
