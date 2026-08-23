// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.966 10.041-4.29-1.423a.6.6 0 0 0-.61.141l-2.15 2.115a1 1 0 0 0-.295.612l-.097.958a.6.6 0 0 1-.213.401l-3.742 3.112a1 1 0 0 0-.36.786l.036 2.107a1 1 0 0 0 .324.72l1.001.916a1 1 0 0 0 1.194.118l2.165-1.315a2 2 0 0 0 .604-.567l1.518-2.183a1 1 0 0 1 .782-.428l1.324-.053a1 1 0 0 0 .341-.074l7.337-3.017a1 1 0 0 0 .617-.85l.008-.106a1 1 0 0 1 .903-.92l.828-.079a1 1 0 0 0 .466-.167l1.65-1.115a1 1 0 0 0 .436-.924l-.024-.248a1 1 0 0 0-.516-.782l-.868-.473a1 1 0 0 1-.486-1.138l.331-1.23a.6.6 0 0 0-.172-.596l-.872-.805a.6.6 0 0 0-.936.159l-1.79 3.356q-.186.35-.276.736l-.259 1.123a1 1 0 0 1-1.104.767l-.662-.087a1 1 0 0 0-.49.059l-.98.378a1 1 0 0 1-.674.016Z\"/>";
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

/** Build a <CaNovaScotia/> icon as a live SVGSVGElement (browser only). */
export function CaNovaScotia(options: IconOptions = {}): SVGSVGElement {
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
