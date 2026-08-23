// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.857 22.516-5.185-6.39a2 2 0 0 0-.57-.481l-2.638-1.49a1 1 0 0 1-.441-1.23L4.732 8.49a3 3 0 0 0 .038-2.052l-.624-1.821a4 4 0 0 1-.206-1.008l-.117-1.617a.6.6 0 0 1 .55-.642l1.495-.12a.6.6 0 0 1 .56.283l1.462 2.37a1.53 1.53 0 0 0 2.036.54l.683-.374a1 1 0 0 1 1.105.097l1.714 1.374a1 1 0 0 0 .847.195l.508-.116a1 1 0 0 1 1.001.349l1.943 2.413q.063.08.143.146l2.999 2.466a.3.3 0 0 1-.096.517l-1.295.431a1 1 0 0 0-.682.895l-.011.212a1 1 0 0 1-.44.776l-.756.511a1 1 0 0 0-.44.86l.035 1.096a1 1 0 0 1-.23.67L12.32 22.52a.3.3 0 0 1-.464-.003Z\"/>";
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

/** Build a <KnSaintJohnCapisterre/> icon as a live SVGSVGElement (browser only). */
export function KnSaintJohnCapisterre(options: IconOptions = {}): SVGSVGElement {
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
