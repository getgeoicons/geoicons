// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.575 5.067-3.14 2.747a.5.5 0 0 0-.152.508l.734 2.686a.5.5 0 0 0 .545.364l1.308-.167a.5.5 0 0 1 .496.246l1.027 1.78a.5.5 0 0 1 .058.343l-.587 3.063a.5.5 0 0 0 .058.345l1.36 2.348a.5.5 0 0 0 .35.243l2.737.456a.5.5 0 0 1 .212.09l1.422 1.036a.5.5 0 0 0 .374.09l4.502-.72a.5.5 0 0 1 .237.02l2.203.734a.5.5 0 0 0 .612-.264l1.813-3.905a.5.5 0 0 0-.154-.61l-1.918-1.44a.5.5 0 0 1-.2-.374l-.06-1.207a.5.5 0 0 1 .552-.522l3.122.33a.5.5 0 0 0 .538-.62l-1.289-5.083a.5.5 0 0 0-.538-.374l-3.07.334a.5.5 0 0 1-.541-.385l-.738-3.187a.5.5 0 0 0-.494-.387l-3.856.053a.5.5 0 0 1-.12-.013l-3.884-.908a.5.5 0 0 0-.613.464l-.109 2.357a.5.5 0 0 1-.769.399l-1.43-.915a.5.5 0 0 0-.598.045Z\"/>";
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

/** Build a <Fm/> icon as a live SVGSVGElement (browser only). */
export function Fm(options: IconOptions = {}): SVGSVGElement {
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
