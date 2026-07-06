// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.433 12.244-.18 3.283a.5.5 0 0 0 .771.447l2.28-1.473a.5.5 0 0 1 .332-.076l6.344.788a.5.5 0 0 0 .342-.082l1.028-.694a.5.5 0 0 1 .687.125l.7.986a.5.5 0 0 0 .233.178l1.37.512q.106.04.183.12l1.946 1.996a.5.5 0 0 0 .684.03l.896-.772a.5.5 0 0 1 .409-.114l.925.154a.5.5 0 0 0 .456-.162l1.727-1.95a.5.5 0 0 0 .063-.573l-1.551-2.799a.5.5 0 0 1-.04-.393l.579-1.831a.5.5 0 0 0-.06-.426l-.748-1.137a.5.5 0 0 0-.316-.215l-1.551-.323a.5.5 0 0 0-.296.028l-.807.339a.5.5 0 0 1-.514-.078l-3.154-2.634a.5.5 0 0 0-.5-.083l-2.255.865a.5.5 0 0 0-.317.533l.354 2.67a.5.5 0 0 1-.129.406l-1.168 1.26a.5.5 0 0 1-.444.155l-1.42-.223a.5.5 0 0 1-.413-.392l-.246-1.175a.5.5 0 0 0-.203-.308l-.945-.658a.5.5 0 0 1-.214-.388l-.068-1.5-2.6 1.394a.5.5 0 0 0-.21.215l-1.908 3.777a.5.5 0 0 0-.052.198Z\"/>";
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

/** Build a <Lv/> icon as a live SVGSVGElement (browser only). */
export function Lv(options: IconOptions = {}): SVGSVGElement {
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
