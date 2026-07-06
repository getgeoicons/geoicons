// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.793 12.48-2.488 2.316a.5.5 0 0 1-.753-.083l-1.62-2.36a.5.5 0 0 0-.122-.124L1.566 9.912a.5.5 0 0 1-.145-.653l.754-1.339a.5.5 0 0 1 .335-.244l2.381-.493a.5.5 0 0 0 .396-.545L5.08 4.802a.5.5 0 0 1 .683-.52l2.84 1.142a.5.5 0 0 0 .278.027l2.566-.477a.5.5 0 0 1 .492.193l.674.905a.5.5 0 0 0 .421.202l3.002-.123a.5.5 0 0 0 .302-.116l1.398-1.175a.5.5 0 0 1 .742.112l1.435 2.22a.5.5 0 0 1 .067.387l-.333 1.407a.5.5 0 0 0 .182.511l1.587 1.223a.5.5 0 0 1 .161.576l-.55 1.427a.5.5 0 0 0 .035.431l1.424 2.446a.5.5 0 0 1-.279.728l-1.035.333a.5.5 0 0 0-.347.46l-.05 1.644a.5.5 0 0 1-.346.461l-1.969.632a.5.5 0 0 1-.643-.38l-.49-2.494a.5.5 0 0 0-.624-.385l-2.269.633a.5.5 0 0 1-.419-.07l-.34-.236a.5.5 0 0 1-.147-.662l.626-1.079a.5.5 0 0 0-.022-.536l-1.488-2.146a.5.5 0 0 0-.425-.215l-2.1.057a.5.5 0 0 0-.327.134Z\"/>";
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

/** Build a <Gn/> icon as a live SVGSVGElement (browser only). */
export function Gn(options: IconOptions = {}): SVGSVGElement {
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
