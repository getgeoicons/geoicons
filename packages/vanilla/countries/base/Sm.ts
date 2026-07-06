// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m17.573 19.683-.953 2.38a.5.5 0 0 1-.426.313l-5.322.401a.5.5 0 0 1-.46-.23L9.22 20.673a.5.5 0 0 0-.587-.204l-3.594 1.263a.5.5 0 0 1-.343-.004l-.929-.352a.5.5 0 0 1-.267-.697l.625-1.213a.5.5 0 0 0 .037-.364l-.678-2.422a.5.5 0 0 1 .105-.463l1.084-1.244a.5.5 0 0 0 .04-.604l-1.558-2.36a.5.5 0 0 1-.082-.266L3.019 9.09l1.316.673a.5.5 0 0 0 .644-.168l.491-.74a.5.5 0 0 1 .497-.217l1.786.291a.5.5 0 0 0 .483-.197L9.572 6.92a.5.5 0 0 1 .118-.115l3.508-2.428a.5.5 0 0 1 .131-.065l3.296-1.063a.5.5 0 0 0 .184-.107l1.81-1.66a.5.5 0 0 1 .291-.129l1.143-.107a.5.5 0 0 1 .543.434l.127.99a.5.5 0 0 1-.168.441l-.436.378a.5.5 0 0 0-.169.438l.16 1.314a.5.5 0 0 1-.175.443l-.49.412a.5.5 0 0 0-.177.378l-.02 2.117a.5.5 0 0 0 .043.208l1.588 3.587a.5.5 0 0 1-.022.45l-1.748 3.07a.5.5 0 0 1-.18.184l-1.404.83a.5.5 0 0 0-.24.51l.317 1.99a.5.5 0 0 1-.03.264Z\"/>";
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

/** Build a <Sm/> icon as a live SVGSVGElement (browser only). */
export function Sm(options: IconOptions = {}): SVGSVGElement {
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
