// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.343 22.57a.6.6 0 0 0 .789-.417l.265-1.06a1 1 0 0 1 .653-.707l3.81-1.27a2 2 0 0 0 .673-.382l.595-.513a1 1 0 0 0 .128-1.382l-1.001-1.252a1 1 0 0 1-.17-.937l.73-2.227a2 2 0 0 0-.032-1.339l-.312-.812a2 2 0 0 1 .034-1.514l1.207-2.774a.6.6 0 0 0-.27-.77l-1.889-1.002a3 3 0 0 0-.767-.28l-4.538-.989a1 1 0 0 1-.656-.483l-.467-.822a.6.6 0 0 0-.461-.301l-.755-.076a.6.6 0 0 0-.657.538l-.035.346a.6.6 0 0 0 .08.362l.294.503a1 1 0 0 1-.26 1.302L8.29 5.855a.6.6 0 0 0-.232.566l.087.59a.6.6 0 0 1-.406.657l-.576.19a1 1 0 0 1-.713-.034l-.976-.426a1 1 0 0 0-.616-.06l-1.022.226a.6.6 0 0 0-.4.867l.399.752a2 2 0 0 1 .182 1.39l-.379 1.629a1 1 0 0 0 .262.927l2.803 2.849a2 2 0 0 0 .61.423l4.364 1.949a1 1 0 0 1 .586.794l.336 2.805a.6.6 0 0 0 .39.492z\"/>";
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

/** Build a <DoSanJoseDeOcoa/> icon as a live SVGSVGElement (browser only). */
export function DoSanJoseDeOcoa(options: IconOptions = {}): SVGSVGElement {
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
