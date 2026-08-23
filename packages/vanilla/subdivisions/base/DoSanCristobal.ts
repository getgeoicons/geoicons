// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.013 22.21a.6.6 0 0 0 .729.443l.39-.098a1 1 0 0 0 .568-.384l4.626-6.398a1 1 0 0 0 .172-.769l-.11-.59a1 1 0 0 0-.307-.554l-1.685-1.546a2 2 0 0 0-.812-.452l-.76-.213a1 1 0 0 1-.671-.625l-.44-1.227a2 2 0 0 1 .016-1.393l.196-.508a1 1 0 0 0 .01-.692l-1.087-3.078a1 1 0 0 0-.236-.374l-2.203-2.203a.6.6 0 0 0-.758-.075l-1.006.674a1 1 0 0 0-.434.693l-.085.615a1 1 0 0 1-.65.802l-.451.163a1.5 1.5 0 0 0-.898.896l-.364.997a1.5 1.5 0 0 0-.01 1l.242.707a1 1 0 0 1-.01.675l-.42 1.123a1 1 0 0 0 .018.748l.487 1.125a2 2 0 0 0 .538.729l3.084 2.627a.6.6 0 0 1-.039.944l-.459.33a.6.6 0 0 0-.126.852l2.268 2.957a2 2 0 0 1 .358.751z\"/>";
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

/** Build a <DoSanCristobal/> icon as a live SVGSVGElement (browser only). */
export function DoSanCristobal(options: IconOptions = {}): SVGSVGElement {
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
