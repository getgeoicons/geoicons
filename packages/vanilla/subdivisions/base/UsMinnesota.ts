// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.077 22.503a.3.3 0 0 0 .3.297h12.097a.6.6 0 0 0 .579-.76l-.261-.944a1 1 0 0 0-.404-.562l-2.714-1.836a1 1 0 0 1-.438-.785l-.108-2.48a1 1 0 0 1 .335-.79l.756-.673a1 1 0 0 0 .336-.743l.005-1.292a1 1 0 0 1 .32-.729l2.747-2.55a1 1 0 0 1 .218-.154l1.62-.845c.825-.43.668-1.653-.239-1.86l-.91-.21a1 1 0 0 0-.39-.01l-1.754.297a1 1 0 0 1-.66-.116L13.163 4.43a1 1 0 0 0-.659-.116l-1.402.237a1 1 0 0 1-.62-.094l-1.407-.715L8.673 1.3l-1.609-.1.015 1.522-4.601.03a.3.3 0 0 0-.295.347l1.546 9.674a1 1 0 0 1-.097.613l-.648 1.266a1 1 0 0 0 .021.95l.885 1.557a1 1 0 0 1 .13.482z\"/>";
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

/** Build a <UsMinnesota/> icon as a live SVGSVGElement (browser only). */
export function UsMinnesota(options: IconOptions = {}): SVGSVGElement {
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
