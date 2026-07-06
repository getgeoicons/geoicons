// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.139 8.834-.795 1.226a.5.5 0 0 0 .01.56l2.087 2.975a.5.5 0 0 1 .08.385l-.277 1.376a.5.5 0 0 0 .327.571l.565.196a.5.5 0 0 0 .51-.111l1.4-1.34 1.222 4.04.016.071.6 4.017 1.477-2.216a.5.5 0 0 0 .075-.373l-.406-2.086a.5.5 0 0 0-.114-.233l-.628-.721a.5.5 0 0 1-.104-.465l.313-1.1a.5.5 0 0 0-.087-.444l-1.337-1.714a.5.5 0 0 1-.085-.45l.292-.978a.5.5 0 0 1 .338-.337l1.856-.544a.5.5 0 0 0 .264-.187l1.102-1.518-1.547-.266a.5.5 0 0 1-.39-.336l-.694-2.11-.76.161a.5.5 0 0 1-.6-.434l-.043-.391a.5.5 0 0 1 .143-.409l1.007-1.006a.5.5 0 0 0 .14-.278l.242-1.573a.5.5 0 0 0-.164-.452L12.877 1.2l-.846 1.464a.5.5 0 0 1-.167.174l-1.424.892a.5.5 0 0 0-.215.284l-.801 2.75-1.138.02-.067 1.797a.5.5 0 0 1-.08.253Z\"/>";
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

/** Build a <Mm/> icon as a live SVGSVGElement (browser only). */
export function Mm(options: IconOptions = {}): SVGSVGElement {
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
