// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.817 8.2a2 2 0 0 0-.337.62l-1.294 3.885a1 1 0 0 0 .022.691l.457 1.128a2 2 0 0 1 .1 1.174l-.377 1.741a1 1 0 0 0 .013.479l.378 1.364a1 1 0 0 0 .506.623l1.085.557a1 1 0 0 1 .536.77l.145 1.194a.3.3 0 0 0 .4.245l5.375-1.95a.3.3 0 0 0 .197-.3l-.22-3.825a1 1 0 0 1 .546-.949l.063-.032a.93.93 0 0 0 .507-.813v-.042a.876.876 0 0 0-.69-.869.876.876 0 0 1-.682-.972l.162-1.218a1 1 0 0 0-.217-.766l-.211-.258a1 1 0 0 1-.092-1.133l1.196-2.072a1 1 0 0 0 .101-.755l-.482-1.824a3 3 0 0 0-.393-.88l-.3-.458a2 2 0 0 1-.328-1.094v-.194a1 1 0 0 0-1.067-.996l-.338.023a1 1 0 0 0-.93 1.07l.15 2.052a1 1 0 0 1-.566.976l-1.676.8a1 1 0 0 0-.35.277z\"/>";
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

/** Build a <DmSaintDavid/> icon as a live SVGSVGElement (browser only). */
export function DmSaintDavid(options: IconOptions = {}): SVGSVGElement {
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
