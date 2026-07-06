// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.648 13.166-1.035.809a.5.5 0 0 0-.07.72l1.746 2.024a.5.5 0 0 0 .541.146l1.387-.477a.5.5 0 0 1 .395.03l2.118 1.114a.5.5 0 0 0 .403.028l3.61-1.302a.5.5 0 0 1 .394.023l1.63.815a.5.5 0 0 0 .324.043l6.645-1.359a.5.5 0 0 1 .204.001l1.198.254a.5.5 0 0 0 .602-.534l-.279-3.11a.5.5 0 0 0-.463-.453l-2.088-.148a.5.5 0 0 1-.46-.574l.29-1.904a.5.5 0 0 0-.211-.487l-1.54-1.059a.5.5 0 0 0-.602.027l-1.074.891a.5.5 0 0 1-.47.092L8.43 6.434a.5.5 0 0 0-.411.05l-2.001 1.22a.5.5 0 0 0-.169.17l-3.08 5.156a.5.5 0 0 1-.121.137Z\"/>";
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

/** Build a <Bt/> icon as a live SVGSVGElement (browser only). */
export function Bt(options: IconOptions = {}): SVGSVGElement {
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
