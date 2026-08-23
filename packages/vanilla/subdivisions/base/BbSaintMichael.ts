// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.36 1.764a.3.3 0 0 0-.504-.168l-1.877 1.802a.9.9 0 0 1-.78.236 2.69 2.69 0 0 0-2.263.64l-.504.45a1 1 0 0 1-.993.199L7.18 3.796a.3.3 0 0 0-.398.274l-.028.89a.3.3 0 0 1-.343.288L4.306 4.94a.3.3 0 0 0-.322.185L3.283 6.87a.6.6 0 0 0-.027.364l.48 2.007a2 2 0 0 0 .466.882l.613.673a2 2 0 0 1 .392.638l.264.697a.6.6 0 0 1-.308.756l-.14.065a.6.6 0 0 0-.333.664l.422 2.06a1 1 0 0 0 .521.688l3.27 1.684a2 2 0 0 1 1.05 1.41l.01.052a2 2 0 0 1-.253 1.401l-.134.223a.6.6 0 0 0 .408.9l3.488.626a.6.6 0 0 0 .703-.653l-.082-.78a.6.6 0 0 1 .271-.566l1.956-1.262c.47-.303.98-.54 1.515-.701l2.674-.81a.3.3 0 0 0 .203-.366l-1.952-7.164z\"/>";
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

/** Build a <BbSaintMichael/> icon as a live SVGSVGElement (browser only). */
export function BbSaintMichael(options: IconOptions = {}): SVGSVGElement {
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
