// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.227 16.224a4 4 0 0 0-1.031-.311l-1.952-.312a4 4 0 0 1-1.39-.498l-3.21-1.88a5 5 0 0 1-1.01-.78l-.912-.912a5 5 0 0 1-1.058-1.56l-.381-.887-.802-1.537a5 5 0 0 1-.448-1.228l-.193-.87a.82.82 0 0 0-1.28-.489L4.38 6.525a1 1 0 0 1-.589.187l-.846-.005a1 1 0 0 0-.845.457l-.632.978a1 1 0 0 0-.102.879l.159.446a1 1 0 0 0 .333.457l5.024 3.86a3 3 0 0 1 .813.954l1.19 2.204a2 2 0 0 0 .822.816l1.214.645a.6.6 0 0 0 .802-.232L12.963 16a.3.3 0 0 1 .388-.123l3.393 1.598c.225.106.467.169.714.186l1.214.084a2 2 0 0 1 .666.165l2.95 1.296a.3.3 0 0 0 .42-.257l.08-1.343a.3.3 0 0 0-.175-.291z\"/>";
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

/** Build a <NiRivas/> icon as a live SVGSVGElement (browser only). */
export function NiRivas(options: IconOptions = {}): SVGSVGElement {
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
