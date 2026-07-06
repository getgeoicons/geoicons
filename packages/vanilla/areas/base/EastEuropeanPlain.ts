// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.002 11.853-2.866 1.03a.6.6 0 0 0-.397.565v2.908a.6.6 0 0 0 .159.406l5.074 5.505a.6.6 0 0 0 .923-.049l.464-.626a.6.6 0 0 1 .823-.136l.64.444a.6.6 0 0 0 .601.048l3.37-1.614a.6.6 0 0 1 .316-.056l2.184.208a.6.6 0 0 0 .598-.855l-.414-.873a.6.6 0 0 1 .066-.623l3.264-4.248a.6.6 0 0 0-.221-.908l-2.672-1.255a.6.6 0 0 1-.304-.325l-1.12-2.871a.6.6 0 0 0-.098-.168L12.36 3.554a.6.6 0 0 1-.137-.322L12.08 1.87a.6.6 0 0 0-.565-.536L9.3 1.215a.6.6 0 0 0-.49.212L7.142 3.395a.6.6 0 0 0-.089.635l.688 1.52a.6.6 0 0 1-.147.695l-.868.776a.6.6 0 0 0-.157.672l.752 1.86a.6.6 0 0 1-.05.548l-.966 1.51a.6.6 0 0 1-.303.242Z\"/>";
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

/** Build a <EastEuropeanPlain/> icon as a live SVGSVGElement (browser only). */
export function EastEuropeanPlain(options: IconOptions = {}): SVGSVGElement {
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
