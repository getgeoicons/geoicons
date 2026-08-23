// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.503 3.91a1 1 0 0 0-.497-.691l-3.362-1.875a.3.3 0 0 0-.406.112l-.563.978a2 2 0 0 1-.575.632l-1.249.888a2 2 0 0 1-.937.358l-1.871.207a2 2 0 0 0-.872.313l-1.98 1.292a1 1 0 0 0-.453.795l-.05 1.183a1 1 0 0 1-.567.859l-.193.093a2 2 0 0 1-1.027.19l-4.293-.348a.6.6 0 0 0-.646.543l-.304 3.332a1 1 0 0 0 .417.906l2.023 1.435a2 2 0 0 1 .825 1.366l.467 3.478a.6.6 0 0 0 .378.48l5.81 2.244a.3.3 0 0 0 .397-.201l.541-1.99a2 2 0 0 1 .464-.835l2.55-2.749a2 2 0 0 1 .562-.424l2.878-1.458a2 2 0 0 0 .907-.934l2.38-5.072a1 1 0 0 0 .079-.607z\"/>";
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

/** Build a <DmSaintGeorge/> icon as a live SVGSVGElement (browser only). */
export function DmSaintGeorge(options: IconOptions = {}): SVGSVGElement {
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
