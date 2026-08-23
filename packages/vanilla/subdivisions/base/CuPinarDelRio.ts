// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.758 5.207a.6.6 0 0 0-.835-.562L10.836 8.09a3 3 0 0 0-1.16.877L8.5 10.427a3 3 0 0 0-.556 1.082l-.551 1.99a2 2 0 0 1-1.08 1.277L3.65 16.023c-.29.136-.602.224-.92.262l-.64.075a.99.99 0 0 0 .012 1.97l.788.082a1 1 0 0 0 .623-.14l2.255-1.367a.706.706 0 0 1 .928 1.032l-.24.313a.817.817 0 0 0 1.195 1.103l1.645-1.475a2 2 0 0 1 .87-.456l1.845-.44a1 1 0 0 0 .755-.814l.2-1.24a1 1 0 0 1 .929-.84l4.84-.28a1 1 0 0 0 .742-.397l1.006-1.338a1 1 0 0 1 .648-.387l.41-.063a1 1 0 0 0 .778-.621l.318-.807a1 1 0 0 0-.035-.814l-.677-1.352a1 1 0 0 0-.553-.493l-.973-.353a1 1 0 0 1-.658-.958z\"/>";
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

/** Build a <CuPinarDelRio/> icon as a live SVGSVGElement (browser only). */
export function CuPinarDelRio(options: IconOptions = {}): SVGSVGElement {
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
