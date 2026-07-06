// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.953 20.958 7.508 19.11a1 1 0 0 1-.122-1.032l.35-.767a1 1 0 0 1 .596-.534l.479-.158a1 1 0 0 0 .638-.644l.457-1.425a1 1 0 0 0 .038-.443l-.562-4.033a1 1 0 0 0-.473-.718l-.439-.265a1 1 0 0 1-.48-.798l-.14-2.42-.441-2.302a1 1 0 0 1 .377-.984l1.241-.943a.854.854 0 0 1 1.11 1.295l-.589.57a.75.75 0 0 0 .095 1.156l1.336.923a1 1 0 0 0 .29.137l1.363.397a1 1 0 0 1 .718.885l.044.585a1 1 0 0 1-.05.396l-.597 1.762a1 1 0 0 1-.116.236l-1.064 1.587a1 1 0 0 0-.164.667l.224 2.017a1 1 0 0 0 .75.86l.553.138a1 1 0 0 1 .707.661l.256.788a1 1 0 0 1-.069.778l-.428.806a1 1 0 0 1-.261.313l-3.125 2.482a.75.75 0 0 1-1.057-.125Zm5.616-1.217-.89 1.542a.96.96 0 0 0 1.019 1.422l1.362-.269a1 1 0 0 0 .807-.98v-1.413a.938.938 0 0 0-1.184-.906l-.51.138a1 1 0 0 0-.604.466Z\"/>";
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

/** Build a <Pm/> icon as a live SVGSVGElement (browser only). */
export function Pm(options: IconOptions = {}): SVGSVGElement {
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
