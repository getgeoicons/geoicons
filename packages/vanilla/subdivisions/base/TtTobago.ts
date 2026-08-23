// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.22 18.146a.6.6 0 0 0 .509.585l2.566.394a1 1 0 0 0 .87-.292l2.09-2.153a1 1 0 0 1 1.128-.215l.408.184a1 1 0 0 0 1.05-.143l1.141-.948a1 1 0 0 1 .627-.231l2.413-.031a1 1 0 0 0 .693-.292l2.956-2.943a1 1 0 0 1 .705-.291l1.614-.001a1 1 0 0 0 .577-.184l.889-.63a1 1 0 0 0 .391-.568l.865-3.39a1 1 0 0 0-.062-.668l-.356-.766a1 1 0 0 0-1.17-.544l-4.256 1.163a1 1 0 0 0-.157.058L11.12 8.827a1 1 0 0 0-.18.108l-5.43 4.074a1 1 0 0 0-.232.246l-1.829 2.75a1 1 0 0 1-.685.435l-1.046.156a.6.6 0 0 0-.512.602z\"/>";
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

/** Build a <TtTobago/> icon as a live SVGSVGElement (browser only). */
export function TtTobago(options: IconOptions = {}): SVGSVGElement {
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
