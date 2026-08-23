// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.73 1.525a1 1 0 0 0-.754-.312l-1.565.043a1 1 0 0 0-.57.199l-1.512 1.13a1 1 0 0 0-.32.405l-1.502 3.488a2 2 0 0 1-.925.99l-1.463.748a1 1 0 0 0-.463.496l-.63 1.469a2 2 0 0 1-.97 1.014l-1.754.844a1 1 0 0 0-.387.33L1.76 15.465a1 1 0 0 0 .077 1.24l1.326 1.475a2 2 0 0 1 .493 1.055l.427 3.006a.6.6 0 0 0 .642.514l4.933-.398a6 6 0 0 0 1.231-.23l2.713-.809a2 2 0 0 1 1.185.013l3.168 1.023a.6.6 0 0 0 .76-.404l1.166-4.005c.108-.37.258-.727.448-1.063l2.185-3.864a1 1 0 0 0 .115-.664l-.535-3.065a1 1 0 0 0-.284-.54l-3.45-3.394a1 1 0 0 1-.295-.786l.079-1.075a1 1 0 0 0-.271-.761z\"/>";
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

/** Build a <DoLaRomana/> icon as a live SVGSVGElement (browser only). */
export function DoLaRomana(options: IconOptions = {}): SVGSVGElement {
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
