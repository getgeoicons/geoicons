// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.273 3.945-.204-.927a1 1 0 0 1 .39-1.025l.539-.391a1 1 0 0 1 1.129-.031l3.927 2.533a3 3 0 0 1 .925.943l1.067 1.724a1 1 0 0 1 .103.828l-.691 2.183a2 2 0 0 1-.556.872l-3.282 3.004a1 1 0 0 0-.324.784l.033.685a1 1 0 0 1-.848 1.035l-1.724.265a.905.905 0 0 1-1.041-.899l.008-1.58a1 1 0 0 1 1.121-.988l.478.058a1 1 0 0 0 1.069-.672l.35-1.038a8 8 0 0 0 .403-2.02l.045-.653a1 1 0 0 0-.51-.94l-.857-.478a1 1 0 0 1-.419-.45l-.638-1.368a7 7 0 0 1-.493-1.454ZM9.906 20.91l-1.436.274a.612.612 0 0 1-.553-1.03L9.55 18.49a1 1 0 0 1 .515-.28l.99-.2a1 1 0 0 1 1.076.502l1.533 2.808a.974.974 0 0 1-.779 1.437l-.072.006a1 1 0 0 1-.802-.308l-1.193-1.253a1 1 0 0 0-.912-.293Z\"/>";
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

/** Build a <BsMooreSIsland/> icon as a live SVGSVGElement (browser only). */
export function BsMooreSIsland(options: IconOptions = {}): SVGSVGElement {
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
