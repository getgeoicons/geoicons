// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.279 7.802-1.259.014a.5.5 0 0 0-.468.661l.835 2.457a.5.5 0 0 1-.055.434l-.345.527a.5.5 0 0 0-.051.446l.456 1.242a.5.5 0 0 0 .544.323l.687-.105a.5.5 0 0 1 .572.433l.158 1.29a.5.5 0 0 0 .158.306l1.007.927a.5.5 0 0 1-.161.836l-1.26.478 9.849 4.525a.5.5 0 0 0 .658-.237l.85-1.751a.5.5 0 0 1 .139-.174L20.05 16.9a.5.5 0 0 0 .182-.303l.244-1.348a.5.5 0 0 1 .334-.385l1.506-.502a.5.5 0 0 0 .341-.49l-.05-1.493a.5.5 0 0 0-.836-.353l-.96.879a.5.5 0 0 1-.592.061l-.355-.21a.5.5 0 0 1-.143-.734l1.19-1.556a.5.5 0 0 0 .094-.399l-.31-1.596a.5.5 0 0 0-.305-.368l-.653-.261a.5.5 0 0 1-.298-.593l.297-1.122a.5.5 0 0 0-.089-.436l-3.282-4.2a.5.5 0 0 0-.383-.192l-4.434-.098a.5.5 0 0 0-.137.015l-3.75.975a.5.5 0 0 0-.335.287l-1.092 2.55a.5.5 0 0 1-.247.255l-1.449.682a.5.5 0 0 0-.245.251l-.562 1.285a.5.5 0 0 1-.452.3Z\"/>";
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

/** Build a <Sl/> icon as a live SVGSVGElement (browser only). */
export function Sl(options: IconOptions = {}): SVGSVGElement {
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
