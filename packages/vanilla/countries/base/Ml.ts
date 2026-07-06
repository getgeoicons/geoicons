// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.254 15.03-.836.799a.5.5 0 0 0-.136.498l.844 2.977a.5.5 0 0 0 .542.36l2.447-.304a.5.5 0 0 1 .51.276l1.144 2.33a.5.5 0 0 0 .508.275l2.585-.304a.5.5 0 0 0 .405-.31l1.326-3.286a.5.5 0 0 1 .23-.256l4.481-2.363a.5.5 0 0 1 .2-.056l4.994-.34a.5.5 0 0 0 .395-.242l.736-1.225a.5.5 0 0 0 .07-.243l.085-2.88a.5.5 0 0 0-.513-.514l-.828.023a.5.5 0 0 1-.514-.503l.004-.506a.5.5 0 0 0-.206-.408L11.1 1.827a.5.5 0 0 0-.291-.096l-1.514-.01a.5.5 0 0 0-.5.558l1.396 12.008a.5.5 0 0 1-.493.558l-7.103.047a.5.5 0 0 0-.342.138Z\"/>";
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

/** Build a <Ml/> icon as a live SVGSVGElement (browser only). */
export function Ml(options: IconOptions = {}): SVGSVGElement {
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
