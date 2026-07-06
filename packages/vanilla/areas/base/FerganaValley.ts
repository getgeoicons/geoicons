// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.776 12.865-4.133 1.977a.594.594 0 0 0-.012 1.067l.398.2q.185.094.392.107l1.125.066a1 1 0 0 0 .277-.022l2.365-.525a1 1 0 0 1 .488.013l1.434.404a1 1 0 0 0 .59-.015l1.848-.621a1 1 0 0 1 .328-.053l4.388.04a1 1 0 0 0 .42-.088l1.669-.754q.159-.071.332-.085l2.162-.171a1 1 0 0 0 .272-.061l.942-.353a1 1 0 0 0 .4-.277l1.028-1.17a1 1 0 0 0 .236-.818l-.055-.343a1 1 0 0 0-.317-.584l-2.547-2.3a1 1 0 0 0-.546-.25l-4.135-.515a1 1 0 0 0-.389.028l-2.284.628a1 1 0 0 1-.287.036L11.036 8.4a1 1 0 0 0-.401.074l-.524.215a1 1 0 0 0-.331.221l-3.726 3.757a1 1 0 0 1-.278.197Z\"/>";
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

/** Build a <FerganaValley/> icon as a live SVGSVGElement (browser only). */
export function FerganaValley(options: IconOptions = {}): SVGSVGElement {
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
