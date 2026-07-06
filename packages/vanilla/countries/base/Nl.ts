// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.773 18.954-.246-.702a.5.5 0 0 1-.004-.32l.396-1.221a.5.5 0 0 1 .099-.175l4.051-4.651a.5.5 0 0 0 .083-.132l1.124-2.631a.5.5 0 0 0 .031-.103l.595-3.106a.5.5 0 0 1 .793-.305l1.644 1.242a.5.5 0 0 1 .172.56l-1.096 3.248L13.72 8.53a.5.5 0 0 0 .229-.398l.065-1.484a.5.5 0 0 0-.331-.493l-.819-.292a.5.5 0 0 1-.33-.503l.114-1.811a.5.5 0 0 1 .113-.286l.626-.76a.5.5 0 0 1 .203-.148l1.073-.423a.5.5 0 0 1 .11-.03l4.468-.666a.5.5 0 0 1 .42.134l1.675 1.61a.5.5 0 0 1 .146.448l-.73 4.09a.5.5 0 0 1-.582.404l-.685-.124a.5.5 0 0 0-.58.395l-.156.794a.5.5 0 0 0 .315.565l1.148.43a.5.5 0 0 1 .221.773l-1.086 1.414a.5.5 0 0 0-.104.31l.01 1.072a.5.5 0 0 1-.447.502l-2.913.314a.5.5 0 0 0-.37.763l1.055 1.68a.5.5 0 0 1 .072.332l-.286 2.133a.5.5 0 0 1-.068.192l-.603.997a.5.5 0 0 0 .011.535l.263.396a.5.5 0 0 1 .062.42l-.186.62a.5.5 0 0 1-.491.356l-1.386-.035a.5.5 0 0 1-.46-.662l.64-1.866a.5.5 0 0 0-.32-.638l-1.75-.562a.5.5 0 0 1-.237-.164l-.919-1.149a.5.5 0 0 0-.365-.187l-2.106-.106a.5.5 0 0 0-.317.094l-2.673 1.927a.5.5 0 0 1-.357.09l-1.921-.249a.5.5 0 0 1-.408-.33Z\"/>";
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

/** Build a <Nl/> icon as a live SVGSVGElement (browser only). */
export function Nl(options: IconOptions = {}): SVGSVGElement {
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
