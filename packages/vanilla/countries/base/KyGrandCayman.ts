// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.94 16.084 1.267-1.087a2 2 0 0 1 .917-.444l2.153-.422a2 2 0 0 1 1.356.215l.285.158a2 2 0 0 0 1.111.247l1.639-.116a2 2 0 0 0 1.019-.365l.188-.134a2 2 0 0 0 .837-1.507l.045-.735a1.504 1.504 0 0 0-1.514-1.596l-7.171.06a2 2 0 0 1-1.23-.409l-1.416-1.08a.743.743 0 0 0-.98 1.112l1.107 1.128a.765.765 0 0 1-.75 1.274l-.949-.261a.6.6 0 0 0-.75.473l-.083.47a1 1 0 0 1-.808.808l-1.146.206a1 1 0 0 1-.881-.275l-.51-.506a1 1 0 0 1-.274-.916l.207-.977a1 1 0 0 0-.136-.744l-.697-1.093a.3.3 0 0 1 .064-.395l.711-.575a.3.3 0 0 0-.044-.496L4.19 7.38a1 1 0 0 0-.87-.044l-1.356.574a.86.86 0 0 0 .099 1.618l.619.176a1.565 1.565 0 0 1 1.134 1.536l-.04 2.05a2 2 0 0 1-.265.956l-.44.768a1 1 0 0 0 .015 1.022l.1.163a1 1 0 0 0 1.136.434l1.891-.56a2 2 0 0 1 1.008-.033l2.192.494a3 3 0 0 0 .91.063l.481-.04a2 2 0 0 0 1.136-.474Z\"/>";
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

/** Build a <KyGrandCayman/> icon as a live SVGSVGElement (browser only). */
export function KyGrandCayman(options: IconOptions = {}): SVGSVGElement {
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
