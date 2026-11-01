// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.959 14.031-.753-.208a.5.5 0 0 1-.35-.609l.19-.72a.5.5 0 0 1 .613-.356l.752.203a.5.5 0 0 1 .353.608l-.187.726a.5.5 0 0 1-.618.356Zm9.748 1.919 4.397-.133q.226-.007.445-.064l1.488-.389a.756.756 0 0 0 .195-1.38l-.727-.434a3 3 0 0 0-.566-.262l-2.828-.965a4 4 0 0 1-1.082-.566l-2.402-1.77a1 1 0 0 0-.546-.194l-1.229-.058a2 2 0 0 1-.8-.21l-1.607-.803a4 4 0 0 0-1.323-.395l-1.709-.2a4 4 0 0 0-1.522.114l-2.588.708a2 2 0 0 0-1.082.742l-.532.721a.6.6 0 0 0 .291.925l.298.1a1 1 0 0 0 .717-.03l2.469-1.074a2 2 0 0 1 1.263-.111l6.023 1.44a2 2 0 0 1 1.111.715l.39.499a1 1 0 0 0 .729.383l1.173.07a.539.539 0 0 1 .217 1.013l-.953.497a.589.589 0 0 0 .29 1.11Z\"/>";
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

/** Build a <Cu/> icon as a live SVGSVGElement (browser only). */
export function Cu(options: IconOptions = {}): SVGSVGElement {
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
