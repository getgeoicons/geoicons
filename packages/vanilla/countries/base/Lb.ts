// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.724 13.483-3.528 8.249a.5.5 0 0 0 .373.689l1.972.346a.5.5 0 0 0 .348-.066l1.286-.79a.5.5 0 0 0 .217-.281l.412-1.365a.5.5 0 0 1 .181-.257l4.86-3.596a.5.5 0 0 0-.014-.814l-.776-.534a.5.5 0 0 1-.115-.714l.956-1.262a.5.5 0 0 1 .471-.193l2.964.434a.5.5 0 0 0 .488-.218l.25-.373a.5.5 0 0 0-.215-.735l-1.385-.61 3.378-3.138a.5.5 0 0 0 .15-.465l-.514-2.56a.5.5 0 0 0-.277-.354l-1.607-.756a.5.5 0 0 1-.122-.824l.667-.601a.5.5 0 0 0-.076-.799l-.815-.494a.5.5 0 0 0-.61.07l-.494.488a.5.5 0 0 1-.382.142l-2.125-.133a.5.5 0 0 0-.53.526l.05.944a.5.5 0 0 1-.172.404L9.833 6.584a.5.5 0 0 0-.167.306l-.591 4.06a.5.5 0 0 1-.379.414l-.648.155a.5.5 0 0 0-.382.527l.097 1.2a.5.5 0 0 1-.039.237Z\"/>";
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

/** Build a <Lb/> icon as a live SVGSVGElement (browser only). */
export function Lb(options: IconOptions = {}): SVGSVGElement {
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
