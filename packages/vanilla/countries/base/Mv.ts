// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.737 19.277 10 18.766a.782.782 0 1 1 .914-1.27l1.068.798a1 1 0 0 1 .313 1.214l-.346.766 1.345.747a.79.79 0 1 1-.776 1.376l-1.738-.993a1 1 0 0 1-.42-1.271zm.743-6.66-1.28 1.418a.773.773 0 1 1-1.133-1.051l1.09-1.143-.8-2.503a.748.748 0 0 1 1.423-.461l.906 2.76a1 1 0 0 1-.208.98Zm2.062-1.482.004-1.23a1 1 0 0 1 .223-.627l.602-.744a.753.753 0 1 1 1.14.983l-.512.56v1.06a.728.728 0 1 1-1.457-.002ZM11.566 5.47l-.79 1.15a.769.769 0 1 1-1.253-.892l.547-.744-.609-.508a1 1 0 0 1-.199-1.311l.906-1.399a.791.791 0 1 1 1.303.896l-.707.97.61.496a1 1 0 0 1 .192 1.342Z\"/>";
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

/** Build a <Mv/> icon as a live SVGSVGElement (browser only). */
export function Mv(options: IconOptions = {}): SVGSVGElement {
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
