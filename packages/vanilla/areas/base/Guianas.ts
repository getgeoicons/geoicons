// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.529 5.991 4.09 4.876a1 1 0 0 1 1.228.05l5.134 4.35a1 1 0 0 0 .584.235l6.585.411a1 1 0 0 1 .393.108l2.677 1.371a1 1 0 0 1 .31.247l1.487 1.773a.6.6 0 0 1 .013.755l-2.625 3.358a1 1 0 0 1-.698.38l-1.55.14a1 1 0 0 1-.799-.288l-.711-.711a1 1 0 0 0-.707-.293h-1.095c-.426 0-.8.279-.923.686a.964.964 0 0 1-1.063.677l-1.366-.201a1 1 0 0 0-.628.113l-2.466 1.36a1 1 0 0 1-.692.101l-1.554-.333a1 1 0 0 1-.734-.645l-.746-2.113a1 1 0 0 1 .015-.704l.673-1.681a1 1 0 0 0-.222-1.079l-2.98-2.98a1 1 0 0 1-.247-1.009l.774-2.45a1 1 0 0 1 .372-.513Z\"/>";
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

/** Build a <Guianas/> icon as a live SVGSVGElement (browser only). */
export function Guianas(options: IconOptions = {}): SVGSVGElement {
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
