// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.813 13.026a1 1 0 0 0 .404.7l.655.478a2 2 0 0 1 .798 1.915l-.5 3.31a1 1 0 0 0 .293.87l1.272 1.228a.6.6 0 0 0 .894-.068l.614-.805a.6.6 0 0 1 .703-.192l5.388 2.189a.3.3 0 0 0 .411-.245l.122-1.103a1 1 0 0 1 .778-.867l1.065-.235a.3.3 0 0 0 .173-.477l-3.173-4.083a.3.3 0 0 1 .017-.387l1.485-1.606a2 2 0 0 0 .433-.736l.766-2.343a.3.3 0 0 1 .406-.181l.713.314a.6.6 0 0 0 .81-.356l.166-.491a.6.6 0 0 0-.062-.516l-2.927-4.595a5 5 0 0 0-.484-.64l-1.736-1.95a2 2 0 0 0-1.252-.654l-1.876-.228a3 3 0 0 0-1.157.085l-.38.104a1 1 0 0 0-.672.614l-.615 1.643a1 1 0 0 1-.59.587l-.74.274a1 1 0 0 0-.548.493L4.53 8.975a1 1 0 0 0-.098.552z\"/>";
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

/** Build a <MxCoahuila/> icon as a live SVGSVGElement (browser only). */
export function MxCoahuila(options: IconOptions = {}): SVGSVGElement {
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
