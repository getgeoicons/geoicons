// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.998 15.378-2.603-1.64-.571 2.96a1 1 0 0 1-1.118.8l-1.415-.194a1 1 0 0 1-.624-.34l-1.052-1.23a1 1 0 0 1-.235-.548l-.07-.69a.89.89 0 0 0-.715-.785.893.893 0 0 1-.705-1.03l.385-2.191a1 1 0 0 0-.564-1.08l-1.213-.563a2 2 0 0 1-.85-.744l-.173-.275-.221-.49a2 2 0 0 1-.17-.646l-.073-.82.023-.56a.7.7 0 0 1 1.398-.039l.108 1.12a1 1 0 0 0 .384.696l.04.03a1 1 0 0 0 .411.189l.903.184a2 2 0 0 1 .496.17l.433.217a2 2 0 0 1 .954 1.026l.075.18a2 2 0 0 1 .148.65l.024.42a.863.863 0 0 0 1.295.696l.917-.532a1 1 0 0 0 .456-.577l.264-.877a1 1 0 0 0-.225-.968l-.38-.411a.735.735 0 0 1 .056-1.054l.562-.49a1 1 0 0 0 .324-.559l.313-1.575a.6.6 0 0 1 .49-.475l2.373-.396a1 1 0 0 1 .587.08l1.528.713a1 1 0 0 0 .5.09l1.62-.126a1 1 0 0 1 .566.124l2.741 1.532a1 1 0 0 1 .51.81l.113 1.776a.25.25 0 0 1-.236.265l-.914.048a.828.828 0 0 0-.25 1.6l1.93.733a1 1 0 0 1 .633.777l.394 2.457a1 1 0 0 1-.03.45l-.593 1.944a1 1 0 0 1-.183.342l-1.251 1.53a1 1 0 0 0-.173.31l-.379 1.109a1 1 0 0 1-.595.613l-1.068.4a1 1 0 0 1-.264.06l-2.506.22a1 1 0 0 1-.175 0l-1.494-.131a.765.765 0 0 1-.668-.977l.54-1.858a1 1 0 0 0 .013-.508l-.31-1.325a1 1 0 0 0-.441-.617Z\"/>";
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

/** Build a <Antarctica/> icon as a live SVGSVGElement (browser only). */
export function Antarctica(options: IconOptions = {}): SVGSVGElement {
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
