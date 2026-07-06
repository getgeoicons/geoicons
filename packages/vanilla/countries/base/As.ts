// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.075 10.935 1.2 13.503l4.106.8a.5.5 0 0 1 .394.39l.233 1.119a.5.5 0 0 0 .241.332l1.428.816a.5.5 0 0 0 .404.041l.978-.32a.5.5 0 0 0 .22-.145l1.463-1.661a.5.5 0 0 1 .106-.092l1.368-.87-.148-1.076a.5.5 0 0 1 .268-.512l.866-.445a.5.5 0 0 0 .249-.596l-.522-1.652 2.119-.173.13 1.233h1.438a.5.5 0 0 0 .26-.073l1.505-.912a.5.5 0 0 1 .674.148l.447.664 2.669-.799a.5.5 0 0 0 .348-.389l.356-1.947-1.431.095a.5.5 0 0 0-.324.15l-.626.639a.5.5 0 0 1-.505.128l-2.048-.634a.5.5 0 0 0-.211-.019l-1.724.22a.5.5 0 0 1-.364-.096l-1.243-.937-2.282 1.14a.5.5 0 0 0-.164.133l-1.532 1.885a.5.5 0 0 1-.216.154l-1.895.696a.5.5 0 0 1-.195.03l-3.61-.16a.5.5 0 0 0-.355.127Z\"/>";
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

/** Build a <As/> icon as a live SVGSVGElement (browser only). */
export function As(options: IconOptions = {}): SVGSVGElement {
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
