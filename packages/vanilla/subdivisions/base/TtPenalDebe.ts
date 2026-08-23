// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.565 1.418a1 1 0 0 0-.294-.07l-1.613-.128a1 1 0 0 0-.48.08L4.423 3.806a.6.6 0 0 0-.158 1l1.578 1.392a1 1 0 0 0 .282.175l2.751 1.13a1 1 0 0 1 .62.964l-.228 5.883a1 1 0 0 1-.71.918l-2.424.73a1 1 0 0 0-.707.86l-.378 3.85a1 1 0 0 0 .208.715l.738.94a1 1 0 0 0 .898.375l5.486-.614a1 1 0 0 1 .171-.004l5.962.36a.6.6 0 0 0 .636-.605l-.11-11.697a.6.6 0 0 1 .55-.603l.192-.017a.6.6 0 0 0 .538-.71l-.394-2.056a1 1 0 0 1 .02-.46l.246-.873a1 1 0 0 0-.59-1.199z\"/>";
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

/** Build a <TtPenalDebe/> icon as a live SVGSVGElement (browser only). */
export function TtPenalDebe(options: IconOptions = {}): SVGSVGElement {
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
