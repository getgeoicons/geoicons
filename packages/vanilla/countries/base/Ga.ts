// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.516 5.621 5.34 5.595a.5.5 0 0 0-.493.408l-.92 4.897a.5.5 0 0 1-.51.407l-.604-.022a.5.5 0 0 0-.477.697l1.487 3.452a.5.5 0 0 0 .087.135l6.162 6.882a.5.5 0 0 0 .681.06l2.019-1.583a.5.5 0 0 0 .154-.583l-.994-2.432a.5.5 0 0 1 .487-.689l1.826.09a.5.5 0 0 0 .524-.509l-.014-.822a.5.5 0 0 1 .465-.508l.492-.034a.5.5 0 0 1 .49.293l.497 1.103a.5.5 0 0 0 .388.29l3.191.438a.5.5 0 0 0 .517-.275l.804-1.634a.5.5 0 0 0 .05-.183l.305-4.072a.5.5 0 0 0-.252-.473l-1.949-1.105a.5.5 0 0 1-.146-.744l2.067-2.635a.5.5 0 0 0 .035-.566l-.907-1.513a.5.5 0 0 0-.565-.224l-2.167.614a.5.5 0 0 1-.634-.526l.222-2.456a.5.5 0 0 0-.496-.545l-5.689-.026a.5.5 0 0 0-.502.507l.047 3.405a.5.5 0 0 1-.502.507Z\"/>";
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

/** Build a <Ga/> icon as a live SVGSVGElement (browser only). */
export function Ga(options: IconOptions = {}): SVGSVGElement {
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
