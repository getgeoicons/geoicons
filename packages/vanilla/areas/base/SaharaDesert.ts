// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.604 10.888-1.22 2.195a1 1 0 0 0-.102.702l.274 1.235 2.855 1.018a1 1 0 0 0 .411.055l2.246-.17q.11-.01.219.007l6.125.881a1 1 0 0 0 .537-.07l1.146-.492a1 1 0 0 1 .365-.08l4.17-.122q.108-.003.214-.03l2.956-.738-2.59-5.369a1 1 0 0 0-.753-.554l-3.122-.467a.6.6 0 0 0-.445.11l-.908.67a.6.6 0 0 1-.613.06l-1.451-.688a1 1 0 0 1-.397-.34l-.616-.9a1 1 0 0 0-.689-.427L9.79 7.177a1 1 0 0 0-.472.049l-1.187.423a1 1 0 0 0-.596.58l-.194.498a1 1 0 0 1-.398.483l-2.267 1.43a1 1 0 0 1-.475.153z\"/>";
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

/** Build a <SaharaDesert/> icon as a live SVGSVGElement (browser only). */
export function SaharaDesert(options: IconOptions = {}): SVGSVGElement {
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
