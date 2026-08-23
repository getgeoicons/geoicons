// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.825 21.694a2 2 0 0 0 1.088-.857l1.231-2.01a2 2 0 0 0 .294-1.011l.053-3.235a.3.3 0 0 0-.258-.302l-1.247-.177a.3.3 0 0 1-.205-.468l2.061-2.985a1 1 0 0 0 .175-.639l-.21-2.956a1 1 0 0 0-.718-.889l-.108-.031a1 1 0 0 0-.804.109l-1.235.762a1 1 0 0 1-1.382-.335l-1.31-2.174a3 3 0 0 1-.33-.78l-.378-1.43a1 1 0 0 0-.68-.701l-.725-.218a2 2 0 0 0-1.115-.01l-1.398.392a2 2 0 0 1-.777.06l-2.135-.255a.6.6 0 0 0-.639.79l.41 1.201a.6.6 0 0 1-.508.791l-.972.097a.6.6 0 0 0-.516.765l.91 3.124a.6.6 0 0 1-.266.681l-.682.413a.6.6 0 0 0-.215.801l.49.897a2 2 0 0 0 .885.84l.354.172a1 1 0 0 1 .474.485l.032.07a1 1 0 0 1-.118 1.026l-.076.099a1 1 0 0 1-.669.38l-.302.038a1 1 0 0 0-.874 1.073l.1 1.22a1 1 0 0 0 .276.613L7 19.412a1 1 0 0 0 .77.305l1.623-.08a.8.8 0 0 1 .838.747l.047.726a1 1 0 0 0 .494.8l.626.365c.323.188.677.314 1.046.372l.263.042a3 3 0 0 0 1.392-.11z\"/>";
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

/** Build a <SvMorazan/> icon as a live SVGSVGElement (browser only). */
export function SvMorazan(options: IconOptions = {}): SVGSVGElement {
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
