// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.977 3.375 5.97 6.613a1 1 0 0 0 .162.907l1.373 1.785a1 1 0 0 1 .196.756l-.074.501a.875.875 0 0 0 1.364.846l.166-.115a.6.6 0 0 1 .915.316l.36 1.168a1 1 0 0 1 .044.312l-.06 3.653a1 1 0 0 0 .217.641l1.061 1.33a1 1 0 0 1 .139.232l.927 2.174a1 1 0 0 0 .315.404l1.36 1.032a.622.622 0 0 0 .873-.87l-.235-.311a.96.96 0 0 1-.193-.579v-.593a1 1 0 0 0-.07-.366l-.223-.569a1 1 0 0 0-.287-.4l-1.37-1.15a1 1 0 0 1-.286-.398l-.556-1.403a1 1 0 0 1-.07-.363l-.011-2.095a.524.524 0 0 1 .927-.337l1.606 1.938a1 1 0 0 1 .195.378l.409 1.512 2.613-1.952a1 1 0 0 0 .401-.777l.02-.79a1 1 0 0 0-.073-.4l-.525-1.298a1 1 0 0 0-.251-.362l-1.983-1.822a1 1 0 0 1-.323-.7l-.001-.032a1 1 0 0 1 .412-.846l.51-.37a.6.6 0 0 0 .01-.963L14.84 5.79a1 1 0 0 0-1.167-.03l-1.604 1.092a1 1 0 0 1-1.244-.094L9.65 5.666a1 1 0 0 1-.27-1.04l.341-1.062a1 1 0 0 0-.113-.852l-.375-.575a.847.847 0 0 0-1.347-.095l-.76 1.04a1 1 0 0 0-.148.293Z\"/>";
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

/** Build a <IndochinaPeninsula/> icon as a live SVGSVGElement (browser only). */
export function IndochinaPeninsula(options: IconOptions = {}): SVGSVGElement {
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
