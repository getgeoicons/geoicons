// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.967 22.61 6.058-2.857a2 2 0 0 1 .993-.186l1.534.107a1 1 0 0 0 .716-.235l.926-.784a.6.6 0 0 0 .01-.907l-1.76-1.562a1 1 0 0 1-.33-.851l.423-4.04a2 2 0 0 0-.21-1.122l-.426-.83a2 2 0 0 1-.22-.91l-.008-3.592a1 1 0 0 0-.449-.832l-.764-.505a.6.6 0 0 1-.244-.674l.18-.597a.6.6 0 0 0-.385-.743l-.612-.203a.6.6 0 0 0-.5.056l-.85.515a1 1 0 0 1-.55.144l-6.25-.21a.6.6 0 0 0-.514.258l-.356.513a.6.6 0 0 0-.1.44l1.24 7.496c.07.424 0 .857-.191 1.241a243 243 0 0 0-1.74 3.576c-.2.42-.247.899-.131 1.35l1.14 4.468a1 1 0 0 0 .586.676l1.974.82a1 1 0 0 0 .81-.02Z\"/>";
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

/** Build a <Gh/> icon as a live SVGSVGElement (browser only). */
export function Gh(options: IconOptions = {}): SVGSVGElement {
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
