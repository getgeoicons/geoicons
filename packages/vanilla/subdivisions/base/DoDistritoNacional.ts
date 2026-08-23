// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.52 22.237a.6.6 0 0 0 .72.426l5.878-1.42c.38-.092.743-.238 1.08-.435l1.72-1.006a4 4 0 0 0 1.259-1.16l.014-.02a4 4 0 0 1 1.568-1.323l4.607-2.177a1 1 0 0 0 .467-.457l.146-.292a1 1 0 0 0 .097-.573l-.233-1.852a1 1 0 0 1 .186-.717l.712-.97a1 1 0 0 0 .135-.93l-.236-.656a1 1 0 0 0-.595-.6l-2.143-.789a1 1 0 0 0-.787.042l-.981.483a2 2 0 0 1-.928.205L14.95 7.99a2 2 0 0 1-1.148-.394l-1.43-1.062a1 1 0 0 0-1.31.104l-.023.022a1 1 0 0 1-1.218.165l-.912-.53a1 1 0 0 1-.496-.838l-.051-1.861a1 1 0 0 0-.369-.749L6.452 1.592a1 1 0 0 0-1.047-.133l-.96.44a1 1 0 0 0-.517.549L3.16 4.435a1 1 0 0 0 .069.863l.262.452a1 1 0 0 1 .136.516l-.01.685a1 1 0 0 1-.462.83l-.946.603a.493.493 0 0 0-.042.8l4.594 3.659a1 1 0 0 1 .375.847l-.068 1.048a7 7 0 0 1-.57 2.35l-.521 1.193a7 7 0 0 1-1.419 2.1l-.968.987a.6.6 0 0 0-.15.578z\"/>";
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

/** Build a <DoDistritoNacional/> icon as a live SVGSVGElement (browser only). */
export function DoDistritoNacional(options: IconOptions = {}): SVGSVGElement {
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
