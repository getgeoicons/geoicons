// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.253 8.75-1.04.03a1 1 0 0 0-.966.916l-.011.133a1 1 0 0 0 .242.741l.615.706a1 1 0 0 1 .227.851l-.169.854a1 1 0 0 0 .278.905l.983.973q.104.104.233.172l1.569.835a1 1 0 0 0 .38.113l1.253.112a1 1 0 0 0 .41-.05l.916-.31a1 1 0 0 1 1.055.266l.186.2a1 1 0 0 1 .21 1.012l-.133.379a1 1 0 0 0 .127.91l.5.707a1 1 0 0 0 1.19.35l1.206-.486a1 1 0 0 1 .81.029l1.36.66a1 1 0 0 0 .76.048l1.911-.648a1 1 0 0 0 .33-.188l1.213-1.039a1 1 0 0 0 .269-.364l.546-1.271a1 1 0 0 0 .081-.42l-.018-.743a1 1 0 0 0-.157-.515l-.859-1.344a.951.951 0 0 1 1.471-1.188l.428.424a.905.905 0 0 0 1.479-.975l-.47-1.192a1 1 0 0 1 .045-.832l.493-.94q.046-.088.075-.185l.478-1.641a.81.81 0 0 0-.913-1.026l-.909.153a1 1 0 0 1-1.074-.566l-.267-.578a1 1 0 0 0-1.035-.573l-.202.026a1 1 0 0 0-.846.764l-.092.39a1 1 0 0 1-.911.77l-2.176.136a1 1 0 0 1-.522-.11l-1.907-.987a1 1 0 0 0-1.045.077l-.608.438a1 1 0 0 1-.848.154l-.728-.198a1 1 0 0 0-.545.006l-2.607.767a1 1 0 0 0-.572.44L4.077 8.27a1 1 0 0 1-.824.48Z\"/>";
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

/** Build a <EastAsiaSimplified/> icon as a live SVGSVGElement (browser only). */
export function EastAsiaSimplified(options: IconOptions = {}): SVGSVGElement {
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
