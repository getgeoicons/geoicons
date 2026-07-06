// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.532 13.719-.49 1.651a.5.5 0 0 1-.35.34l-.471.127a.5.5 0 0 1-.396-.06l-1.23-.774a.25.25 0 0 1 .032-.44l2.563-1.144a.25.25 0 0 1 .342.3Zm3.599-3.304L7.468 11.6a.5.5 0 0 0 .383.74l.403.044a.5.5 0 0 1 .427.359l.163.563a.5.5 0 0 1-.315.611l-.543.191a.5.5 0 0 0-.283.692l.464.948 6.346-3.033a1 1 0 0 1 .393-.097l1.48-.057a1 1 0 0 0 .735-.366l.535-.653a1 1 0 0 1 .747-.366l.752-.02a1 1 0 0 0 .561-.192L22.8 8.72l-2.603-.546a1 1 0 0 0-.62.069l-1.566.712a1 1 0 0 1-.581.076l-.812-.138a1 1 0 0 0-.534.056l-1.075.424a1 1 0 0 1-.47.064l-1.844-.19a1 1 0 0 0-.328.02l-3.912.905a.5.5 0 0 0-.324.243Z\"/>";
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

/** Build a <Tl/> icon as a live SVGSVGElement (browser only). */
export function Tl(options: IconOptions = {}): SVGSVGElement {
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
