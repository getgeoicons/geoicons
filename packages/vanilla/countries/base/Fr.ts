// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.356 17.388-.493.721a.5.5 0 0 0 .306.77l6.208 1.36a.5.5 0 0 0 .604-.541l-.062-.583a.5.5 0 0 1 .248-.486l.983-.567a.5.5 0 0 1 .42-.037l2.697.975a.5.5 0 0 0 .504-.098l1.681-1.508a.5.5 0 0 0-.091-.81l-.69-.382a.5.5 0 0 1-.255-.477l.21-2.605a.5.5 0 0 0-.25-.475l-.689-.393a.5.5 0 0 1-.092-.801l1.826-1.69a.5.5 0 0 0 .14-.222l.843-2.792a.5.5 0 0 0-.312-.616L15.64 4.553a.5.5 0 0 1-.157-.09L12.07 1.555a.5.5 0 0 0-.436-.106l-.551.127a.5.5 0 0 0-.388.481l-.015 1.317a.5.5 0 0 1-.164.364l-1.73 1.57a.5.5 0 0 1-.496.102l-1.918-.653a.5.5 0 0 0-.657.537l.169 1.32a.5.5 0 0 1-.356.544l-.912.266a.5.5 0 0 1-.52-.156l-.37-.432a.5.5 0 0 0-.53-.153l-1.467.46a.5.5 0 0 0-.309.677l.417.96a.5.5 0 0 0 .384.295l1.893.286a.5.5 0 0 1 .382.291l.556 1.249a.5.5 0 0 0 .135.18l1.49 1.248a.5.5 0 0 1 .176.438c-.082.75-.315 2.925-.411 4.37a.5.5 0 0 1-.087.25Zm14.55 4.134-.049-1.082a.5.5 0 0 1 .165-.395l.71-.64a.5.5 0 0 1 .795.175l.198.463a.5.5 0 0 1 .014.355l-.514 1.534a.5.5 0 0 1-.784.233l-.346-.274a.5.5 0 0 1-.189-.37Z\"/>";
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

/** Build a <Fr/> icon as a live SVGSVGElement (browser only). */
export function Fr(options: IconOptions = {}): SVGSVGElement {
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
