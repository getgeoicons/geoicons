// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.329 5.084-2.779.873a.5.5 0 0 0-.35.477v5.783l1.557.27v-1.07a.5.5 0 0 1 .205-.404l1.331-.971a.5.5 0 0 1 .517-.045l1.207.597a.5.5 0 0 1 .272.372l.158 1.027a.5.5 0 0 0 .456.422l1.39.108a.5.5 0 0 1 .432.329l.589 1.636a.5.5 0 0 0 .219.263l4.538 2.641a.5.5 0 0 1 .247.467l-.051.753 1.62.37.655-1.439a.5.5 0 0 0-.039-.483l-1.034-1.562a.25.25 0 0 1 .19-.387l1.16-.088a.5.5 0 0 0 .277-.11l1.379-1.12a.5.5 0 0 1 .5-.076l1.626.648a.5.5 0 0 0 .47-.054l1.458-1.014a.25.25 0 0 0 .016-.398l-2.54-2.088a.5.5 0 0 0-.653.015l-2.326 2.104a.5.5 0 0 1-.457.114l-1.704-.424a.5.5 0 0 1-.364-.365l-.617-2.509a.5.5 0 0 0-.139-.24L12.577 8.38a.5.5 0 0 0-.408-.136l-3.155.39a.5.5 0 0 1-.429-.158L6.413 6.123a.5.5 0 0 0-.118-.094l-1.567-.902a.5.5 0 0 0-.4-.043Z\"/>";
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

/** Build a <Uz/> icon as a live SVGSVGElement (browser only). */
export function Uz(options: IconOptions = {}): SVGSVGElement {
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
