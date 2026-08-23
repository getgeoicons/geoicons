// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.674 10.135a1 1 0 0 0-.706.56l-.42.911a3 3 0 0 0-.26 1.577l.167 1.552a2 2 0 0 0 .206.695l.704 1.381a.6.6 0 0 0 .51.328l4.098.17q.3.012.594.07l2.25.435q.492.095.991.066l4.263-.246a4 4 0 0 1 1.71.277l1.344.535a6 6 0 0 1 1.44.819l.606.466a1 1 0 0 0 1.211.007l.692-.52a1 1 0 0 0 .384-.625l.244-1.379a.8.8 0 0 0-.39-.833l-1.029-.59a1 1 0 0 1-.48-.658l-1.276-5.925a1 1 0 0 1 .134-.748l.826-1.295a1 1 0 0 0 .152-.637l-.134-1.337a.6.6 0 0 0-.543-.538l-8.777-.79a.6.6 0 0 0-.654.592l-.02 2.166a.6.6 0 0 1-.618.594l-1.925-.056a.6.6 0 0 0-.617.622l.02.532a1 1 0 0 1-.797 1.017z\"/>";
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

/** Build a <CuMayabeque/> icon as a live SVGSVGElement (browser only). */
export function CuMayabeque(options: IconOptions = {}): SVGSVGElement {
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
