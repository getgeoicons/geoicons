// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.322 1.57a.61.61 0 0 0-.566-.368l-10.338.054a.6.6 0 0 0-.555.82l.53 1.35a1 1 0 0 1 .016.686l-.955 2.816a1 1 0 0 1-.307.448L5.43 8.802a2 2 0 0 0-.721 1.538v.662a1.795 1.795 0 0 0 1.677 1.791l.192.013a.6.6 0 0 1 .513.834l-.237.556a.6.6 0 0 1-.409.347l-1.239.305a.6.6 0 0 0-.395.848l.67 1.359a2 2 0 0 1 .206.907l-.02 1.752a1 1 0 0 0 .227.646l1.664 2.03a.8.8 0 0 0 .846.259l.485-.144a.8.8 0 0 0 .55-.578l.119-.489a1 1 0 0 1 1.183-.742l4.621.998a.679.679 0 0 0 .723-1.018l-.546-.89a3 3 0 0 0-.678-.771l-.455-.366a3 3 0 0 1-.82-1.03l-.344-.712a1 1 0 0 1 .21-1.159l.659-.628a1 1 0 0 1 1.306-.064l1.271.995a.6.6 0 0 0 .921-.235l.534-1.238a.6.6 0 0 0-.446-.828l-2.69-.477a.72.72 0 0 1-.232-1.335l.917-.522a1 1 0 0 0 .437-1.233l-.406-1.038a1 1 0 0 0-.732-.616l-1.32-.27a1 1 0 0 1-.724-.595l-.132-.317a1 1 0 0 1 .033-.84l1.517-2.961a1 1 0 0 1 1.075-.527l1.737.327a1 1 0 0 0 .778-.177l1.167-.86a.614.614 0 0 0 .2-.739Z\"/>";
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

/** Build a <GtQuiche/> icon as a live SVGSVGElement (browser only). */
export function GtQuiche(options: IconOptions = {}): SVGSVGElement {
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
