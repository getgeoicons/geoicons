// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.845 8.487-.682.897a1 1 0 0 1-.796.394h-.265a.803.803 0 0 0-.709 1.178l.192.363a1 1 0 0 0 .878.532l2.329.013a.6.6 0 0 1 .585.715l-.4 2.038a.6.6 0 0 0 .499.708l.488.075a1 1 0 0 1 .783.633l.551 1.448a1 1 0 0 0 .684.612l2.853.739a1 1 0 0 0 .68-.065l2.212-1.053c.15-.072.28-.18.378-.315l.986-1.355a1 1 0 0 1 1.16-.348l.356.133a1 1 0 0 0 .952-.137l.94-.706a1 1 0 0 0 .322-.414l.524-1.252a1 1 0 0 1 1.113-.596l.21.04a1 1 0 0 0 1.15-.7l.62-2.122a1 1 0 0 0-.925-1.28l-.113-.004a1 1 0 0 1-.93-1.261l.03-.116a1 1 0 0 0-.12-.795l-.297-.472a1 1 0 0 0-.74-.46l-.85-.09a1 1 0 0 0-1.095.853l-.021.146a1 1 0 0 1-.448.699l-.418.27a1 1 0 0 1-1.211-.098l-.167-.15a1 1 0 0 0-1.232-.082l-.68.463a1 1 0 0 0-.215.199l-.58.72a1 1 0 0 1-.695.37l-.836.07a1 1 0 0 1-.832-.331L8.417 6.74a1 1 0 0 0-.308-.234L5.813 5.383a1 1 0 0 0-1.13.175l-.53.506a1 1 0 0 0-.282.957l.15.628a1 1 0 0 1-.176.838Z\"/>";
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

/** Build a <StLawrenceBasin/> icon as a live SVGSVGElement (browser only). */
export function StLawrenceBasin(options: IconOptions = {}): SVGSVGElement {
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
