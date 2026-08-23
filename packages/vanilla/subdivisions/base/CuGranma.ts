// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.229 5.174a.6.6 0 0 0-.608.402l-.148.428a2 2 0 0 0-.106.787l.062.944a.8.8 0 0 0 .522.698l.94.347c.445.164.713.62.64 1.088a2 2 0 0 1-.91 1.386l-5.15 3.24q-.475.299-.85.716l-1.627 1.815a.98.98 0 0 0 .228 1.495c.367.218.795.311 1.22.264l3.011-.335a2 2 0 0 0 1.003-.406l.268-.207a1 1 0 0 1 .68-.207l2.201.15a1 1 0 0 0 1.031-.73l.009-.03a1 1 0 0 1 .56-.648l1.596-.703a2 2 0 0 1 1.04-.156l2.367.28a2 2 0 0 0 1.146-.206l1.085-.555a1 1 0 0 0 .53-.725l.438-2.612a1 1 0 0 1 .604-.76l.89-.367a1 1 0 0 0 .553-1.28l-.15-.392a1 1 0 0 0-.522-.555l-5.521-2.5a3 3 0 0 0-1.035-.26z\"/>";
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

/** Build a <CuGranma/> icon as a live SVGSVGElement (browser only). */
export function CuGranma(options: IconOptions = {}): SVGSVGElement {
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
