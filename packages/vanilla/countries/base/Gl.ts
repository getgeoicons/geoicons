// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.86 19.597.4-.185a1 1 0 0 0 .463-.437l.267-.5a1 1 0 0 1 .595-.487l.874-.262a1 1 0 0 0 .468-.303l.535-.617a1 1 0 0 0 .24-.757l-.118-1.146a1 1 0 0 1 .131-.606l.753-1.289a1 1 0 0 0 .128-.624l-.363-2.994a2 2 0 0 1 .41-1.474l1.361-1.741a.852.852 0 0 0-1.012-1.306l-.394.173a.646.646 0 0 1-.877-.781l.154-.502a1 1 0 0 0-.136-.864l-.458-.659a2 2 0 0 0-1.382-.84l-.616-.081a3 3 0 0 0-1.67.26l-1.898.896a1 1 0 0 0-.487.498l-.139.312a1 1 0 0 1-.664.562l-1.307.337a2 2 0 0 0-1.184.855l-.777 1.21a1 1 0 0 0-.02 1.05l.092.155a.93.93 0 0 1-.58 1.378l-.575.14a.75.75 0 0 0-.493 1.065l.589 1.171a1 1 0 0 0 .728.538l1.218.205a1 1 0 0 1 .648.405l.485.678a1 1 0 0 1 .186.581v1.874a2 2 0 0 0 .123.692l.346.938a2 2 0 0 1 .113.902l-.067.635a3 3 0 0 0 .084 1.083l.125.473a3 3 0 0 0 .327.774l.278.462a3 3 0 0 0 .984 1.002l.175.109a.71.71 0 0 0 1.075-.483l.296-1.735a1 1 0 0 1 .566-.74Z\"/>";
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

/** Build a <Gl/> icon as a live SVGSVGElement (browser only). */
export function Gl(options: IconOptions = {}): SVGSVGElement {
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
