// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.468 11.552-2.453 2.313a1 1 0 0 0-.312.778l.127 2.492a.6.6 0 0 0 .348.513l.542.251a.6.6 0 0 0 .592-.05l.72-.494a.6.6 0 0 1 .86.196l1.168 2.037a.956.956 0 0 0 1.783-.552l-.093-1.164a1 1 0 0 1 .29-.787l.474-.475a.6.6 0 0 0 .036-.81l-.432-.514a1 1 0 0 1-.207-.872l.283-1.201a1 1 0 0 1 .291-.503l3.377-3.147a1 1 0 0 0 .298-.933l-.436-2.126a1 1 0 0 1 .103-.682l.882-1.606a1 1 0 0 1 1.316-.416l.606.296a1 1 0 0 0 .887-.003l.047-.024a1 1 0 0 0 .509-1.186l-.068-.224a1 1 0 0 0-.445-.567l-1.227-.73a1 1 0 0 0-.585-.139l-1.553.115a1 1 0 0 0-.437.138l-2.185 1.297a1 1 0 0 0-.19.146l-1.877 1.842a1 1 0 0 0-.17.22L8.978 7.38a1 1 0 0 0-.08.183l-1.165 3.571a1 1 0 0 1-.265.418ZM5.825 21.591l.01-1.008a.837.837 0 0 1 1.594-.347l.039.083a.93.93 0 0 1 .034.708l-.289.81a.715.715 0 0 1-1.388-.246Z\"/>";
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

/** Build a <Scandinavia/> icon as a live SVGSVGElement (browser only). */
export function Scandinavia(options: IconOptions = {}): SVGSVGElement {
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
