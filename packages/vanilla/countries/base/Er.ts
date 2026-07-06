// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.213 12.212.238 2.265a.5.5 0 0 0 .638.427l1.068-.314a.5.5 0 0 1 .38.041l.755.413a.5.5 0 0 0 .68-.2l.676-1.246a.5.5 0 0 1 .783-.124l1.153 1.092a.5.5 0 0 0 .414.132l3.3-.467a.5.5 0 0 1 .231.022l3.523 1.194a.5.5 0 0 1 .277.232l.86 1.558a.5.5 0 0 0 .238.217l1.692.733a.5.5 0 0 1 .164.114l2.793 2.94a.5.5 0 0 0 .71.016l.656-.636a.5.5 0 0 0 .013-.706l-5.636-5.87a.5.5 0 0 0-.182-.12l-2.68-1.03a.5.5 0 0 1-.259-.225l-.579-1.053a.5.5 0 0 0-.26-.227l-1.586-.6a.5.5 0 0 1-.304-.333L9.363 4.733a.5.5 0 0 0-.039-.097l-.8-1.52a.5.5 0 0 0-.851-.055l-.608.865a.5.5 0 0 1-.142.136L4.589 5.535a.5.5 0 0 1-.304.076l-.908-.069a.5.5 0 0 0-.538.499v2.06a.5.5 0 0 1-.039.195l-1.55 3.67a.5.5 0 0 0-.037.246Z\"/>";
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

/** Build a <Er/> icon as a live SVGSVGElement (browser only). */
export function Er(options: IconOptions = {}): SVGSVGElement {
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
