// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.972 1.665a.6.6 0 0 0-.315.496L5.52 4.603a2 2 0 0 1-.136.622l-.582 1.478a1 1 0 0 0 .111.941l1.612 2.297a.6.6 0 0 1-.13.824l-.775.583a.6.6 0 0 0-.024.94l3.159 2.642a2 2 0 0 1 .536.704l1.633 3.576a.6.6 0 0 0 .6.348l.768-.07a.6.6 0 0 1 .65.677l-.138 1.03a.6.6 0 0 0 .36.632l1.812.77a1 1 0 0 0 .921-.074L18.7 20.77a1 1 0 0 0 .467-.785l.18-2.898a1 1 0 0 0-.706-1.018l-1.318-.402a1 1 0 0 1-.7-.835l-.078-.637a1 1 0 0 0-.476-.735l-1.949-1.18a1 1 0 0 1-.483-.878l.022-.96a1 1 0 0 1 .245-.636l.902-1.034a.6.6 0 0 0-.35-.985l-1.857-.323a1 1 0 0 1-.789-.704l-.51-1.738a1 1 0 0 0-.47-.59L8.563 3.158a2 2 0 0 1-.597-.513L7.15 1.599a.6.6 0 0 0-.756-.16z\"/>";
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

/** Build a <SvCuscatlan/> icon as a live SVGSVGElement (browser only). */
export function SvCuscatlan(options: IconOptions = {}): SVGSVGElement {
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
