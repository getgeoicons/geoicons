// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m18.89 19.936-4.952-.263.954-2.583a1 1 0 0 0-.033-.772l-1.781-3.785a1 1 0 0 1-.093-.494l.062-.901a1 1 0 0 0-.543-.959l-1.784-.912a1 1 0 0 0-.634-.094l-4.358.79A1 1 0 0 1 5 9.814L3.017 8.51a1 1 0 0 1-.244-.228L1.409 6.5a1 1 0 0 1-.205-.618l.01-.852a.893.893 0 0 1 1.693-.386l.635 1.284a1 1 0 0 0 .545.493l2.303.864a1 1 0 0 0 .515.05l2.148-.357a1 1 0 0 0 .51-.248l.894-.815a1 1 0 0 1 .637-.26l3.24-.117a1 1 0 0 1 1.026.856l.437 3.019a1 1 0 0 0 1.153.843l4.184-.692a1 1 0 0 1 .937.354l.332.406a1 1 0 0 1 .132 1.056l-.483 1.033a1 1 0 0 0-.055.697l.559 1.957a1 1 0 0 1-.09.765l-.727 1.292a.6.6 0 0 1-.69.282l-1.16-.335a.6.6 0 0 0-.763.516z\"/>";
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

/** Build a <GulfOfGuinea/> icon as a live SVGSVGElement (browser only). */
export function GulfOfGuinea(options: IconOptions = {}): SVGSVGElement {
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
