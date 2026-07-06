// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path fill-rule=\"evenodd\" stroke-linejoin=\"round\" d=\"M2.075 6.126a.5.5 0 0 1 .077.288l-.026.63a.5.5 0 0 0 .527.52L5.665 7.4a.5.5 0 0 1 .409.175l.425.5a.5.5 0 0 1-.035.685l-.814.781a.5.5 0 0 0-.153.366l.02 1.912a.5.5 0 0 1-.269.449l-.612.319a.5.5 0 0 0-.245.594l.818 2.584a.5.5 0 0 1-.004.313l-.49 1.426a.5.5 0 0 0 .418.66l.36.039a.5.5 0 0 1 .34.19l1.495 1.918a.5.5 0 0 0 .71.082l1.325-1.075a.5.5 0 0 1 .313-.111l3.583-.012a.5.5 0 0 0 .43-.247l.627-1.073a.5.5 0 0 1 .268-.22l1.12-.39a.5.5 0 0 0 .332-.402l.111-.787a.5.5 0 0 1 .196-.33l.939-.703a.5.5 0 0 0 .138-.641l-.66-1.201a.5.5 0 0 1 .034-.534l2.056-2.845a.5.5 0 0 1 .191-.16l3.431-1.622a.5.5 0 0 0 .282-.515l-.096-.757a.5.5 0 0 0-.594-.427l-1.154.23a.5.5 0 0 1-.295-.03l-2.087-.891a.5.5 0 0 0-.209-.04l-1.89.045a.5.5 0 0 1-.313-.101l-1.607-1.215a.5.5 0 0 0-.425-.086l-.756.193a.5.5 0 0 1-.27-.006l-1.4-.43a.5.5 0 0 0-.182-.02l-2.44.171a.5.5 0 0 1-.119-.005l-4.912-.838a.5.5 0 0 0-.325.055L1.664 4.484a.5.5 0 0 0-.18.705z\" clip-rule=\"evenodd\"/>";
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

/** Build a <Es/> icon as a live SVGSVGElement (browser only). */
export function Es(options: IconOptions = {}): SVGSVGElement {
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
