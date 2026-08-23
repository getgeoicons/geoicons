// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.314 17.967a1 1 0 0 0 .58.331l2.507.454a1 1 0 0 0 .761-.172l1.067-.766a1 1 0 0 0 .417-.784l.044-1.57c.01-.33.06-.659.15-.977l.807-2.854a1 1 0 0 0-.23-.953L21.34 9.515a2 2 0 0 0-.815-.53l-2.76-.95a.6.6 0 0 1-.329-.862l.51-.906a.6.6 0 0 0-.011-.61l-.033-.053a.6.6 0 0 0-.735-.242l-1.818.73a2 2 0 0 0-.916.742l-3.26 4.866a1.5 1.5 0 0 1-1.56.631l-2.78-.597a2 2 0 0 0-.786-.011l-3.908.725a.8.8 0 0 0-.644.659l-.188 1.16a.8.8 0 0 0 .517.88L5.5 16.485a3 3 0 0 0 .852.175l3.058.176c.32.018.64-.015.948-.097l3.372-.903a1 1 0 0 1 1.017.313z\"/>";
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

/** Build a <NiNuevaSegovia/> icon as a live SVGSVGElement (browser only). */
export function NiNuevaSegovia(options: IconOptions = {}): SVGSVGElement {
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
