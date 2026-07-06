// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.566 22.779-2.7-.518a.5.5 0 0 1-.402-.559l.09-.662a.5.5 0 0 1 .193-.33l.723-.55a.5.5 0 0 0 .095-.7L2.8 18.454a.5.5 0 0 1-.095-.217l-.438-2.497a.5.5 0 0 1 .004-.196l.49-2.189a.5.5 0 0 1 .212-.308l1.572-1.04a.5.5 0 0 0 .139-.137l5.399-8.03a.5.5 0 0 1 .74-.1l1.888 1.622a.5.5 0 0 0 .586.048l1.23-.75a.5.5 0 0 0 .215-.272l.586-1.805a.5.5 0 0 1 .294-.311l2.393-.93a.5.5 0 0 1 .59.175l2.004 2.82a.5.5 0 0 1 .075.157l1.021 3.744a.5.5 0 0 1-.026.336l-.543 1.21a.5.5 0 0 1-.38.29l-1.692.26a.5.5 0 0 0-.31.176L17.7 11.792a.5.5 0 0 1-.277.17l-3.209.722a.5.5 0 0 0-.361.319l-.693 1.93a.25.25 0 0 0 .271.332l4.79-.693a.5.5 0 0 1 .468.19l1.066 1.38a.5.5 0 0 1 .03.568l-3.103 5.03a.5.5 0 0 1-.355.233l-1.315.188a.5.5 0 0 1-.481-.21l-.625-.903a.5.5 0 0 0-.534-.2l-7.588 1.925a.5.5 0 0 1-.217.006Z\"/>";
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

/** Build a <Dj/> icon as a live SVGSVGElement (browser only). */
export function Dj(options: IconOptions = {}): SVGSVGElement {
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
