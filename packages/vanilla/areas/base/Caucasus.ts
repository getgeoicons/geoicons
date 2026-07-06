// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.449 4.176-1.264.755 1.107 1.045a1 1 0 0 0 .22.157l1.686.887a1 1 0 0 1 .233.17L7 9.698a1 1 0 0 1 .202.28l.44.909a1 1 0 0 1 .066.692l-.082.308a1 1 0 0 1-.524.64l-.869.429a1 1 0 0 1-.763.05l-.959-.324a1 1 0 0 0-.239-.05l-1.477-.12a1.002 1.002 0 0 0-.378 1.956l1.876.58a1 1 0 0 0 .475.029l1.095-.2a.6.6 0 0 1 .699.493l.1.605a.6.6 0 0 0 .828.454l1.687-.72a1 1 0 0 1 1.157.276l.4.475a1 1 0 0 1 .232.565l.07.88a1 1 0 0 0 .976.92l3.668.078c.152.004.3.041.436.11l1.038.534a1 1 0 0 1 .415.399l.692 1.228a1 1 0 0 0 .813.508l.79.046a1 1 0 0 1 .374.096l1.418.68a.6.6 0 0 0 .83-.353l.153-.466a.6.6 0 0 0-.345-.743l-1.076-.436a1 1 0 0 1-.37-.26l-.497-.557a1 1 0 0 0-.611-.325l-.436-.06a1 1 0 0 1-.84-.77l-.048-.212a1 1 0 0 1-.001-.434l.458-2.079a1 1 0 0 1 .794-.768l.6-.11a.54.54 0 0 0 .069-1.044l-1.169-.38a1 1 0 0 1-.509-.378l-2.503-3.573a1 1 0 0 1-.164-.393l-.41-2.227a1 1 0 0 0-.66-.765l-2.32-.794a1 1 0 0 1-.265-.138L7.895 2.003a1 1 0 0 0-.261-.137L6.002 1.3a1 1 0 0 0-.59-.02l-1.725.47a1 1 0 0 0-.738.943l-.013.645a1 1 0 0 1-.487.837Z\"/>";
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

/** Build a <Caucasus/> icon as a live SVGSVGElement (browser only). */
export function Caucasus(options: IconOptions = {}): SVGSVGElement {
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
