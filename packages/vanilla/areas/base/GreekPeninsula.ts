// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.723 17.93 1.225.68a.6.6 0 0 0 .887-.6l-.143-1.124a.95.95 0 0 1 1.763-.595l1.474 2.55a1 1 0 0 1 .134.501v1.615a.869.869 0 1 0 1.736-.046l-.057-1.1a1 1 0 0 1 .09-.471l.334-.726a1 1 0 0 1 .814-.577l.258-.025a1 1 0 0 1 1.029.638l.696 1.82a1 1 0 0 0 .323.435l1.67 1.29a.754.754 0 0 0 1.05-1.07l-1.34-1.662a1 1 0 0 1-.217-.714l.136-1.582a1 1 0 0 0-.104-.538l-3.19-6.291a.6.6 0 0 1 .402-.857l.164-.037a.6.6 0 0 1 .459.08l1.796 1.162a1 1 0 0 1 .35.387l.514 1.014a1 1 0 0 0 1.44.383l1.536-1.006a.6.6 0 0 0-.048-1.032L19.812 9.32a1 1 0 0 1-.529-.943l.056-.935a1 1 0 0 0-.528-.942l-5.028-2.68-5.176-2.017a1 1 0 0 0-1.172.344l-.568.781a1 1 0 0 1-.852.411L4.2 3.26a1 1 0 0 0-.86.422L1.745 5.936a1 1 0 0 0 .192 1.36l2.978 2.378a1 1 0 0 1 .2.216l1.259 1.833a1 1 0 0 1 .058 1.037l-.85 1.593a1 1 0 0 0-.066.787l.744 2.232a1 1 0 0 0 .463.558Z\"/>";
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

/** Build a <GreekPeninsula/> icon as a live SVGSVGElement (browser only). */
export function GreekPeninsula(options: IconOptions = {}): SVGSVGElement {
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
