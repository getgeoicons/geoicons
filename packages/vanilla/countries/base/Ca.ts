// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.342 20.77-6.421-.016a.5.5 0 0 1-.379-.175l-2.649-3.096a.5.5 0 0 1-.12-.325v-3.852a.5.5 0 0 1 .418-.493l1.894-.314a.5.5 0 0 1 .304.046l2.869 1.428a.5.5 0 0 0 .22.053l2.085.014a.5.5 0 0 0 .27-.077l.932-.59a.5.5 0 0 1 .244-.076l1.201-.057a.5.5 0 0 1 .514.402l.009.042a.5.5 0 0 1-.123.436l-2.578 2.801a.5.5 0 0 0 .067.738l2.489 1.873a.5.5 0 0 0 .8-.374l.09-1.758a.5.5 0 0 1 .804-.37l3.236 2.48a.5.5 0 0 1 .167.229l.27.755a.5.5 0 0 1-.532.665l-.818-.1a.5.5 0 0 0-.263.039L14.97 22.59a.5.5 0 0 1-.666-.27l-.499-1.238a.5.5 0 0 0-.462-.313Zm.238-14.312-1.363-1.014a.5.5 0 0 1-.066-.742l2.845-3.04a.5.5 0 0 1 .285-.151l1.732-.282a.5.5 0 0 1 .33.06l1.227.706a.5.5 0 0 1 .19.672L15.723 8.26a.5.5 0 0 1-.491.259l-1.45-.153a.5.5 0 0 1-.374-.76l.299-.486a.5.5 0 0 0-.128-.663Zm3.293 6.384-2.674-1.399a.5.5 0 0 1-.248-.583l.145-.496a.5.5 0 0 1 .67-.322l3.377 1.396a.5.5 0 0 1 .266.26l.896 2.037a.5.5 0 0 1 .003.397l-.543 1.276a.5.5 0 0 1-.726.227l-.992-.624a.5.5 0 0 1-.216-.559l.291-1.031a.5.5 0 0 0-.25-.579Zm-7.768-.831-2.002-1.27a.5.5 0 0 1-.23-.478l.11-.981a.5.5 0 0 1 .753-.374l1.216.722a.5.5 0 0 0 .314.066l1.335-.158a.5.5 0 0 1 .546.381l.351 1.484a.5.5 0 0 1-.465.615l-1.639.07a.5.5 0 0 1-.29-.077Z\"/>";
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

/** Build a <Ca/> icon as a live SVGSVGElement (browser only). */
export function Ca(options: IconOptions = {}): SVGSVGElement {
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
