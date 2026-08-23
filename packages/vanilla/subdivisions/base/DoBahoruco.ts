// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.808 17.65a.6.6 0 0 0 .61-.826l-.347-.84a.6.6 0 0 1 .192-.707l3.717-2.817a2 2 0 0 1 1.274-.405l.641.021a.78.78 0 0 0 .235-1.532l-3.807-1.058a1 1 0 0 1-.596-.46l-.68-1.17a1 1 0 0 0-.826-.495l-4.156-.159a1 1 0 0 0-.696.247l-.723.631a1 1 0 0 1-.963.2L3.866 6.415a1 1 0 0 0-.895.145l-.588.43A1 1 0 0 0 2 7.56l-.674 2.755a.6.6 0 0 0 .376.705l4.34 1.6a1 1 0 0 1 .642 1.099l-.004.025a1 1 0 0 0 .384.959L8.49 15.78a.8.8 0 0 0 .812.09l2.326-1.05a.8.8 0 0 1 .976.258l1.512 2.077a1 1 0 0 0 .718.407z\"/>";
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

/** Build a <DoBahoruco/> icon as a live SVGSVGElement (browser only). */
export function DoBahoruco(options: IconOptions = {}): SVGSVGElement {
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
