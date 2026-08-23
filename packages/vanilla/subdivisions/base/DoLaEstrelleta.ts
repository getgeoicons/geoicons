// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.413 2.605a1 1 0 0 0-.258.537l-.48 3.225a1 1 0 0 1-.332.607l-3.6 3.136a1 1 0 0 1-.819.233l-.835-.138a1 1 0 0 0-.738.169l-1.293.91a.6.6 0 0 0-.254.518l.031.68a.6.6 0 0 0 .86.513l1.088-.523a1 1 0 0 1 .673-.07l.704.174a1 1 0 0 1 .585.405l1.395 2.034a1 1 0 0 1 .168.681l-.444 3.82a1 1 0 0 1-.434.714l-1.553 1.047a.6.6 0 0 0-.264.524l.006.14a.6.6 0 0 0 .733.56l1.071-.244a1 1 0 0 1 .323-.02l4.944.5a.6.6 0 0 0 .659-.557l.208-3.156a1 1 0 0 0-.641-1l-.753-.288a1 1 0 0 1-.643-.912l-.082-3.733a1 1 0 0 1 .31-.746l1.256-1.196a1 1 0 0 1 .681-.276l.815-.008a1 1 0 0 0 .962-.758l.591-2.379a1 1 0 0 1 .451-.613l1.016-.618a1 1 0 0 1 .885-.076l1.163.456a1 1 0 0 0 1.352-.767l.17-1.027a1 1 0 0 0-.545-1.06l-4.973-2.447a1 1 0 0 0-.331-.097l-2.015-.224a1 1 0 0 0-.84.311z\"/>";
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

/** Build a <DoLaEstrelleta/> icon as a live SVGSVGElement (browser only). */
export function DoLaEstrelleta(options: IconOptions = {}): SVGSVGElement {
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
