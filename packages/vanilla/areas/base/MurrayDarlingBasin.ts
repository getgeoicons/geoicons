// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.016 17.466-.507.866a.6.6 0 0 0 .226.827l.874.488a.6.6 0 0 0 .604-.012l.714-.434a1 1 0 0 1 1.372.33l.815 1.329a1 1 0 0 0 .68.462l5.209.911a1 1 0 0 0 .34 0l2.407-.412a1 1 0 0 0 .711-.511l.595-1.104a.6.6 0 0 1 .877-.203l.596.426a.669.669 0 0 0 1.055-.61l-.21-2.128a1 1 0 0 1 .103-.55l.716-1.413a1 1 0 0 0-.05-.992l-.196-.305a1 1 0 0 1 .646-1.521l1.135-.226a1 1 0 0 0 .801-1.067l-.068-.788a1 1 0 0 1 .08-.488l1.027-2.338a1 1 0 0 0-.112-.996L20.888 4.88a1 1 0 0 0-.805-.406h-2.695a.94.94 0 0 1-.94-.991.94.94 0 0 0-.547-.906l-1.437-.658a1 1 0 0 0-.8-.014l-1.004.418a1 1 0 0 0-.362.258l-.986 1.106a1 1 0 0 0-.219.403L9.77 8.947a1 1 0 0 1-.133.292l-1.299 1.948a1 1 0 0 1-.254.261l-2.302 1.629a1 1 0 0 1-.368.162l-2.49.532a1 1 0 0 0-.646.459l-.288.474a1 1 0 0 0-.125.715l.269 1.346a1 1 0 0 1-.118.701Z\"/>";
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

/** Build a <MurrayDarlingBasin/> icon as a live SVGSVGElement (browser only). */
export function MurrayDarlingBasin(options: IconOptions = {}): SVGSVGElement {
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
