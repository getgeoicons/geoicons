// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.152 6.05.796-4.216a.5.5 0 0 1 .534-.406l4.998.431a.5.5 0 0 0 .093 0l6.497-.65a.5.5 0 0 1 .174.013l3.683.94a.5.5 0 0 1 .292.762l-2.18 3.271a.5.5 0 0 0-.085.266l-.087 3.576a.5.5 0 0 0 .089.297l2.299 3.32a.5.5 0 0 1 .039.504l-2.749 5.663a.5.5 0 0 1-.727.198l-1.645-1.097a.5.5 0 0 0-.333-.08l-4.606.512a.5.5 0 0 0-.423.642l.595 1.96a.5.5 0 0 1-.6.63l-3.449-.862a.5.5 0 0 1-.339-.29L5.295 15.02a.5.5 0 0 0-.412-.302l-1.436-.137a.5.5 0 0 1-.386-.248l-1.578-2.74a.5.5 0 0 1-.058-.346l.807-4.15a.5.5 0 0 1 .433-.402l2.055-.242a.5.5 0 0 0 .432-.404Z\"/>";
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

/** Build a <Sr/> icon as a live SVGSVGElement (browser only). */
export function Sr(options: IconOptions = {}): SVGSVGElement {
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
