// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m19.682 10.23 2.057-.552a1 1 0 0 0 .718-.75l.166-.754a.8.8 0 0 0-.627-.958l-.314-.061a1 1 0 0 0-.64.087l-.9.45a1 1 0 0 1-.65.085L14.57 6.76a1 1 0 0 0-.73.13l-1.9 1.18a2 2 0 0 0-.588.56l-.905 1.308a1 1 0 0 1-.771.43l-4.8.243a1 1 0 0 0-.539.19l-2.166 1.58a.6.6 0 0 0 .179 1.059l2.498.76a1 1 0 0 1 .709.957v.362a1 1 0 0 0 .491.86l1.11.657a1 1 0 0 0 .978.022l.744-.395a2 2 0 0 0 .543-.421l4.525-4.977c.193-.213.43-.381.694-.494L17.27 9.65a1 1 0 0 1 .881.047l.785.439a1 1 0 0 0 .747.094Z\"/>";
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
