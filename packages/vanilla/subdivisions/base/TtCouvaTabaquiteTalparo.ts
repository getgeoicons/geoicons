// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.431 22.66a1 1 0 0 0 .803-.074l1.571-.875a1 1 0 0 0 .507-.752l.459-3.755a.6.6 0 0 0-.443-.654l-1.016-.266a.6.6 0 0 1-.36-.893l2.031-3.323a.6.6 0 0 0-.323-.883l-.719-.238a.6.6 0 0 1-.369-.79l1.084-2.73a.6.6 0 0 0-.423-.807l-.667-.153a.6.6 0 0 1-.464-.627l.227-3.187a1 1 0 0 0-.397-.871l-.32-.24a1 1 0 0 0-.984-.122l-1.426.594a1 1 0 0 1-.475.073l-3.25-.298a1 1 0 0 0-.806.297l-.525.536a1 1 0 0 1-1.105.221l-1.175-.497a.6.6 0 0 0-.832.51L9.736 7.04a1 1 0 0 1-1.017.93l-1.634-.033a2 2 0 0 1-.848-.208L3.669 6.457a.6.6 0 0 0-.841.366l-2.13 7.144a1 1 0 0 0-.016.51l.669 2.904a1 1 0 0 0 .272.488l1.406 1.387a1 1 0 0 1 .276.92l-.362 1.702a.6.6 0 0 0 .642.722l4.237-.39q.17-.016.325-.087l3.724-1.705a1 1 0 0 1 .733-.04z\"/>";
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

/** Build a <TtCouvaTabaquiteTalparo/> icon as a live SVGSVGElement (browser only). */
export function TtCouvaTabaquiteTalparo(options: IconOptions = {}): SVGSVGElement {
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
