// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.013 10.23.028.888a.5.5 0 0 1-.09.302L1.2 12.494l2.728 1.747a.5.5 0 0 0 .344.074l1.942-.294a.5.5 0 0 1 .569.572l-.123.78a.5.5 0 0 0 .155.446l1.297 1.195a.5.5 0 0 0 .337.132l.613.004a.5.5 0 0 0 .347-.138l.743-.705a.5.5 0 0 0 .153-.421l-.123-1.039a.5.5 0 0 1 .276-.507l1.56-.768a.5.5 0 0 1 .521.048l.558.419a.5.5 0 0 0 .68-.075l2.302-2.682a.5.5 0 0 1 .58-.132l1.082.474a.5.5 0 0 0 .33.025L22.8 10.39l-1.632-1.167a.5.5 0 0 0-.183-.081l-1.396-.31a.5.5 0 0 1-.232-.12L18.27 7.703a.5.5 0 0 0-.206-.115l-2.106-.584a.5.5 0 0 0-.29.007l-1.094.362a.5.5 0 0 1-.322-.003l-1.258-.44a.5.5 0 0 0-.438.052l-1.08.703a.5.5 0 0 1-.325.079L6.677 7.29a.5.5 0 0 0-.307.067L2.258 9.784a.5.5 0 0 0-.245.447Z\"/>";
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

/** Build a <Hn/> icon as a live SVGSVGElement (browser only). */
export function Hn(options: IconOptions = {}): SVGSVGElement {
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
