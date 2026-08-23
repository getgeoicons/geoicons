// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.358 7.447a3 3 0 0 1-1.042-.985l-.364-.565a1 1 0 0 0-.922-.455l-2.211.18a1.5 1.5 0 0 0-1.05.558l-.555.695a1.5 1.5 0 0 0-.319 1.111l.03.25a1.5 1.5 0 0 1-.269 1.044l-.597.837a1 1 0 0 1-.623.401l-5.422 1.053a.934.934 0 0 0-.41 1.642l3.081 2.494c.192.155.41.273.645.349l.928.3a1 1 0 0 0 .865-.123l.912-.614a2 2 0 0 1 1.158-.34l.66.013a1 1 0 0 1 .832.477l1.298 2.115a.6.6 0 0 0 .977.064l.666-.82a1 1 0 0 1 .424-.306l1.814-.684a.6.6 0 0 1 .441.007l.664.274a.6.6 0 0 0 .77-.295l.87-1.811a2 2 0 0 1 .69-.796l3.117-2.09a.683.683 0 0 0-.375-1.251l-1.381-.011a2 2 0 0 1-.971-.26z\"/>";
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

/** Build a <DoMontePlata/> icon as a live SVGSVGElement (browser only). */
export function DoMontePlata(options: IconOptions = {}): SVGSVGElement {
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
