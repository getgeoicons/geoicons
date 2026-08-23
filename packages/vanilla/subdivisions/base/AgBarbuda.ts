// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.055 1.54a.6.6 0 0 0-.657-.217l-1.8.548a3 3 0 0 0-1.327.831L3.53 4.583a.538.538 0 0 0 .094.813 9 9 0 0 1 3.04 3.477l.026.05c.492.998.799 2.078.905 3.185l.004.037a9.4 9.4 0 0 1-.357 3.607l-.584 1.938a.635.635 0 0 0 .967.707l1.298-.89a2.58 2.58 0 0 1 3.16.19l1.05.922a3 3 0 0 0 1.154.63l.465.134a2.49 2.49 0 0 1 1.757 1.918l.172.887a.3.3 0 0 0 .3.243l3.413-.06a.3.3 0 0 0 .292-.341l-.471-3.37a4 4 0 0 1 .03-1.295l.246-1.299a4 4 0 0 0-.076-1.808l-.612-2.21a4 4 0 0 0-.826-1.545L14.06 4.804a1 1 0 0 0-.64-.34l-1.982-.233a1 1 0 0 1-.688-.398z\"/>";
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

/** Build a <AgBarbuda/> icon as a live SVGSVGElement (browser only). */
export function AgBarbuda(options: IconOptions = {}): SVGSVGElement {
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
