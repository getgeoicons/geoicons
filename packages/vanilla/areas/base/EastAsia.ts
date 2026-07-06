// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.723 9.416-.644.02a.877.877 0 0 0-.635 1.451l.401.46a1 1 0 0 1 .228.853l-.095.473a1 1 0 0 0 .278.906l.683.676q.105.104.234.172l1.186.631a1 1 0 0 0 .38.113l.913.082c.14.012.28-.005.411-.05l.581-.197a.97.97 0 0 1 1.227 1.24l-.036.103a1 1 0 0 0 .127.91l.245.345a1 1 0 0 0 1.19.35l.726-.293a1 1 0 0 1 .81.029l.927.45a1 1 0 0 0 .758.047l1.406-.476a1 1 0 0 0 .329-.188l.9-.77a1 1 0 0 0 .269-.365l.398-.928a1 1 0 0 0 .081-.418l-.011-.491a1 1 0 0 0-.158-.515l-.653-1.021a.757.757 0 0 1 1.172-.946l.34.337a.72.72 0 0 0 1.177-.776l-.34-.862a1 1 0 0 1 .045-.833l.34-.646q.047-.09.075-.186l.375-1.287A.646.646 0 0 0 17.636 7l-.57.096a1 1 0 0 1-1.074-.567l-.112-.243a.91.91 0 0 0-1.712.174l-.02.086a1 1 0 0 1-.911.77l-1.525.096a1 1 0 0 1-.522-.11l-1.357-.703a1 1 0 0 0-1.044.077l-.304.22a1 1 0 0 1-.848.153l-.43-.117a1 1 0 0 0-.545.006l-1.944.572a1 1 0 0 0-.572.44l-.598.985a1 1 0 0 1-.825.48Zm19.241 3.507-1.778 1.428a.818.818 0 1 1-1.014-1.283l1.843-1.434a.25.25 0 0 0 .097-.2l-.02-2.38a.844.844 0 1 1 1.688.017l-.069 2.35a2 2 0 0 1-.747 1.502Z\"/>";
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

/** Build a <EastAsia/> icon as a live SVGSVGElement (browser only). */
export function EastAsia(options: IconOptions = {}): SVGSVGElement {
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
