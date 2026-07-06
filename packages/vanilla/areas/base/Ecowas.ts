// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.785 10.44-.318.387a1 1 0 0 0-.221.744l.09.82a1 1 0 0 0 .265.575l1.454 1.551a1 1 0 0 1 .255.508l.194 1.085a1 1 0 0 0 .377.619l2.493 1.906a1 1 0 0 0 .89.165l1.402-.412a1 1 0 0 1 .499-.017l1.192.265a1 1 0 0 0 .501-.018l3.252-.965a1 1 0 0 1 1.15.457l.269.465a1 1 0 0 0 1.061.48l.702-.141a1 1 0 0 0 .7-.535l.2-.402a1 1 0 0 1 .823-.552l.468-.034a1 1 0 0 0 .793-.495l1.315-2.269a1 1 0 0 0 .035-.937l-.38-.786a1 1 0 0 1 .24-1.186l.718-.633a1 1 0 0 0 .33-.62l.234-1.77a1 1 0 0 0-.054-.478l-.364-.983a1 1 0 0 0-.672-.617l-.951-.263a1 1 0 0 0-.725.076l-4.745 2.45a1 1 0 0 1-1.141-.157l-3.912-3.647a.837.837 0 0 0-1.408.62l.056 5.559-3.945.195a1 1 0 0 1-.842-.39l-.467-.606a1 1 0 0 0-.838-.389l-.248.011a1 1 0 0 0-.727.364Z\"/>";
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

/** Build a <Ecowas/> icon as a live SVGSVGElement (browser only). */
export function Ecowas(options: IconOptions = {}): SVGSVGElement {
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
