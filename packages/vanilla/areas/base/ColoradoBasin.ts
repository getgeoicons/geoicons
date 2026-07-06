// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.386 6.257-.936 4.429a1 1 0 0 1-1.15.778l-.844-.147a1 1 0 0 1-.444-.198l-1.006-.787a.6.6 0 0 0-.923.242l-1.078 2.583a1 1 0 0 0 .008.788l.936 2.123a1 1 0 0 1-.079.951l-.477.729a1 1 0 0 0-.006 1.087l.58.906a1 1 0 0 0 .481.393l1.601.62a1 1 0 0 0 1.056-.213l.039-.038a1 1 0 0 1 1.34-.044l.014.011a1 1 0 0 1 .353.704l.003.052a1 1 0 0 0 .615.864l1.041.432a.67.67 0 0 0 .828-.97l-.471-.764a.897.897 0 0 1 1.501-.982l.687.99a.6.6 0 0 0 1.078-.208l.427-1.862a.6.6 0 0 0-.244-.628l-.379-.262a1 1 0 0 1-.432-.828l.007-1.287a1 1 0 0 1 .362-.766l1.26-1.042a1 1 0 0 0 .353-.64l.097-.741a1 1 0 0 0-.181-.716l-.244-.337a1 1 0 0 1 .113-1.304l.599-.581q.148-.144.227-.334l.784-1.889a1 1 0 0 0-.271-1.141l-2.036-1.752a1 1 0 0 0-.615-.242l-.909-.033a1 1 0 0 1-.812-.471l-.964-1.55a.948.948 0 0 0-1.751.469l-.117 3.433a1 1 0 0 1-.02.173Z\"/>";
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

/** Build a <ColoradoBasin/> icon as a live SVGSVGElement (browser only). */
export function ColoradoBasin(options: IconOptions = {}): SVGSVGElement {
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
